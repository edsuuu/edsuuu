#!/usr/bin/env python3
"""Gera o README do perfil: os SVGs em .github/readme/ e o bloco de projetos recentes.

    pip install fonttools brotli
    python .github/readme/build.py

Roda sozinho pelo workflow .github/workflows/readme.yml. Localmente usa GITHUB_TOKEN
ou o token do `gh`. Só repositórios públicos, sem forks, entram nos projetos recentes.
A JetBrains Mono vem de JBMONO_DIR ou de uma IDE JetBrains instalada; só os caracteres
usados entram em cada SVG (subset woff2). Os SVGs seguem o tema claro/escuro.
"""
import base64
import glob
import io
import json
import os
import re
import subprocess
import textwrap
import urllib.request
from html import escape, unescape
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

OUT = Path(__file__).parent
README = OUT.parent.parent / "README.md"
USER = "edsuuu"
EM = 0.6  # JetBrains Mono: avanço de 600/1000 em todos os glifos

HEADLINE = "edsuuu"
LINKS = ["~/portfolio", "./contact", "./stats"]

# ---------------------------------------------------------------- tema
THEME = """
svg{--fg:#0f172a;--muted:#475569;--dim:#94a3b8;--grid:rgba(15,23,42,.07);--line:#d0d7de;
--card:rgba(246,248,250,.7);--code:rgba(15,23,42,.035);--brand:#00a4ef;--chip:#0284c7;
--chipbg:rgba(0,164,239,.06);--green:#16a34a;--red:#dc2626;--path:#2563eb;--cyan:#0891b2}
@media (prefers-color-scheme:dark){svg{--fg:#ededed;--muted:#9ca3af;--dim:#4b5563;
--grid:rgba(200,200,200,.06);--line:#30363d;--card:rgba(255,255,255,.02);--code:rgba(255,255,255,.03);
--chip:#00a4ef;--chipbg:rgba(0,164,239,.08);--green:#22c55e;--red:#f87171;--path:#3b82f6;--cyan:#22d3ee}}
text{font-family:J,'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;fill:var(--fg)}
.b{font-weight:700}.fg{fill:var(--fg)}.mu{fill:var(--muted)}.dim{fill:var(--dim)}.br{fill:var(--brand)}
.gr{fill:var(--green)}.rd{fill:var(--red)}.pa{fill:var(--path)}.cy{fill:var(--cyan)}
.chipr{fill:var(--chipbg);stroke:var(--brand);stroke-opacity:.45}.chipt{fill:var(--chip)}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
"""


def find_font(weight):
    roots = [os.environ.get("JBMONO_DIR", ""),
             r"C:\Program Files\JetBrains\*\jbr\lib\fonts",
             os.path.expanduser(r"~\AppData\Local\Programs\*\jbr\lib\fonts"),
             "/usr/share/fonts/**", os.path.expanduser("~/Library/Fonts")]
    for root in filter(None, roots):
        hits = glob.glob(os.path.join(root, f"JetBrainsMono-{weight}.ttf"), recursive=True)
        if hits:
            return hits[0]
    raise SystemExit(f"JetBrainsMono-{weight}.ttf não encontrada: defina JBMONO_DIR")


def font_css(body):
    chars = set(unescape("".join(re.findall(r">([^<>]*)<", body)))) | {" "}
    css = ""
    for weight, num in (("Regular", 400), ("Bold", 700)):
        font = TTFont(find_font(weight))
        sub = subset.Subsetter(subset.Options())
        sub.populate(text="".join(chars))
        sub.subset(font)
        font.flavor = "woff2"
        buf = io.BytesIO()
        font.save(buf)
        b64 = base64.b64encode(buf.getvalue()).decode()
        css += f"@font-face{{font-family:J;font-weight:{num};src:url(data:font/woff2;base64,{b64}) format('woff2')}}\n"
    return css


def write(name, w, h, body, css="", title=""):
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" '
           f'role="img" aria-label="{escape(title)}"><title>{escape(title)}</title>'
           f"<style>{font_css(body)}{THEME}{css}</style>{body}</svg>")
    (OUT / name).write_text(svg, encoding="utf-8")
    print(f"{name}: {len(svg) / 1024:.1f} KB")


def tw(text, size):
    return len(text) * EM * size


def t(text, cls=""):
    return f'<tspan class="{cls}">{escape(text)}</tspan>' if cls else escape(text)


def clip(text, n):
    return text if len(text) <= n else text[:n - 1].rstrip() + "…"


