/* script.js */
function openGiftPage() {
  window.location.href = "gift.html";
}
function goBack() {
  window.location.href = "index.html";
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
function animateImage(img) {
  img.style.transform = "scale(1.5) rotate(-10deg)";
  setTimeout(() => {
    img.style.transform = "scale(1) rotate(0deg)";
  }, 1000);
}

setInterval(createHeart, 300);
