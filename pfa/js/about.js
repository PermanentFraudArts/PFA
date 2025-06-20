const sections = [
  {
    el: document.querySelector('.how'),
    img: document.querySelector('.tongue'),
  },
  {
    el: document.querySelector('.fact'),
    img: document.querySelector('.toilet'),
  },
  {
    el: document.querySelector('.origin'),
    img: document.querySelector('.trump'),
  },
];

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.2;

  sections.forEach(({ el, img }) => {
    const rect = el.getBoundingClientRect();
    const distance = Math.abs(rect.top - triggerPoint);

    if (distance < 100) {
      // 가까워지면 점점 진하게
      const opacity = 1 - distance / 200;
      img.style.opacity = opacity;
    } else {
      // 멀어지면 흐리게
      img.style.opacity = 0;
    }
  });
});
