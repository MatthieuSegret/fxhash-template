import * as p5 from "p5";

declare global {
  interface Window {
    s: number;
    refSize: number;
    $fxhashFeatures: { [key: string]: string };
    drawingContext: any;
    fxpreview: Function;
  }
}
