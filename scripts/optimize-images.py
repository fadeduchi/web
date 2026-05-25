"""Genera versiones web optimizadas en assets/images/web/"""
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "assets" / "images"
OUT = SRC / "web"
OUT.mkdir(exist_ok=True)

JOBS = [
    ("sede-cooperativa.jpg", "hero-sede-cooperativa.jpg", 1920, 85),
    ("sede-cooperativa.jpg", "galeria-sede-cooperativa.jpg", 1280, 88),
    ("sede-cooperativa.jpg", "servicio-sede.jpg", 800, 85),
    ("jacinto-arauz-panoramio-4.jpg", "hero-jacinto-arauz.jpg", 1920, 82),
    ("jacinto-arauz-panoramio-4.jpg", "galeria-panorama.jpg", 1280, 85),
    ("estacion-historica-1901.jpg", "galeria-estacion-1901.jpg", 960, 85),
    ("estacion-historica-1901.jpg", "servicio-energia.jpg", 720, 82),
    ("jacinto-arauz-panoramio-11.jpg", "galeria-vista-urbana.jpg", 960, 85),
    ("jacinto-arauz-panoramio-11.jpg", "servicio-fibra.jpg", 720, 82),
]

for src_name, dst_name, max_w, quality in JOBS:
    im = Image.open(SRC / src_name).convert("RGB")
    w, h = im.size
    if w > max_w:
        nh = int(h * max_w / w)
        im = im.resize((max_w, nh), Image.Resampling.LANCZOS)
    path = OUT / dst_name
    im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    kb = path.stat().st_size // 1024
    print(f"{dst_name}: {kb} KB ({im.size[0]}x{im.size[1]})")
