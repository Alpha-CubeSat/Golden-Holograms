const frameCount = 105;

const currentFrame = index => (
  `images/cubesatScroll/animation${index.toString().padStart(3, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages()

window.onload = function () {
  var previndex;
  const html = document.documentElement;
  const canvas = (document.getElementsByClassName("cubsatScroll"))[0];
  const context = canvas.getContext("2d");

  const img = new Image()
  img.src = currentFrame(1);

  canvas.width = 947;
  canvas.height = 810;

  var transparent = context.createImageData(947, 810);
  for (var i = transparent.data.length; --i >= 0;)
    transparent.data[i] = 0;

  img.onload = function () {
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
    //   window.requestAnimationFrame(() => updateImage(frameCount))
  }

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount),
    );

    if (frameIndex != previndex) {
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    }

    previndex = frameIndex
    console.log(frameIndex)
  });
}