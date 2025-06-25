const form = document.getElementById('guestForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const guestMessages = document.getElementById('guestMessages');

function loadMessages() {
  const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
  guestMessages.innerHTML = ''; // 기존 메시지를 모두 지웁니다.

  // saved 배열은 이미 최신순으로 정렬되어 있습니다.
  saved.forEach((entry) => {
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = `<strong>${entry.name}</strong><br>${entry.message}`;
    guestMessages.appendChild(div); // <-- 이 부분을 appendChild()로 변경합니다.
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
