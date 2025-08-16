// Dark/Light mode toggle
document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Add dark mode styles
const style = document.createElement("style");
style.textContent = `
  .dark {
    background: #111;
    color: #eee;
  }
  .dark header {
    background: #000;
  }
`;
document.head.appendChild(style);
