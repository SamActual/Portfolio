// Dark/Light mode toggle
document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Add dark mode styles
const style = document.createElement("style");
style.textContent = `
  .dark {
    background: #ffffffff;
    color: #000000ff;
  }
  .dark header {
    background: #000000ff;
  }
`;
document.head.appendChild(style);

// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll back to top when clicked
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});