export async function register() {
  // Node.js 22 injects a `localStorage` global via --localstorage-file but
  // without a valid path the implementation is broken (getItem is not a function).
  // Patch it to a safe no-op before Next.js renders any pages.
  if (typeof globalThis.localStorage !== "undefined") {
    const isReal =
      typeof globalThis.localStorage.getItem === "function" &&
      typeof globalThis.localStorage.setItem === "function";

    if (!isReal) {
      const noop: Storage = {
        length: 0,
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
      };
      Object.defineProperty(globalThis, "localStorage", {
        value: noop,
        writable: true,
        configurable: true,
      });
    }
  }
}
