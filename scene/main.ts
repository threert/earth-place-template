// The place's scene: a ThreeRT scene module (SPEC § 5, `scene` content), built in the place's frame (metres; x east,
// y up, z south at the anchor, turned by the heading). `bun run build` bundles it to dist/scene.js (CommonJS,
// `@threert/scene` left to the loader); `bun run bake` turns what it builds into assets/models/scene.glb, which the
// map (three.js) shows from the air instead of it (the manifest's `fallback`). The traced view draws this module.
//
// This example is a stone lantern (ishidoro) on a gravel bed. Replace it with your place.
import { BoxGeometry, CylinderGeometry, Group, Mesh, MeshStandardMaterial, SphereGeometry, type Object3D } from "@threert/scene";
import type { PlaceContext } from "./context.ts";

export default function build(ctx: PlaceContext): Object3D {
  const root = new Group();
  root.name = ctx.place.id;

  const stone = new MeshStandardMaterial({ color: 0x8d877c, roughness: 0.92 });
  const gravel = new MeshStandardMaterial({ color: 0xb9b2a5, roughness: 1 });
  const paper = new MeshStandardMaterial({ color: 0xf2e6cf, roughness: 0.8, emissive: 0xffb45a, emissiveIntensity: 250 });

  const add = (o: Mesh, x: number, y: number, z: number) => {
    o.position.set(x, y, z);
    root.add(o);
    return o;
  };

  // A raked gravel bed, 3 m across.
  add(new Mesh(new CylinderGeometry(1.5, 1.55, 0.06, 64), gravel), 0, 0.03, 0);

  // The lantern, 1.6 m tall: base, post, fire box with a lit paper window, roof and finial.
  add(new Mesh(new CylinderGeometry(0.34, 0.4, 0.14, 6), stone), 0, 0.13, 0);
  add(new Mesh(new CylinderGeometry(0.11, 0.13, 0.62, 16), stone), 0, 0.51, 0);
  add(new Mesh(new CylinderGeometry(0.3, 0.26, 0.1, 6), stone), 0, 0.87, 0);
  add(new Mesh(new BoxGeometry(0.34, 0.3, 0.34), stone), 0, 1.07, 0);
  // the windows: lit paper panes showing on the front and back of the fire box
  add(new Mesh(new BoxGeometry(0.18, 0.18, 0.36), paper), 0, 1.08, 0);
  add(new Mesh(new CylinderGeometry(0.05, 0.46, 0.22, 6), stone), 0, 1.33, 0);
  add(new Mesh(new SphereGeometry(0.07, 16, 12), stone), 0, 1.5, 0);
  // No light object: the lit paper is the light. Every emissive surface lights its surroundings when traced
  // (250 nits: a paper window with a flame behind it).

  return root;
}
