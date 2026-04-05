document.addEventListener("DOMContentLoaded", function () {

  // ================== CHATBOT ==================
  const bubble = document.getElementById("chatbotBubble");
  const popup = document.getElementById("chatbotPopup");
  const closeBtn = document.getElementById("closeChat");
  const input = document.getElementById("chatInputPopup");
  const messages = document.getElementById("chatMessages");

  // OPEN CHAT
  bubble.addEventListener("click", function () {
    popup.style.display = "flex";
    bubble.style.display = "none";
  });

  // CLOSE CHAT
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    bubble.style.display = "flex";
  });

  // SEND MESSAGE
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {

      // USER MESSAGE
      const userMsg = document.createElement("div");
      userMsg.textContent = input.value;
      userMsg.style.textAlign = "right";
      userMsg.style.margin = "5px";
      messages.appendChild(userMsg);

      // BOT RESPONSE
      const botMsg = document.createElement("div");
      botMsg.textContent = "Thanks! We will respond soon.";
      botMsg.style.textAlign = "left";
      botMsg.style.margin = "5px";

      setTimeout(() => {
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      }, 400);

      input.value = "";
    }
  });

  // ================== COUNTER (SCROLL ANIMATION) ==================
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
          const increment = Math.ceil(target / 100);

          if (count < target) {
            count += increment;
            counter.innerText = (count > target ? target : count) + "+";
            setTimeout(updateCounter, 20);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCounter();
        observer.unobserve(counter); // run only once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });

});