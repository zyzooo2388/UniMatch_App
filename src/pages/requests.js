import "../styles/requests.css";
import { go } from "../router.js";
import { BottomNav } from "./_nav.js";

function requestCard({ name, meta, img = null }) {
  const card = document.createElement("article");
  card.className = "req-card";

  card.innerHTML = `
    <span class="badge">1</span>
    <div class="req-left">
      ${
        img
          ? `<img class="avatar" src="${img}" alt="${name}" />`
          : `<div class="avatar default">👤</div>`
      }
    </div>

    <div class="req-mid">
      <div class="req-name">${name}</div>
      <div class="req-meta">${meta}</div>
      <div class="req-actions">
        <button class="btn small primary" type="button">Accept</button>
        <button class="btn small" type="button">Ignore</button>
      </div>
    </div>
  `;

  // Accept -> go messages
  card.querySelector(".primary").addEventListener("click", () => go("/messages"));

  // Ignore -> remove card (optional)
  card.querySelector(".btn.small:not(.primary)").addEventListener("click", () => {
    card.remove();
  });

  return card;
}

export function RequestsPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen requests">
      <div class="topbar">
       <button class="back-btn" data-back>←</button>
        <div class="tabs">
          <button class="tab active" type="button" data-tab="requests">Request</button>
          <button class="tab" type="button" data-tab="messages">Messages</button>
        </div>
        <div style="width:44px"></div>
      </div>

      <div class="req-list"></div>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/match"));
  el.querySelector('[data-tab="messages"]').addEventListener("click", () => go("/messages"));
  el.querySelector('[data-tab="requests"]').addEventListener("click", () => go("/requests"));

  const list = el.querySelector(".req-list");
  list.appendChild(requestCard({ name: "Bella A.", meta: "Female | Barnard ’29", img: null }));
  list.appendChild(requestCard({ name: "Ellen C.", meta: "Female | CC ’26", img: null }));
  list.appendChild(requestCard({ name: "Zoe Z.", meta: "Female | SEAS ’27", img: null }));

  el.querySelector(".screen").appendChild(BottomNav("message"));
  return el;
}
