// 메뉴
console.log('스크롤 스크립트 실행됨');
window.addEventListener('scroll', () => {
  console.log('스크롤 중', window.scrollY);
});
window.addEventListener('scroll', () => {
  const menu = document.querySelector('.nav');
  if (window.scrollY > 50) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});

//메뉴토글
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });


//발자국
// const form = document.getElementById('guestForm');
// const nameInput = document.getElementById('name');
// const messageInput = document.getElementById('message');
// const guestMessages = document.getElementById('guestMessages');

// function loadMessages() {
//   const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
//   guestMessages.innerHTML = '';
//   saved.forEach((entry, index) => {
//     const div = document.createElement('div');
//     div.className = 'msg';
//     div.innerHTML = `
//           <strong>${entry.name}</strong><br>${entry.message}
//           <button class="delete" data-index="${index}">X</button>
//         `;
//     guestMessages.appendChild(div);
//   });

//   document.querySelectorAll('.delete').forEach((button) => {
//     button.addEventListener('click', () => {
//       const i = parseInt(button.getAttribute('data-index'));
//       const pw = prompt('비밀번호를 입력하세요:');
//       if (pw === 'pfa123') {
//         const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
//         saved.splice(i, 1);
//         localStorage.setItem('guestbook', JSON.stringify(saved));
//         loadMessages();
//       } else {
//         alert('❌ 비밀번호가 틀렸습니다.');
//       }
//     });
//   });
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = nameInput.value.trim();
//   const message = messageInput.value.trim();
//   if (!name || !message) return;

//   const saved = JSON.parse(localStorage.getItem('guestbook')) || [];
//   saved.unshift({ name, message });
//   localStorage.setItem('guestbook', JSON.stringify(saved));

//   nameInput.value = '';
//   messageInput.value = '';
//   loadMessages();
// });

// loadMessages();
