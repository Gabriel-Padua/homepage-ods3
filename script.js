function playInMain(el) {
  const mainVideo = document.getElementById("mainVideo");
  const mainTitle = document.getElementById("mainVideoTitle");
  const src = el.dataset.src;
  const title = el.dataset.title;

  mainVideo.src = src + "?autoplay=1";
  mainTitle.textContent = title;

  document
    .getElementById("mainVideoContainer")
    .scrollIntoView({ behavior: "smooth", block: "center" });
}
