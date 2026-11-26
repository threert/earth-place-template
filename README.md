# EarthRT place template

A place on [EarthRT](https://github.com/threert/EarthRT), the whole Earth path-traced: a room, a building, a garden or
a city at a real spot on the map, made as a GitHub repository. This template's example is a stone lantern on the
bank of the Kamo river in Kyoto.

![The example, path-traced by ThreeRT](docs/preview.jpg)

## Make a place

- **In the EarthRT app** (macOS): pick a spot → **Create here** (or open a place → **Remix**). The app makes a
  project from this template in `~/EarthRT/places/<name>`, shows it on the globe in dev mode, and starts your own
  Claude Code or Codex in its agent panel with [AGENTS.md](AGENTS.md): tell it what to build. **Publish** puts it on
  GitHub and on the map.
- **By hand**: "Use this template" on GitHub, clone it, and:

```sh
bun run place --at "https://www.openstreetmap.org/#map=19/35.00366/135.77512" --radius 30   # where it is
# edit scene/main.ts, or make models: bun run meshy text "…" --name x --height 2
bun run build && bun run bake     # the scene module, and the GLB the web shows for it
bun run check                     # what EarthRT's index will check, and the limits
bun run dev --app                 # see it on the globe in the EarthRT app (or `bun run dev` for the web)
git commit -am "…" && bun run register    # publish
```

Needs [Bun](https://bun.sh); the EarthRT app to see it path-traced on the globe (or any browser, on the web). The tools and
their options are in [AGENTS.md](AGENTS.md); the manifest's contract is
[EarthRT's SPEC § 5](https://github.com/threert/EarthRT/blob/main/docs/SPEC.md#5-the-place-manifest-earthrtjson).

## Licence

The template's code is MIT, © Meshy LLC. The example lantern is CC0. A place made from it carries the licence its
`earthrt.json` names.
