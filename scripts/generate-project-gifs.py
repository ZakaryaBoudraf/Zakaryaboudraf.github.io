# -*- coding: utf-8 -*-
"""Generate pixel-art animated GIFs for each portfolio project card.
Logical canvas 160x120, nearest-neighbour upscale x2 -> 320x240, shared
retro palette on dark navy. Also emits a contact-sheet PNG per GIF for QA."""
import math, os, random
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Study\Thesis\Claude code\ZakaryaBoudraf.github.io\src\assets\gifs"
QA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "gif_qa")
os.makedirs(OUT, exist_ok=True)
os.makedirs(QA, exist_ok=True)

W, H, SCALE = 160, 120, 2
F = ImageFont.load_default()

BG = (13, 16, 33); PANEL = (26, 31, 58); GRID = (32, 38, 72)
GREEN = (51, 255, 102); RED = (255, 68, 68); AMBER = (255, 204, 51)
BLUE = (68, 136, 255); CYAN = (0, 220, 220); WHITE = (240, 240, 240)
GRAY = (128, 134, 150); DGRAY = (58, 62, 80); GOLD = (217, 164, 65)
TEAL = (15, 124, 124)

def new_frame(bg=BG):
    img = Image.new("RGB", (W, H), bg)
    return img, ImageDraw.Draw(img)

