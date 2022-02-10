const btnChatBot = document.querySelector(".btn-bot");
btnChatBot.addEventListener("click", showChatBot);

function showChatBot() {
  if (document.querySelector(".div-chat")) {
    cleanHTML(document.querySelector(".div-chat"));
    cleanHTML(document.querySelector(".div-chat-triangle"));
  } else {
    const divChat = document.createElement("div");
    const divChatTriangle = document.createElement("div");
    divChat.classList.add("div-chat");
    divChatTriangle.classList.add("div-chat-triangle");

    divChat.innerHTML = `
            <div class="header-bot">
              <div class="header-logo-bot">
                <svg role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="gray" stroke-width="2" d="M18.348 15.954a7 7 0 1 0-12.622.156h0M12 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0-17V3M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm-9 4.988L5 16s.072-.772.5-.5c.93.591 3.074 1.5 6.5 1.5c3.554 0 5.618-.916 6.5-1.5c.359-.238.5.5.5.5l-1 2.988S17.005 21 12 21s-6-2.012-6-2.012z"/></svg>
                <p class="header-bot-name">Paul</p>
              </div>
              
              <svg class="bot-cross" role="img" width="1.25em" height="1.25em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z" fill="gray"/><path fill="#fff" d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z"/></svg>
            </div>
            <div class="body-bot">
              
            </div>
        `;

    document.querySelector("body").appendChild(divChat);
    document.querySelector("body").appendChild(divChatTriangle);

    const svgCross = document.querySelector('.bot-cross');
    svgCross.addEventListener('click', () => {
      divChat.remove();
      divChatTriangle.remove();
    })
  }
}

function cleanHTML(element) {
  element.remove();
}
