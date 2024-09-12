const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('img');
let currentIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
  } else if (e.key === 'ArrowRight') {
    currentIndex += 1;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }
  updateGallery();
});

function updateGallery() {
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}