function startAR(platform) {
  // Hide UI and prepare for AR
  document.body.style.background = "transparent";
  document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
  const container = document.getElementById("arContainer");
  container.style.display = "block";

  // Load the AR scene HTML into the container
  fetch("/ar_demo_2/scenes/ar-scene.html")
  .then(response => {
    if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
    return response.text();
  })
  .then(html => {
    console.log("Scene HTML loaded!");
    document.getElementById("scene-container").innerHTML = html;
  })
  .catch(error => {
    console.error("Scene load error:", error);
  });

}
