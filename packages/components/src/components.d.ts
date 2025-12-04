import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EOuButton: typeof components.Button;
    OuIcon: typeof components.Icon;
  }
}
export {};
