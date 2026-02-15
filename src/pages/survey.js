import "../styles/survey.css";
import { go } from "../router.js";

export function SurveyPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen survey">
      <div class="survey-top">
        <button class="back-btn" data-back>←</button>
        <div class="survey-title">Tell Me About Your Lifestyle</div>
      </div>

      <div class="survey-body">
        <div class="q">
          <div class="q-title"><b>Cleanliness Score:</b> How often do you clean common areas?</div>
          <div class="range-row">
            <input type="range" min="1" max="10" value="7" class="range" />
            <div class="range-value">7/10</div>
          </div>
          <div class="range-labels">
            <span>1 (Rarely)</span>
            <span>10 (Daily Deep Clean)</span>
          </div>
        </div>

        <div class="q">
          <div class="q-title"><b>Sleep Schedule:</b> What’s the time to sleep?</div>
          <div class="options">
            <button class="opt active" type="button">Very Early (Before 10p.m.)</button>
            <button class="opt" type="button">Normal Time (10p.m.–12a.m.)</button>
            <button class="opt" type="button">Night Owl (After 12a.m.)</button>
          </div>
        </div>

        <div class="q">
          <div class="q-title"><b>Social habits:</b> How often to host guests?</div>
          <div class="range-row">
            <input type="range" min="1" max="10" value="3" class="range" />
            <div class="range-value">3/10</div>
          </div>
          <div class="range-labels">
            <span>1 (Rarely)</span>
            <span>10 (Weekly Parties)</span>
          </div>
        </div>

        <div class="q">
          <div class="q-title"><b>Study Noise Tolerance:</b> Do you require silence for study hours?</div>
          <div class="range-row">
            <input type="range" min="1" max="10" value="9" class="range" />
            <div class="range-value">9/10</div>
          </div>
          <div class="range-labels">
            <span>1 (Unimportant)</span>
            <span>10 (Extremely Important)</span>
          </div>
        </div>

        <button class="btn-primary survey-continue" type="button">Continue</button>
      </div>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/start"));

  // update range text live
  el.querySelectorAll(".range-row").forEach((row) => {
    const input = row.querySelector("input");
    const out = row.querySelector(".range-value");
    out.textContent = `${input.value}/10`;
    input.addEventListener("input", () => (out.textContent = `${input.value}/10`));
  });

  // single-select sleep options
  el.querySelectorAll(".opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".opt").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  el.querySelector(".survey-continue").addEventListener("click", () => go("/match"));
  return el;
}
