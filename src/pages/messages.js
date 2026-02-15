import "../styles/messages.css";
import { go } from "../router.js";
import { BottomNav } from "./_nav.js";

export function MessagesPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen messages">
      <div class="topbar">
         <button class="back-btn" data-back>←</button>
        <div class="tabs">
          <button class="tab" data-tab="requests">Request</button>
          <button class="tab active" data-tab="messages">Messages</button>
        </div>
        <div style="width:44px"></div>
      </div>

      <div class="list">
        <a class="row" href="#/chat/sarah" data-chat="sarah">
          <span class="badge">1</span>
          <img class="avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="info">
            <div class="line1">
              <strong>Sarah L.</strong>
              <span class="time">9:10 AM</span>
            </div>
            <div class="preview">Hey, I liked your profile and would like...</div>
          </div>
        </a>

        <a class="row" href="#/chat/eva" data-chat="eva">
          <span class="badge">1</span>
           <div class="avatar default">👤</div>
          <div class="info">
            <div class="line1">
              <strong>Eva T.</strong>
              <span class="time">11:35 PM</span>
            </div>
            <div class="preview">Hi!</div>
          </div>
        </a>
      </div>
    </section>
  `;

  // tabs
  el.querySelector('[data-tab="requests"]').addEventListener("click", () => go("/requests"));
  el.querySelector('[data-tab="messages"]').addEventListener("click", () => go("/messages"));

  // back
  el.querySelector("[data-back]").addEventListener("click", () => go("/match"));

  // click row -> open correct chat
  el.querySelectorAll("[data-chat]").forEach((row) => {
    row.addEventListener("click", (e) => {
      e.preventDefault();
      go(`/chat/${row.dataset.chat}`);
    });
  });

  // bottom nav
  el.querySelector(".screen").appendChild(BottomNav("message"));
  return el;
}
