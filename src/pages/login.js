import "../styles/login.css";
import { go } from "../router.js";

export function LoginPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen login">
      <div class="login-logo-wrap">
        <img class="login-logo" src="/assets/logo.png" alt="Unimatch logo" />
      </div>

      <header class="login-head">
        <h1>Welcome, Columbia<br/>Students!</h1>
        <p>Find a compatible, verified roommate</p>
      </header>

      <form class="login-form">
        <input class="login-input" type="email" placeholder="uni@columbia.edu" required />
        <button class="btn-primary" type="submit">Login with COLUMBIA UNI</button>
      </form>

      <p class="login-helper">
        We require a verified UNI email to ensure a<br/>secure and reliable platform.
      </p>
    </section>
  `;

  el.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    go("/start");
  });

  return el;
}
