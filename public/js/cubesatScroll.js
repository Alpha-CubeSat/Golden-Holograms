const frameCount = 105;

const currentFrame = index => (
  `images/cubesatScroll/animation${index.toString().padStart(3, '0')}.png`
)

// Preload all images into an array for instant access
const images = [];
const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images[i] = img;
  }
};

preloadImages()

window.onload = function () {
  let prevIndex = 0;
  let ticking = false;
  const html = document.documentElement;
  const canvas = (document.getElementsByClassName("cubsatScroll"))[0];
  const context = canvas.getContext("2d");

  canvas.width = 947;
  canvas.height = 810;

  // Draw initial frame
  if (images[1] && images[1].complete) {
    context.drawImage(images[1], 0, 0);
  } else {
    images[1].onload = () => {
      context.drawImage(images[1], 0, 0);
    };
  }

  const updateImage = (index) => {
    if (images[index] && images[index].complete) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[index], 0, 0);
    }
    ticking = false;
  }

  const handleScroll = () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = window.innerHeight;
    const scrollFraction = Math.min(scrollTop / maxScrollTop, 1);
    const frameIndex = Math.min(
      frameCount,
      Math.max(1, Math.ceil(scrollFraction * frameCount))
    );

    if (frameIndex !== prevIndex && !ticking) {
      requestAnimationFrame(() => updateImage(frameIndex));
      ticking = true;
      prevIndex = frameIndex;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}