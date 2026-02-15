import "../styles/my-profile.css";
import { go } from "../router.js";
import { BottomNav } from "./_nav.js";

export function MyProfilePage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen myprofile">
      <div class="my-top">
        <button class="back-btn" data-back>←</button>
        <div style="width:44px"></div>
      </div>

      <div class="my-avatar">👤</div>

      <div class="my-name">My User Name</div>
      <div class="my-status">my status: actively searching for a roommate</div>

      <div class="my-card">
        <button class="my-item" type="button">✎ Edit Profile</button>
        <button class="my-item" type="button">☑ My Preference</button>
        <button class="my-item" type="button">⚙ Settings</button>
        <button class="my-item" type="button">↻ Retake Survey</button>
      </div>

      <div class="my-links">
        <button class="link" type="button">❔ Support</button>
        <button class="link" type="button" data-logout>⇦ Logout</button>
      </div>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/match"));
  el.querySelector("[data-logout]").addEventListener("click", () => go("/login"));

  el.querySelector(".screen").appendChild(BottomNav("profile"));
  return el;
}
