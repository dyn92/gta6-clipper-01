# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dyn92/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dyn92/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's ["Clip GTA 6 for the most YouTube views" bounty](https://make.fun/bounty/gta6-clipper-01) ($500 shared by the top 20, ranked by views).

## The clip

A 31-second vertical Short (1080x1920): a montage of official GTA VI key
art from Rockstar's site, cut with zoom-pan moves over a synthwave track,
that hooks on the GTA 6 hype — Jason and Lucia returning to Vice City,
launching May 26, 2026 — and then turns to the make.fun pitch as on-screen
text: viewers can make clips like this with AI and earn money on make.fun.
The closing card carries the make.fun ghost and the play code
`makefun-puffin-lute-beagle`.

The video is the entry — it is live on YouTube here:
https://www.youtube.com/shorts/XKk710vuirM

Its description carries the bounty's line ("$500 bounty" and the link to
this bounty page) and the play code `makefun-puffin-lute-beagle`.

## What this repository does

`VIDEO.json` holds the video's address. `main.ts` (Node 22, standard
library only) reads it from the bot directory, validates that it is a
real YouTube Shorts address (`https://www.youtube.com/shorts/<11-char
id>`), and copies it byte for byte to the output directory the gate
reads. `ENTRY-NOTES.md` documents the clip, the video, and the
verification results.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ct66xshw&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
