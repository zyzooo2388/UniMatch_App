import { go } from "../router.js";

export function BottomNav(active = "home") {

  const nav = document.createElement("nav");
  nav.className = "bottom-nav";   // ✅ SAME as match page

  nav.innerHTML = `
    <button class="nav-item ${active==="home"?"active":""}" data-go="/match">
      Home
    </button>

    <button class="nav-item ${active==="message"?"active":""}" data-go="/messages">
      Message
    </button>

    <button class="nav-item ${active==="post"?"active":""}" data-go="/notifications">
      Post
    </button>

    <button class="nav-item ${active==="profile"?"active":""}" data-go="/my-profile">
      Profile
    </button>
  `;

  nav.querySelectorAll("[data-go]").forEach(btn => {
    btn.onclick = () => go(btn.dataset.go);
  });

  return nav;
}
