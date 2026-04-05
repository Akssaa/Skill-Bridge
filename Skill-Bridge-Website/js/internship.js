// ===========================
// Internship Filters
// ===========================
document.getElementById('applyFilters').addEventListener('click', () => {
  const role = document.getElementById('roleFilter').value;
  const location = document.getElementById('locationFilter').value;
  const duration = document.getElementById('durationFilter').value;

  const cards = document.querySelectorAll('.internship-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchRole = role === "" || card.dataset.role === role;
    const matchLocation = location === "" || card.dataset.location === location;
    const matchDuration = duration === "" || card.dataset.duration === duration;

    if (matchRole && matchLocation && matchDuration) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById('noResults').style.display = visibleCount === 0 ? "block" : "none";
});

// Clear filters
document.getElementById('clearFilters').addEventListener('click', () => {
  document.getElementById('roleFilter').value = "";
  document.getElementById('locationFilter').value = "";
  document.getElementById('durationFilter').value = "";

  const cards = document.querySelectorAll('.internship-card');
  cards.forEach(card => card.style.display = "block");

  document.getElementById('noResults').style.display = "none";
});

// ===========================
// Chatbot
// ===========================
const chatbotBubble = document.getElementById('chatbotBubble');
const chatbotPopup = document.getElementById('chatbotPopup');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInputPopup');
const chatMessages = document.getElementById('chatMessages');

// Open popup
chatbotBubble.addEventListener('click', () => {
  chatbotPopup.style.display = 'flex';
});

// Close popup
closeChat.addEventListener('click', () => {
  chatbotPopup.style.display = 'none';
});

// Handle user input
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    // User message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = chatInput.value;
    chatMessages.appendChild(userMessage);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Bot reply (simulate)
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot');
      botMessage.textContent = "Thanks for your message! We'll get back to you shortly.";
      chatMessages.appendChild(botMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
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