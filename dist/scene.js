// Built from scene/main.ts (sources 1d1ffe036744b71c) by `bun run build`: edit the source, not this file.
var { defineProperty: __defProp, getOwnPropertyNames: __getOwnPropNames, getOwnPropertyDescriptor: __getOwnPropDesc } = Object, __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= /* @__PURE__ */ new WeakMap).get(from), desc;
  if (entry)
    return entry;
  if (entry = __defProp({}, "__esModule", { value: !0 }), from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return __moduleCache.set(from, entry), entry;
}, __moduleCache;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: !0,
      configurable: !0,
      set: __exportSetter.bind(all, name)
    });
};

// scene/main.ts
var exports_main = {};
__export(exports_main, {
  default: () => build
});
module.exports = __toCommonJS(exports_main);
var import_scene = require("@threert/scene");
function build(ctx) {
  let root = new import_scene.Group;
  root.name = ctx.place.id;
  let stone = new import_scene.MeshStandardMaterial({ color: 9275260, roughness: 0.92 }), gravel = new import_scene.MeshStandardMaterial({ color: 12169893, roughness: 1 }), paper = new import_scene.MeshStandardMaterial({ color: 15918799, roughness: 0.8, emissive: 16757850, emissiveIntensity: 250 }), add = (o, x, y, z) => {
    return o.position.set(x, y, z), root.add(o), o;
  };
  return add(new import_scene.Mesh(new import_scene.CylinderGeometry(1.5, 1.55, 0.06, 64), gravel), 0, 0.03, 0), add(new import_scene.Mesh(new import_scene.CylinderGeometry(0.34, 0.4, 0.14, 6), stone), 0, 0.13, 0), add(new import_scene.Mesh(new import_scene.CylinderGeometry(0.11, 0.13, 0.62, 16), stone), 0, 0.51, 0), add(new import_scene.Mesh(new import_scene.CylinderGeometry(0.3, 0.26, 0.1, 6), stone), 0, 0.87, 0), add(new import_scene.Mesh(new import_scene.BoxGeometry(0.34, 0.3, 0.34), stone), 0, 1.07, 0), add(new import_scene.Mesh(new import_scene.BoxGeometry(0.18, 0.18, 0.36), paper), 0, 1.08, 0), add(new import_scene.Mesh(new import_scene.CylinderGeometry(0.05, 0.46, 0.22, 6), stone), 0, 1.33, 0), add(new import_scene.Mesh(new import_scene.SphereGeometry(0.07, 16, 12), stone), 0, 1.5, 0), root;
}
