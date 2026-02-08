export type WasmLogLevel = "debug" | "info" | "warn" | "error";

export type WasmLogEvent = {
  time: number;
  level: WasmLogLevel;
  message: string;
  source?: "stdout" | "stderr" | "abort" | string;
  data?: unknown;
};

export type WasmLoggerListener = (event: WasmLogEvent) => void;

export type WasmLogger = {
  addListener(
    fn: WasmLoggerListener,
    options?: { replay?: boolean }
  ): () => void;
  removeListener(fn: WasmLoggerListener): void;

  log(level: WasmLogLevel, message: string, extra?: { source?: string; data?: unknown }): void;
  debug(message: string, extra?: { source?: string; data?: unknown }): void;
  info(message: string, extra?: { source?: string; data?: unknown }): void;
  warn(message: string, extra?: { source?: string; data?: unknown }): void;
  error(message: string, extra?: { source?: string; data?: unknown }): void;

  getBuffered(): WasmLogEvent[];
  clearBuffer(): void;
};

export function attachWasmLogger(
  Module: Record<string, unknown>,
  options?: { maxBuffer?: number }
): void;

export function autoAttachWasmLogger(options?: { maxBuffer?: number }): void;
