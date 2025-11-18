window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ios").addEventListener("click", () => loadAR("ios"));
  document.getElementById("android").addEventListener("click", () => loadAR("android"));
});

function loadAR(deviceType) {
  fetch("scenes/ar-scene.html")
    .then(res => res.text())
    .then(html => {
      document.body.innerHTML = html;
      console.log(`AR scene loaded for ${deviceType}`);
    })
    .catch(err => console.error("Failed to load AR scene:", err));
}
