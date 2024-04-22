import { createMainPage } from "./createMainPage";
import { initializeStorage } from "./projectStorage";

function pageLoad() {
  initializeStorage();
  createMainPage();
}

export { pageLoad };
