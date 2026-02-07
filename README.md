# wasm-logger

A tiny logger that can attach to an Emscripten-like `Module` object, hook `Module.print`, `Module.printErr`, and `Module.onAbort`, and expose `Module.WasmLogger` with an event/listener API and an optional replay buffer.

## Install

```bash
npm i wasm-logger
```
#TODO: How to use ...