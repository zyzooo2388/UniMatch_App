import { router, go } from "./router.js";
import "./styles/base.css";

export function startApp() {
  const root = document.getElementById("app");
  router(root);
  go("/login");
}
