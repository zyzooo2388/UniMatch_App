import "../styles/match-success.css";
import { go } from "../router.js";

export function MatchSuccessPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen success">
      <div class="success-top">
        <button class="back-btn" data-back>←</button>
        <div style="width:44px"></div>
      </div>

      <div class="success-avatars">
        <div class="big-user">👤</div>
        <img class="small-sarah" src="/assets/Sarah.png" alt="Sarah"/>
      </div>

      <h1 class="success-title">It’s a Match!</h1>
      <p class="success-sub">
        You and Sarah are a great match.<br/>
        Start chatting to get to know each other.
      </p>

      <button class="btn-primary success-btn" data-hello type="button">Say Hello!</button>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/profile/sarah"));
  el.querySelector("[data-hello]").addEventListener("click", () => go("/chat/sarah"));

  return el;
}
