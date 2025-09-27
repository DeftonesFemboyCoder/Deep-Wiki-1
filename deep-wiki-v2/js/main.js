// Fake deep web pages
const pages = [
  "pages/page1.html",
  "pages/page2.html",
  "pages/page3.html"
];

document.querySelectorAll(".fake-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Simulate fake loading screen
    document.body.innerHTML = "<div style='background:black;color:red;height:100vh;display:flex;justify-content:center;align-items:center;font-size:24px;'>Connecting...</div>";

    setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      window.location.href = randomPage;
    }, 2000); // 2-second delay
  });
});
