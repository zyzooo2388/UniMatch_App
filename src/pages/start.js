import "../styles/start.css";
import { go } from "../router.js";

export function StartPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen start">
      <div class="start-logo-wrap">
        <img class="start-logo" src="/assets/logo.png" alt="Unimatch logo" />
      </div>

      <h1 class="start-title">Tell us about yourself</h1>
      <p class="start-sub">
        Complete a short survey to help us<br/>
        find your most compatible roommate.
      </p>

      <button class="btn-primary start-btn" type="button">Start</button>
    </section>
  `;

  el.querySelector(".start-btn").addEventListener("click", () => go("/survey"));
  return el;
}
