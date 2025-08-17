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
