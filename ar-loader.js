function startAR(platform) {
  
  // Hide UI and prepare for AR
  document.body.style.background = "transparent";
  document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
  const container = document.getElementById("arContainer");
  container.style.display = "block";

  // Load the AR scene HTML into the container
  fetch("scenes/ar-scene.html")
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;
      console.log(`AR scene loaded for ${platform}`);
    })
    .catch(err => {
      console.error("Failed to load AR scene:", err);
    });
}
