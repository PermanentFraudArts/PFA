window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.left_ct').classList.add('animate-out');
    document.querySelector('.right_ct').classList.add('animate-out');
  }, 100);
});

const workItems = document.querySelectorAll('.work-item');
const galleryDetail = document.querySelector('.gallery_detail');
const closeBtn = galleryDetail.querySelector('.close');
const titleEl = galleryDetail.querySelector('.title');
const imgArea = galleryDetail.querySelector('.img_area');
const textArea = galleryDetail.querySelector('.text_area p');
const prevBtn = galleryDetail.querySelector('.pre');
const nextBtn = galleryDetail.querySelector('.next');

let currentImages = [];
let currentImgIndex = 0;

function showDetail(item) {
  const title = item.dataset.title;
  const description = item.dataset.description;
  const images = item.dataset.images.split(',');

  currentImages = images;
  currentImgIndex = 0;

  titleEl.textContent = title;
  textArea.textContent = description;
  updateImage();
  galleryDetail.style.display = 'block';

   if (images.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
  }

  
}

function updateImage() {
  const imgSrc = currentImages[currentImgIndex];
  imgArea.innerHTML = `<img src="${imgSrc}" alt="">`;
}

workItems.forEach((item) => {
  item.addEventListener('click', () => showDetail(item));
});

closeBtn.addEventListener('click', () => {
  galleryDetail.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentImgIndex =
    (currentImgIndex - 1 + currentImages.length) % currentImages.length;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateImage();
});
