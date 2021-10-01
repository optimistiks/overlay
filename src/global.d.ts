declare global {
  interface Window {
    onWidgetLoadInitialData: any;
    initOverlay: any;
  }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
