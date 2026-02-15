import "../styles/match.css";
import { go } from "../router.js";

const roommates = [
  { name: "Sarah L.", match: 98, img: "/assets/Sarah.png" },
  { name: "Grace D.", match: 94, img: "/assets/Grace.png" },
  { name: "Olivia Z.", match: 93, img: "/assets/Olivia.png" },
];

export function MatchPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen match">
      <div class="match-top">
        <div class="match-left">
          <img class="match-logo" src="/assets/logo.png" alt="Unimatch logo" />
          <div>
            <div class="match-welcome-title">Welcome</div>
            <div class="match-welcome-sub">Let’s find you a roommate!</div>
          </div>
        </div>

        <button class="match-bell" type="button" aria-label="Notifications">
          🔔<span class="match-dot"></span>
        </button>
      </div>

      <div class="search-bar">
        <span>🔍</span>
        <input class="search-input" placeholder="Search" />
        <span>🎤</span>
      </div>

      <h2 class="match-section-title">Suggested roommates for you:</h2>

      <div class="match-list"></div>

      <div class="see-more-wrap">
        <button class="btn-primary see-more" type="button">See More (37)</button>
      </div>

      <nav class="bottom-nav">
        <button class="nav-item active" data-go="/match">Home</button>
        <button class="nav-item" data-go="/messages">Message</button>
        <button class="nav-item" data-go="/post">Post</button>
        <button class="nav-item" data-go="/my-profile">Profile</button>
      </nav>
    </section>
  `;

  // bell -> notifications
  el.querySelector(".match-bell").addEventListener("click", () => go("/notifications"));

  // bottom nav
  el.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.go));
  });

  const list = el.querySelector(".match-list");
  const search = el.querySelector(".search-input");

  function renderCards(filterText = "") {
    list.innerHTML = "";
    const q = filterText.trim().toLowerCase();

    roommates
      .filter((r) => r.name.toLowerCase().includes(q))
      .forEach((r) => {
        const card = document.createElement("article");
        card.className = "roommate-card";
        card.innerHTML = `
          <img class="avatar" src="${r.img}" alt="${r.name}" />
          <div class="card-main">
            <div class="name">${r.name}</div>
            <div class="percent">${r.match}% Match</div>
            <button class="view-profile" type="button">View Profile</button>
          </div>
          <div class="card-actions">
            <button class="icon-btn" type="button" aria-label="Bookmark">🔖</button>
            <button class="icon-btn" type="button" aria-label="Message">💬</button>
            <button class="icon-btn" type="button" aria-label="Like">♡</button>
          </div>
        `;

        // View profile
        card.querySelector(".view-profile").addEventListener("click", () => {
          if (r.name === "Sarah L.") go("/profile/sarah");
          else go("/messages");
        });

        // Message icon
        card.querySelector('[aria-label="Message"]').addEventListener("click", () => {
          if (r.name === "Sarah L.") go("/chat/sarah");
          else go("/messages");
        });

        list.appendChild(card);
      });
  }

  renderCards();
  search.addEventListener("input", () => renderCards(search.value));

  return el;
}
