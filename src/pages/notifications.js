import "../styles/notifications.css";
import { go } from "../router.js";
import { BottomNav } from "./_nav.js";

function notificationItem(name, text, time, avatar = null) {

  const avatarHTML = avatar
    ? `<img class="avatar" src="${avatar}" />`
    : `<div class="avatar default">👤</div>`;

  return `
    <div class="notification-item">
      ${avatarHTML}

      <div class="notification-content">
        <div class="notification-title">
          <strong>${name}</strong> ${text}
        </div>
        <div class="notification-time">${time}</div>
      </div>

      <span class="notif-badge">1</span>
    </div>
  `;
}


export function NotificationsPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen notifications">
      <div class="page-header">
        <button class="back-btn" type="button">←</button>
        <h2>Notifications</h2>
      </div>

      <div class="notification-list">

  ${notificationItem(
    "Sarah L.",
    "accepted your match",
    "1 hour ago",
    "/assets/Sarah.png"
  )}

  ${notificationItem(
    "Bella A.",
    "wanted to match with you",
    "4 hours ago"
  )}

  ${notificationItem(
    "Ellen C.",
    "sent you a message request",
    "6 hours ago"
  )}

  ${notificationItem(
    "Zoe Z.",
    "sent you a message",
    "10 hours ago"
  )}

</div>

    </section>
  `;

  el.querySelector(".back-btn").addEventListener("click", () => go("/match"));
  el.querySelector(".screen").appendChild(BottomNav("message"));
  return el;
}