def save_gif(name, frames, duration=100):
    big = [f.resize((W * SCALE, H * SCALE), Image.NEAREST) for f in frames]
    path = os.path.join(OUT, name + ".gif")
    big[0].save(path, save_all=True, append_images=big[1:], duration=duration,
                loop=0, optimize=True)
    # QA contact sheet: every 3rd frame in a grid
    picks = frames[::3][:8]
    cols = 4
    rows = (len(picks) + cols - 1) // cols
    sheet = Image.new("RGB", (W * cols, H * rows), (0, 0, 0))
    for i, fr in enumerate(picks):
        sheet.paste(fr, ((i % cols) * W, (i // cols) * H))
    sheet.save(os.path.join(QA, name + "_sheet.png"))
    print(f"{name}.gif  {os.path.getsize(path)//1024} KB  ({len(frames)} frames)")

def rot_teeth(d, cx, cy, r, n, ang0, size, col):
    for k in range(n):
        a = math.radians(ang0 + k * (360 / n))
        x = cx + r * math.cos(a); y = cy + r * math.sin(a)
        d.rectangle([x - size/2, y - size/2, x + size/2, y + size/2], fill=col)

# 1 ── Predictive maintenance: gear + scrolling vibration signal + alert
def gif_predictive():
    frames = []
    n = 28
    for f in range(n):
        img, d = new_frame()
        spike_x = (f * 7) % (W + 60) - 30          # travelling fault spike
        alert = 100 <= spike_x <= 130
        gcol = AMBER if alert else GRAY
        rot_teeth(d, 42, 46, 24, 8, f * 6, 7, gcol)
        d.ellipse([42-18, 46-18, 42+18, 46+18], fill=gcol)
        d.ellipse([42-7, 46-7, 42+7, 46+7], fill=BG)
        # signal panel
        d.rectangle([6, 78, 154, 112], fill=PANEL)
        for gx in range(10, 155, 12):
            d.line([gx, 78, gx, 112], fill=GRID)
        pts = []
        for x in range(8, 153):
            y = 95 + 4 * math.sin((x + f * 7) / 6.0) + 2 * math.sin((x + f * 7) / 2.3)
            dist = abs(x - spike_x)
            if dist < 8:
                y -= (8 - dist) * 2.2 * (1 if (x + f) % 2 else 0.7)
            pts.append((x, y))
        d.line(pts, fill=GREEN)
        d.line([120, 78, 120, 112], fill=RED)       # sensor threshold marker
        if alert:
            d.polygon([(96, 22), (108, 22), (102, 10)], fill=AMBER)
            d.text((100, 12), "!", font=F, fill=BG)
            d.text((92, 28), "FAULT", font=F, fill=AMBER)
        frames.append(img)
    save_gif("predictive-maintenance", frames, 110)

# 2 ── IoT IDS: packets flow into STM32 chip, red one gets blocked
def gif_ids():
    frames = []
    n = 30
    lanes = [46, 60, 74]
    # packets: (lane, colour, start offset)
    plan = [(0, GREEN, 0), (1, RED, 40), (2, GREEN, 80), (1, GREEN, 120), (0, GREEN, 160)]
    for f in range(n):
        img, d = new_frame()
        # chip
        d.rectangle([98, 34, 142, 86], fill=PANEL, outline=BLUE)
        for py in range(40, 84, 8):
            d.rectangle([94, py, 98, py + 3], fill=GRAY)
            d.rectangle([142, py, 146, py + 3], fill=GRAY)
        d.text((106, 42), "STM32", font=F, fill=WHITE)
        d.text((112, 58), "NN", font=F, fill=CYAN)
        blocked = False
        for lane, col, off in plan:
            x = (f * 7 + off) % 210 - 20
            y = lanes[lane]
            if x < 94:
                d.rectangle([x, y - 3, x + 7, y + 3], fill=col)
            elif col == GREEN:
                if x > 146:   # passed through, exits as a check
                    ex = min(x, 150)
                    d.line([ex, y, ex + 3, y + 3], fill=GREEN)
                    d.line([ex + 3, y + 3, ex + 8, y - 4], fill=GREEN)
            else:            # red packet reaching the chip -> blocked
                if x < 118:
                    blocked = True
        if blocked:
            d.rectangle([98, 34, 142, 86], outline=RED)
            d.ellipse([76, 16, 92, 32], outline=RED)
            d.line([79, 19, 89, 29], fill=RED)
            d.line([89, 19, 79, 29], fill=RED)
            d.text((44, 18), "BLOCK", font=F, fill=RED)
        d.text((8, 8), "PACKETS IN", font=F, fill=GRAY)
        frames.append(img)
    save_gif("intrusion-detection", frames, 100)

# 3 ── Traffic: emergency vehicle triggers the green wave
def gif_traffic():
    frames = []
    n = 36
    for f in range(n):
        img, d = new_frame()
        d.rectangle([0, 50, 160, 70], fill=DGRAY)      # horizontal road
        d.rectangle([70, 0, 90, 120], fill=DGRAY)      # vertical road
        for x in range(4, 160, 16):                    # dashes
            if not 62 <= x <= 98:
                d.rectangle([x, 59, x + 6, 61], fill=WHITE)
        for y in range(4, 120, 16):
            if not 42 <= y <= 78:
                d.rectangle([79, y, 81, y + 6], fill=WHITE)
        ev_green = 10 <= f <= 30                       # horizontal green window
        # traffic light (horizontal flow) at corner
        d.rectangle([58, 36, 66, 48], fill=PANEL)
        d.ellipse([60, 38, 64, 42], fill=(90, 30, 30) if ev_green else RED)
        d.ellipse([60, 43, 64, 47], fill=GREEN if ev_green else (25, 70, 40))
        # vertical cars: flow while horizontal is red, then hold
        for i, off in enumerate([0, 46]):
            vy = (f * 5 + off) % 150 - 15
            if ev_green and 8 <= vy <= 44:
                vy = 8 + i * 14                        # queue above junction
            d.rectangle([73, vy, 79, vy + 9], fill=BLUE if i == 0 else CYAN)
        # horizontal queue: two cars + EV behind
        adv = max(0, (f - 10) * 6) if f >= 10 else 0
        positions = [52 + adv, 38 + adv, 20 + adv]
        cols = [AMBER, GRAY, WHITE]
        for i, (px, col) in enumerate(zip(positions, cols)):
            if px < 168:
                d.rectangle([px, 56, px + 11, 64], fill=col)
                if i == 2:                             # EV flashing roof
                    lite = RED if f % 2 else BLUE
                    d.rectangle([px + 4, 54, px + 7, 56], fill=lite)
        d.text((6, 8), "EMERGENCY PRIORITY" if ev_green else "RL AGENT", font=F,
               fill=GREEN if ev_green else GRAY)
        frames.append(img)
    save_gif("traffic-control", frames, 110)

# 4 ── AI art detection: scan a painting, verdict badge
def gif_art():
    frames = []
    rng = random.Random(7)
    glitches = [(rng.randint(54, 96), rng.randint(24, 66), rng.randint(4, 14),
                 rng.choice([RED, CYAN, AMBER, (200, 80, 200)])) for _ in range(14)]
    def painting(d, ai):
        d.rectangle([52, 22, 108, 74], fill=(96, 144, 200))          # sky
        d.ellipse([88, 26, 100, 38], fill=(245, 220, 140))           # sun
        d.polygon([(52, 58), (74, 40), (94, 58)], fill=(58, 118, 84))# hill
        d.rectangle([52, 58, 108, 74], fill=(32, 84, 122))           # water
        if ai:
            d.ellipse([58, 30, 68, 40], fill=(245, 220, 140))        # 2nd sun!
            for gx, gy, gw, gc in glitches:
                d.rectangle([gx, gy, min(gx + gw, 107), gy + 2], fill=gc)
    n = 32
    for f in range(n):
        img, d = new_frame()
        ai = f >= 16
        ph = f % 16
        d.rectangle([48, 18, 112, 78], outline=GOLD)
        d.rectangle([49, 19, 111, 77], outline=GOLD)
        painting(d, ai)
        if ph <= 9:                                    # scanning sweep
            sy = 22 + ph * 6
            d.line([52, sy, 108, sy], fill=CYAN)
            d.text((58, 92), "SCANNING...", font=F, fill=CYAN)
        else:                                          # verdict
            label, col = ("AI 99%", RED) if ai else ("REAL 96%", GREEN)
            tw = d.textlength(label, font=F)
            d.rectangle([80 - tw/2 - 4, 88, 80 + tw/2 + 4, 104], fill=PANEL, outline=col)
            d.text((80 - tw/2, 92), label, font=F, fill=col)
        d.text((56, 6), "ResNet CNN", font=F, fill=GRAY)
        frames.append(img)
    save_gif("ai-art-detection", frames, 130)

# 5 ── Fire detection: flame grows, MQTT alert, fan spins it down
def gif_fire():
    frames = []
    n = 32
    for f in range(n):
        img, d = new_frame()
        if f < 8:        size, fan_s, msg = 3 + (f % 2), 8, None
        elif f < 14:     size, fan_s, msg = 4 + (f - 8) * 2, 8, None
        elif f < 20:     size, fan_s, msg = 14, 8, (f - 14) / 5.0
        elif f < 28:     size, fan_s, msg = max(2, 14 - (f - 20) * 2), 40, None
        else:            size, fan_s, msg = 3, 20, None
        d.line([6, 100, 154, 100], fill=DGRAY)
        # flame (two-tone flicker)
        fx, fy = 34, 100
        flick = 1 if f % 2 else -1
        d.polygon([(fx - size, fy), (fx + size, fy), (fx + flick, fy - size * 2)],
                  fill=(255, 120, 40))
        if size > 4:
            d.polygon([(fx - size//2, fy), (fx + size//2, fy), (fx, fy - size)],
                      fill=AMBER)
        # thermometer
        d.rectangle([10, 30, 16, 92], outline=GRAY)
        lvl = min(58, 6 + size * 4)
        d.rectangle([11, 92 - lvl, 15, 92], fill=RED if size > 8 else AMBER)
        # MQTT broker
        d.rectangle([66, 18, 100, 38], fill=PANEL, outline=CYAN)
        d.text((70, 22), "MQTT", font=F, fill=CYAN)
        for k in range(5):                              # dotted links
            d.point((44 + k * 5, 60 - k * 5), fill=GRAY)
            d.point((104 + k * 5, 33 + k * 5), fill=GRAY)
        if msg is not None:                             # travelling message dot
            t = msg
            if t < 0.5:
                mx, my = 44 + (t * 2) * 40, 62 - (t * 2) * 34
            else:
                mx, my = 100 + (t - 0.5) * 2 * 26, 30 + (t - 0.5) * 2 * 34
            d.ellipse([mx - 2, my - 2, mx + 2, my + 2], fill=CYAN)
        # fan
        cx, cy = 128, 78
        rot_teeth(d, cx, cy, 10, 4, f * fan_s, 8, WHITE if fan_s > 20 else GRAY)
        d.ellipse([cx - 3, cy - 3, cx + 3, cy + 3], fill=BLUE)
        if fan_s > 20:
            for k in range(3):
                lx = 108 - k * 7
                d.line([lx, 70 + k * 6, lx + 6, 70 + k * 6], fill=CYAN)
        d.text((6, 6), "TEMP SENSOR + AUTO FAN", font=F, fill=GRAY)
        frames.append(img)
    save_gif("fire-detection", frames, 110)

# 6 ── EEG seizure detection: scrolling traces, red burst flagged
def gif_eeg():
    frames = []
    rng = random.Random(3)
    noise = [rng.uniform(-1.5, 1.5) for _ in range(600)]
    BURST = (260, 330)                                  # world-x of seizure
    n = 30
    for f in range(n):
        img, d = new_frame()
        off = f * 12
        hit = False
        for ch, cy in enumerate([28, 58, 88]):
            pts = []
            for x in range(6, 155):
                wx = (x + off) % 480
                amp = noise[(wx * (ch + 2)) % 600] * 2.5
                y = cy + amp + 2.5 * math.sin((wx + ch * 40) / 9.0)
                if BURST[0] <= wx <= BURST[1]:
                    y = cy + (10 if (wx // 3) % 2 else -10) + amp
                    if 70 <= x <= 90:
                        hit = True
                pts.append((x, y))
            d.line(pts, fill=GREEN if not hit else (140, 255, 160))
            d.text((6, cy - 14), f"CH{ch+1}", font=F, fill=GRAY)
        for my in range(10, 110, 6):                    # centre marker
            d.point((80, my), fill=GRAY)
        if hit:
            d.rectangle([64, 12, 96, 104], outline=RED)
            d.text((104, 8), "SEIZURE", font=F, fill=RED if f % 2 else AMBER)
        else:
            d.text((104, 8), "normal", font=F, fill=GRAY)
        frames.append(img)
    save_gif("seizure-detection", frames, 110)

# 7 ── Java CRUD: create, read, update, delete on a tiny Win98 table
def gif_crud():
    frames = []
    n = 32
    ROWY = [46, 60, 74, 88]
    def bars(d, y, widths, col=(90, 90, 100)):
        x = 28
        for w in widths:
            d.rectangle([x, y + 3, x + w, y + 7], fill=col)
            x += w + 10
    for f in range(n):
        img, d = new_frame()
        d.rectangle([20, 12, 140, 102], fill=(224, 224, 224))
        d.rectangle([20, 12, 140, 24], fill=(0, 0, 128))
        d.text((24, 13), "records.db", font=F, fill=WHITE)
        d.rectangle([24, 30, 136, 42], fill=(200, 200, 208))
        bars(d, 32, [18, 30, 22], col=(70, 70, 80))
        rows = 3 if f < 8 or f >= 28 else 4
        phase = ("create" if f < 8 else "read" if f < 16 else
                 "update" if f < 24 else "delete")
        for i in range(rows):
            y = ROWY[i]
            hl = None
            if phase == "create" and i == rows - 1 and f >= 4:
                hl = GREEN
            if phase == "read" and i == 1:
                hl = BLUE
            if phase == "update" and i == 1:
                hl = AMBER if f % 2 else None
            if phase == "delete" and i == 2 and f >= 26:
                hl = RED
            if hl:
                d.rectangle([24, y, 136, y + 12], outline=hl)
            w2 = 44 if (phase in ("update", "delete") and i == 1) else 30
            bars(d, y, [18, w2, 22])
        labels = {"create": ("+ INSERT", GREEN), "read": ("SELECT", BLUE),
                  "update": ("UPDATE", AMBER), "delete": ("DELETE", RED)}
        t, c = labels[phase]
        d.text((24, 106), t, font=F, fill=c)
        cursor = {"create": (120, 92), "read": (70, 66), "update": (86, 66),
                  "delete": (70, 80)}[phase]
        cx, cy = cursor
        d.polygon([(cx, cy), (cx, cy + 8), (cx + 5, cy + 5)], fill=WHITE, outline=(0,0,0))
        frames.append(img)
    save_gif("java-crud", frames, 130)

# 8 ── Archi-design site: wireframe -> paint -> scroll in a browser
def gif_archi():
    frames = []
    n = 32
    for f in range(n):
        img, d = new_frame()
        d.rectangle([12, 8, 148, 108], fill=(230, 230, 230))
        d.rectangle([12, 8, 148, 20], fill=DGRAY)
        for k, c in enumerate([RED, AMBER, GREEN]):
            d.ellipse([17 + k * 8, 12, 21 + k * 8, 16], fill=c)
        d.rectangle([48, 11, 144, 17], fill=WHITE)
        d.rectangle([51, 13, 96, 15], fill=GRAY)
        scroll = max(0, (f - 22) * 4) if f >= 22 else 0
        def blk(x0, y0, x1, y1, col, outline_only):
            y0 -= scroll; y1 -= scroll
            y0 = max(y0, 22); y1 = min(y1, 106)
            if y1 <= y0: return
            if outline_only:
                d.rectangle([x0, y0, x1, y1], outline=GRAY)
            else:
                d.rectangle([x0, y0, x1, y1], fill=col)
        wire = f < 12
        if f >= 2:  blk(16, 24, 144, 34, TEAL, wire)                 # header
        if f >= 5:  blk(16, 38, 144, 62, (232, 222, 200), wire)      # hero
        if f >= 5 and not wire:
            blk(24, 52, 88, 55, GOLD, False)
        if f >= 8:                                                   # 3 columns
            for k in range(3):
                x0 = 16 + k * 44
                blk(x0, 66, x0 + 40, 90, (150, 160, 178), wire)
        if f >= 10: blk(16, 94, 144, 120, TEAL, wire)                # footer
        d.text((16, 110), "React + responsive", font=F, fill=GRAY)
        frames.append(img)
    save_gif("archi-design", frames, 120)

# 9 ── VSR thesis: lips -> frozen AV-HuBERT + LoRA -> decoded text
def gif_thesis():
    frames = []
    n = 26
    text_full = "HELLO WORLD"
    for f in range(n):
        img, d = new_frame()
        d.text((8, 6), "VSR - LIP READING", font=F, fill=GRAY)
        # face
        d.rectangle([14, 22, 58, 78], fill=(198, 156, 118))          # head
        d.rectangle([14, 22, 58, 32], fill=(52, 40, 34))             # hair
        d.rectangle([22, 42, 27, 46], fill=(20, 20, 30))             # eyes
        d.rectangle([45, 42, 50, 46], fill=(20, 20, 30))
        mouth = f % 4                                                 # viseme cycle
        mx, my = 36, 64
        if mouth == 0:
            d.rectangle([mx - 7, my, mx + 7, my + 1], fill=(120, 60, 50))
        elif mouth == 1:
            d.rectangle([mx - 6, my - 2, mx + 6, my + 3], fill=(90, 40, 40))
        elif mouth == 2:
            d.rectangle([mx - 7, my - 4, mx + 7, my + 5], fill=(60, 25, 30))
            d.rectangle([mx - 5, my - 2, mx + 5, my + 1], fill=(30, 12, 16))
        else:
            d.ellipse([mx - 4, my - 4, mx + 4, my + 4], fill=(60, 25, 30))
        # video frames travelling to the model
        for k in range(3):
            fx = 62 + ((f * 6 + k * 12) % 36)
            d.rectangle([fx, 44, fx + 8, 52], outline=GRAY)
            d.point((fx + 2, 46), fill=GRAY); d.point((fx + 6, 50), fill=GRAY)
        # frozen backbone
        d.rectangle([98, 28, 150, 72], fill=PANEL, outline=BLUE)
        d.text((101, 34), "AV-HuBERT", font=F, fill=WHITE)
        cx, cy = 140, 24                                              # snowflake
        for a in range(0, 180, 45):
            r = math.radians(a)
            d.line([cx - 6 * math.cos(r), cy - 6 * math.sin(r),
                    cx + 6 * math.cos(r), cy + 6 * math.sin(r)], fill=CYAN)
        # LoRA adapter chips plugged into the frozen block
        for k, ax in enumerate([104, 118]):
            d.rectangle([ax, 68, ax + 9, 76], fill=AMBER if (f + k) % 2 else GOLD)
        d.text((132, 66), "LoRA", font=F, fill=AMBER)
        # decoded transcript typing out
        shown = text_full[: max(0, min(len(text_full), (f - 2) // 2))]
        d.rectangle([8, 92, 152, 110], fill=PANEL)
        d.text((12, 96), "> " + shown, font=F, fill=GREEN)
        tw = d.textlength("> " + shown, font=F)
        if f % 2:
            d.rectangle([12 + tw + 1, 96, 12 + tw + 5, 105], fill=GREEN)
        frames.append(img)
    save_gif("thesis-vsr", frames, 120)

gif_predictive(); gif_ids(); gif_traffic(); gif_art()
gif_fire(); gif_eeg(); gif_crud(); gif_archi(); gif_thesis()
print("DONE ->", OUT)
