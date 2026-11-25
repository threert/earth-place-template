# EarthRT place template

A place on [EarthRT](https://github.com/threert/EarthRT), the whole Earth path-traced: a room, a building, a garden or
a city at a real spot on the map, made as a GitHub repository. This template's example is a stone lantern on the
bank of the Kamo river in Kyoto.

![The example, path-traced in ThreeRT](docs/preview.jpg)

## Make a place

- **In ThreeRT** (macOS): Studio → Remix → `https://github.com/threert/earth-place-template` (or
  `threert remix https://github.com/threert/earth-place-template my-place`). The project opens live and your own
  Claude Code or Codex starts in it with [AGENTS.md](AGENTS.md); tell it what to build and where.
- **On GitHub**: "Use this template", clone it, run `threert dev` in it.

Then:

```sh
bun run place --at "https://www.openstreetmap.org/#map=19/35.00366/135.77512" --radius 30   # where it is
# edit scene/main.ts, or make models: bun run meshy text "…" --name x --height 2
bun run build && bun run bake     # the scene module, and the GLB the web shows for it
bun run check                     # what EarthRT's index will check, and the limits
bun run dev                       # see it on the globe (web; --client for ThreeRT)
git commit -am "…" && bun run register    # publish
```

Needs [Bun](https://bun.sh) and [ThreeRT](https://threert.dev/download/) (for the path-traced preview). The tools and
their options are in [AGENTS.md](AGENTS.md); the manifest's contract is
[EarthRT's SPEC § 5](https://github.com/threert/EarthRT/blob/main/docs/SPEC.md#5-the-place-manifest-earthrtjson).

## Licence

The template's code is MIT, © Meshy LLC. The example lantern is CC0. A place made from it carries the licence its
`earthrt.json` names.
