import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    Object.keys(components).forEach(key => {
      const component = components[key as keyof typeof components];
      if (typeof component === 'object' && component !== null && 'install' in component) {
        app.use(component);
      }
    });
  },
};
