import { LoginPage } from "./pages/login.js";
import { StartPage } from "./pages/start.js";
import { SurveyPage } from "./pages/survey.js";
import { MatchPage } from "./pages/match.js";
import { SarahProfilePage } from "./pages/sarah-profile.js";
import { MatchSuccessPage } from "./pages/match-success.js";
import { ChatPage } from "./pages/chat.js";
import { MessagesPage } from "./pages/messages.js";
import { RequestsPage } from "./pages/requests.js";
import { MyProfilePage } from "./pages/my-profile.js";
import { NotificationsPage } from "./pages/notifications.js"; // rename to be consistent

const routes = {
  "/login": LoginPage,
  "/start": StartPage,
  "/survey": SurveyPage,
  "/match": MatchPage,

  "/notifications": NotificationsPage,
  "/messages": MessagesPage,
  "/requests": RequestsPage,

  "/profile/sarah": SarahProfilePage,
  "/match-success": MatchSuccessPage,
  "/chat/sarah": ChatPage,

  "/my-profile": MyProfilePage,
};

let ROOT = null;
let listenerAttached = false;

export function router(rootEl) {
  ROOT = rootEl;

  if (!listenerAttached) {
    window.addEventListener("hashchange", render);
    listenerAttached = true;
  }

  render();
}

export function go(path) {
  window.location.hash = path;
}

function render() {
  if (!ROOT) return;

  const path = window.location.hash.replace("#", "") || "/login";
  const pageFn = routes[path] || LoginPage;

  ROOT.innerHTML = "";
  ROOT.appendChild(pageFn());
}
