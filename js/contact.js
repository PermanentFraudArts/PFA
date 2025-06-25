const form = document.getElementById('guestForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const guestMessages = document.getElementById('guestMessages');

function loadMessages() {
  const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
  guestMessages.innerHTML = '';
  saved.forEach((entry) => {
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = `<strong>${entry.name}</strong><br>${entry.message}`;
    guestMessages.prepend(div);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (!name || !message) return;

  const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
  saved.unshift({ name, message }); // 최근 것이 위로
  localStorage.setItem('guestbook', JSON.stringify(saved));

  nameInput.value = '';
  messageInput.value = '';
  loadMessages();
});

loadMessages();
