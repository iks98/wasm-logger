import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

const input = "src/index.js";

function banner() {
  return "/*! wasm-logger | MIT License */";
}

export default [
  // ESM
  {
    input,
    output: {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
      banner: banner()
    },
    plugins: [resolve(), commonjs()]
  },

  // CJS
  {
    input,
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
      banner: banner()
    },
    plugins: [resolve(), commonjs()]
  },

  // UMD (non-minified)
  {
    input,
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "WasmLogger",
      sourcemap: true,
      banner: banner()
    },
    plugins: [resolve(), commonjs()]
  },

  // UMD (minified)
  {
    input,
    output: {
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "WasmLogger",
      sourcemap: true,
      banner: banner()
    },
    plugins: [resolve(), commonjs(), terser()]
  }
];