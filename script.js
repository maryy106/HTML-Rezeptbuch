<script>
  const homeBtn = document.querySelector("button:nth-of-type(1)");
  const galleryBtn = document.querySelector("button:nth-of-type(2)");
  const recentBtn = document.querySelector("button:nth-of-type(3)");
  const aboutBtn = document.querySelector("button:nth-of-type(4)");

  homeBtn.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  galleryBtn.addEventListener("click", () => {
    window.location.href = "gallery.html";
  });

  recentBtn.addEventListener("click", () => {
    window.location.href = "recent.html";
  });

  aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
  });
</script>
