document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    const landArea = document.getElementById("land-area").value;
    const areaUnit = document.getElementById("area-unit").value;
    const region = document.getElementById("region").value;
    const location = document.querySelector("#location").value;
    const sowingDate = document.getElementById("sowing-date").value;
    const soilType = document.getElementById("soil-type").value;
    const cropType = document.getElementById("crop").value;

    const farmDetails = {
      landArea,
      areaUnit,
      region,
      location,
      sowingDate,
      soilType,
      cropType: cropType || "Not specified",
    };

    localStorage.setItem("farmDetails", JSON.stringify(farmDetails))
  });
});
