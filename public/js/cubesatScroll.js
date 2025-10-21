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
  let prevIndex = 1;
  const canvas = (document.getElementsByClassName("cubsatScroll"))[0];
  const context = canvas.getContext("2d");

  canvas.width = 947;
  canvas.height = 810;

  // Draw initial frame
  const drawFrame = (index) => {
    if (images[index] && images[index].complete) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[index], 0, 0);
    }
  };

  // Draw initial frame
  drawFrame(1);

  window.addEventListener('scroll', () => {
    const rect = canvas.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Animation starts when canvas is 75% into viewport and ends when canvas is 25% out of viewport
    const animationStart = windowHeight * 0.5; // Start later - canvas top at 75% viewport height
    const animationEnd = -rect.height * 0.5;   // End sooner - only 25% of canvas past viewport top
    const animationRange = animationStart - animationEnd;

    // Calculate scroll progress through the animation range
    let scrollProgress = (animationStart - rect.top) / animationRange;
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    const frameIndex = Math.min(
      frameCount,
      Math.max(1, Math.round(scrollProgress * (frameCount - 1)) + 1)
    );

    if (frameIndex !== prevIndex) {
      drawFrame(frameIndex);
      prevIndex = frameIndex;
    }
  }, { passive: true });
}