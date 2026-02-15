import "../styles/chat.css";
import { go } from "../router.js";

export function ChatPage() {
  const el = document.createElement("main");
  el.className = "phone";

  el.innerHTML = `
    <section class="screen chat">
      <div class="chat-top">
        <button class="back-btn" data-back>←</button>

        <div class="chat-user">
          <img class="chat-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div>
            <div class="chat-name">Sarah L.</div>
            <div class="chat-status">Active 11m ago</div>
          </div>
        </div>

        <div class="chat-actions">
          <button class="icon">📞</button>
          <button class="icon">📹</button>
        </div>
      </div>

      <div class="chat-body">
        <div class="center-pill">This is the main chat template</div>
        <div class="chat-time">Nov 30, 2023, 9:41 AM</div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">Hi! I’m Sarah.</div>
        </div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">Nice to meet u!</div>
        </div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">It looks like we are a good matching.</div>
        </div>

        <div class="msg-row right">
          <div class="bubble right">
            Hi Sarah! I’m Checkpoint 4. Nice to meet u tooo! I study Computer Science and took COMS4170 last semester.
          </div>
        </div>

        <div class="msg-row right">
          <div class="bubble right small">Yeah!</div>
        </div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">Wow!</div>
        </div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">I think we can become good roommates!</div>
        </div>

        <div class="msg-row">
          <img class="mini-avatar" src="/assets/Sarah.png" alt="Sarah"/>
          <div class="bubble left">Do u wanna meet in person?</div>
        </div>
      </div>

      <div class="chat-input">
        <input class="chat-text" placeholder="Message..." />
        <button class="icon">🎤</button>
        <button class="icon">😊</button>
        <button class="icon">🖼️</button>
      </div>
    </section>
  `;

  el.querySelector("[data-back]").addEventListener("click", () => go("/match-success"));
  return el;
}