# ---------------------------------------------------------------- hero
def hero():
    W, H, X = 1000, 212, 6
    css = """.gl{fill:none;stroke:var(--grid)}
.net line{stroke:var(--brand);stroke-opacity:.22}.net circle{fill:var(--brand);fill-opacity:.55}
.pulse{animation:pulse 3s ease-in-out infinite}@keyframes pulse{50%{fill-opacity:.15}}
@keyframes in{from{opacity:0;transform:translateY(6px)}}@keyframes ty{from{opacity:0}}"""

    def intro(delay):
        return f'style="animation:in .5s ease-out {delay}s both"'

    b = [f'<defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">'
         f'<path d="M40 0H0V40" class="gl"/></pattern>'
         f'<radialGradient id="f" cx="30%" cy="40%" r="80%"><stop offset="0" stop-color="#fff"/>'
         f'<stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'
         f'<mask id="m"><rect width="{W}" height="{H}" fill="url(#f)"/></mask></defs>'
         f'<rect width="{W}" height="{H}" fill="url(#g)" mask="url(#m)"/>']

    # rede de partículas (o fundo do portfólio)
    pts = [(818, 24), (874, 62), (946, 34), (990, 92), (922, 112), (850, 128),
           (968, 170), (888, 190), (800, 92), (940, 204)]
    edges = [(0, 1), (1, 2), (2, 3), (1, 4), (3, 4), (4, 5), (5, 8), (0, 8), (4, 6), (6, 7), (5, 7), (6, 9), (3, 6)]
    net = "".join(f'<line x1="{pts[a][0]}" y1="{pts[a][1]}" x2="{pts[c][0]}" y2="{pts[c][1]}"/>' for a, c in edges)
    for i, (x, y) in enumerate(pts):
        pulse = f' class="pulse" style="animation-delay:{i * .4:.1f}s"' if i % 3 == 0 else ""
        net += f'<circle cx="{x}" cy="{y}" r="2.6"{pulse}/>'
    b.append(f'<g class="net">{net}</g>')

    cmd = "./init_portfolio.sh"
    typed = "".join(f'<tspan style="animation:ty .01s {0.35 + i * 0.035:.3f}s both">{escape(c)}</tspan>'
                    for i, c in enumerate(cmd))
    b.append(f'<text x="{X}" y="48" font-size="17" class="b" opacity=".85">'
             f'{t(f"root@{USER}", "gr")}{t(":", "fg")}{t("~", "pa")}{t("$ ", "fg")}{typed}</text>')
    size = 72
    assert X + tw(HEADLINE + ".", size) * 0.96 < 790, "headline invade a rede de partículas"
    b.append(f'<text x="{X - 3}" y="136" font-size="{size}" class="b fg" letter-spacing="-1.8" {intro(1.15)}>'
             f'{escape(HEADLINE)}{t(".", "br")}</text>')
    b.append(f'<text x="{X}" y="182" font-size="22" class="br" {intro(1.35)}>Fullstack Developer</text>')

    write("hero.svg", W, H, "".join(b), css, f"root@{USER}:~$ ./init_portfolio.sh — {HEADLINE}. Fullstack Developer")


# ---------------------------------------------------------------- projetos recentes
QUERY = """query($login: String!) { user(login: $login) { repositories(first: 10, privacy: PUBLIC,
  isFork: false, ownerAffiliations: OWNER, orderBy: {field: PUSHED_AT, direction: DESC}) { nodes {
  name description url languages(first: 8, orderBy: {field: SIZE, direction: DESC}) {
  totalSize edges { size node { name color } } } }}}}"""


def recent_repos(n=6):
    token = os.environ.get("GITHUB_TOKEN") or subprocess.run(
        ["gh", "auth", "token"], capture_output=True, text=True, check=True).stdout.strip()
    req = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps({"query": QUERY, "variables": {"login": USER}}).encode(),
        headers={"Authorization": f"bearer {token}"})
    data = json.load(urllib.request.urlopen(req))
    if "errors" in data:
        raise SystemExit(data["errors"])
    nodes = data["data"]["user"]["repositories"]["nodes"]
    # o repo do perfil fica de fora (o workflow faz push nele), e repo sem código não vira card
    return [r for r in nodes if r["name"] != USER and r["languages"]["totalSize"]][:n]


