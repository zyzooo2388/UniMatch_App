import "../styles/profile.css";
import { go } from "../router.js";

export function SarahProfilePage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen profile">
      <div class="profile-top">
        <button class="back-btn" data-back>←</button>
        <div class="profile-top-title">
          <img class="tiny-logo" src="/assets/logo.png" alt="logo"/>
          <span>Sarah’s Profile</span>
        </div>
        <div style="width:44px"></div>
      </div>

    <div class="profile-hero">
        <div class="hero-left">
            <div class="hero-name">Sarah L.</div>
            <div class="hero-match">98% Match</div>
        </div>
        <img class="hero-avatar" src="/assets/Sarah.png" alt="Sarah L." />
    </div>

      <div class="section-title">Lifestyle Compatibility</div>

      <div class="compat">
        <div class="compat-card">
          <div class="compat-left">
            <div class="compat-h">🏠 Cleanliness Score</div>
            <div class="compat-sub">Little obsessive about keeping things clean</div>
          </div>
          <div class="pill pill-strong">Perfect Match!</div>
        </div>

        <div class="compat-card">
          <div class="compat-left">
            <div class="compat-h">🛏️ Sleeping Schedule</div>
            <div class="compat-sub">Low background noise fine</div>
          </div>
          <div class="pill pill-mid">High Match</div>
        </div>

        <div class="compat-card">
          <div class="compat-left">
            <div class="compat-h">👥 Social Habits</div>
            <div class="compat-sub">Sometimes host with few friends during weekends</div>
          </div>
          <div class="pill pill-low">Low Match</div>
        </div>
      </div>

      <div class="section-title">About Me</div>

      <div class="about-card">
        <p class="about-text">
          SEAS Junior studying Computer Science. I’m an introvert but would love to have a board game night.
          I also usually like to explore the New York city during the weekends.
        </p>

        <div class="tags">
          <span class="tag">Coding</span>
          <span class="tag">Hiking</span>
          <span class="tag">Board Games</span>
          <span class="tag">Coffee</span>
          <span class="tag">Photography</span>
        </div>
      </div>

      <div class="profile-bottom">
        <button class="ghost" type="button">♡ Like</button>
        <button class="btn-primary" data-match type="button">Match</button>
      </div>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/match"));
  el.querySelector("[data-match]").addEventListener("click", () => go("/match-success"));

  return el;
}
