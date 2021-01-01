import buble from "rollup-plugin-buble";
import json from "rollup-plugin-json";
import nodeResolve from "rollup-plugin-node-resolve";
import pkg from "../package.json";
import { standard as banner } from "./rollup.conf.banner";

const base = {
  input: "./src/index.js",
  plugins: [json(), nodeResolve(), buble()],
};

const es = {
  ...base,
  external: [...Object.keys(pkg.dependencies || {})],
  output: { banner, format: "es", file: "./dist/tealight.es.js" }
};

const umd = {
  ...base,
  output: { banner, format: "umd", file: "./dist/tealight.js", name: "tealight" }
};

export default [es, umd];