def languages(repo, top=4):
    total = repo["languages"]["totalSize"]
    langs = [(e["node"]["name"], e["node"]["color"] or "#8b949e", e["size"] / total)
             for e in repo["languages"]["edges"]]
    # até 3 linguagens com >= 1%; o resto vira "Other"
    main = [lang for lang in langs if lang[2] >= 0.01][:top - 1]
    rest = 1 - sum(p for *_, p in main)
    if len(main) == len(langs) - 1 and rest >= 0.01:
        main = langs  # sobrou só uma: mostra o nome dela em vez de "Other"
    elif rest > 0.0005:
        main.append(("Other", "#8b949e", rest))
    return main


def card(i, repo):
    W, H, X = 460, 212, 22
    name = repo["name"]
    css = ".bg{fill:var(--card);stroke:var(--line)}.sep{stroke:var(--line)}.track{fill:var(--code)}"

    b = [f'<rect x=".5" y=".5" width="{W - 1}" height="{H - 1}" rx="10" class="bg"/>']
    for k, color in enumerate(("#ff5f56", "#ffbd2e", "#27c93f")):
        b.append(f'<circle cx="{X + k * 17}" cy="22" r="5" fill="{color}"/>')
    b.append(f'<text x="{X + 50}" y="26" font-size="12" class="mu">{escape(clip("~/projects/" + name, 46))}</text>')
    b.append(f'<line x1="1" y1="44.5" x2="{W - 1}" y2="44.5" class="sep"/>')

    title_size = 22 if len(name) <= 18 else 19
    b.append(f'<text x="{X}" y="80" font-size="{title_size}" class="b fg">{escape(name)}{t(".", "br")}</text>')
    lines = textwrap.wrap(repo["description"] or "", 50)
    if len(lines) > 2:
        lines = [lines[0], clip(" ".join(lines[1:]), 50)]
    for k, line in enumerate(lines):
        b.append(f'<text x="{X}" y="{106 + k * 18}" font-size="13" class="mu">{escape(line)}</text>')

    # linguagens do repo: barra empilhada + legenda em 2 colunas (como a barra do GitHub)
    langs = languages(repo)
    bw, x = W - 2 * X, X
    b.append(f'<clipPath id="bar"><rect x="{X}" y="146" width="{bw}" height="8" rx="4"/></clipPath>'
             f'<rect x="{X}" y="146" width="{bw}" height="8" rx="4" class="track"/><g clip-path="url(#bar)">')
    for k, (_, color, p) in enumerate(langs):
        gap = 2 if k < len(langs) - 1 else 0
        b.append(f'<rect x="{x:.1f}" y="146" width="{max(bw * p - gap, 0):.1f}" height="8" fill="{color}"/>')
        x += bw * p
    b.append("</g>")
    for k, (lname, color, p) in enumerate(langs):
        lx, ly = X + (k % 2) * (bw / 2), 178 + (k // 2) * 20
        b.append(f'<circle cx="{lx + 5:.1f}" cy="{ly - 4.5}" r="5" fill="{color}"/>'
                 f'<text x="{lx + 16:.1f}" y="{ly}" font-size="12.5">{t(lname, "fg")} {t(f"{p:.1%}", "mu")}</text>')

    write(f"recent-{i}.svg", W, H, "".join(b), css, f"{name}: {repo['description'] or ''}")


def recent_block(repos):
    imgs = "\n".join(
        f'<a href="{r["url"]}"><img src=".github/readme/recent-{i}.svg" width="49%" '
        f'alt="{escape(r["name"])}: {escape(r["description"] or ", ".join(n for n, *_ in languages(r)))}"></a>'
        for i, r in enumerate(repos, 1))
    md = README.read_text(encoding="utf-8")
    new = re.sub(r"(<!-- recent:start -->).*?(<!-- recent:end -->)",
                 lambda m: f"{m[1]}\n{imgs}\n{m[2]}", md, flags=re.S)
    assert new != md or imgs in md, "marcadores <!-- recent:start/end --> não encontrados no README"
    README.write_text(new, encoding="utf-8")


# ---------------------------------------------------------------- links
def link(label):
    text = f"{label} ↗"
    w, h = tw(text, 14) + 28, 34
    body = (f'<rect x=".5" y=".5" width="{w - 1:.1f}" height="{h - 1}" rx="6" class="chipr"/>'
            f'<text x="14" y="22" font-size="14" class="chipt">{escape(text)}</text>')
    write(f"link-{label.strip('~./')}.svg", round(w), h, body, title=label)


if __name__ == "__main__":
    hero()
    for label in LINKS:
        link(label)
    repos = recent_repos()
    for i, repo in enumerate(repos, 1):
        card(i, repo)
    recent_block(repos)
