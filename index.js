// Select all extension items
const extensions = document.querySelectorAll(".item");

// Select filter buttons
const allBtn = document.querySelector(".b1:nth-child(1)");
const activeBtn = document.querySelector(".b1:nth-child(2)");
const inactiveBtn = document.querySelector(".b1:nth-child(3)");

// Initialize: hide remove buttons for inactive extensions
extensions.forEach((ext) => {
  const checkbox = ext.querySelector(".switch input");
  const removeBtn = ext.querySelector(".remove");

  // Set initial state based on checkbox
  if (checkbox.checked) {
    ext.classList.add("active");
    removeBtn.style.display = "inline-block";
  } else {
    ext.classList.add("inactive");
    removeBtn.style.display = "none";
  }

  // Listen for toggle
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      ext.classList.remove("inactive");
      ext.classList.add("active");
      removeBtn.style.display = "inline-block";
    } else {
      ext.classList.remove("active");
      ext.classList.add("inactive");
      removeBtn.style.display = "none";
    }
  });

  // Remove extension when remove button is clicked
  removeBtn.addEventListener("click", () => {
    ext.remove();
  });
});

// Filter buttons functionality
allBtn.addEventListener("click", () => {
  extensions.forEach((ext) => {
    ext.style.display = "flex";
  });
});

activeBtn.addEventListener("click", () => {
  extensions.forEach((ext) => {
    if (ext.classList.contains("active")) {
      ext.style.display = "flex";
    } else {
      ext.style.display = "none";
    }
  });
});

inactiveBtn.addEventListener("click", () => {
  extensions.forEach((ext) => {
    if (ext.classList.contains("inactive")) {
      ext.style.display = "flex";
    } else {
      ext.style.display = "none";
    }
  });
});

const moonIcon = document.querySelector(".moon");
let darkMode = false;

moonIcon.addEventListener("click", () => {
  darkMode = !darkMode;

  document.body.classList.toggle("dark");

  if (darkMode) {
    moonIcon.src = "./images/icon-sun.svg"; // switch to sun
  } else {
    moonIcon.src = "./images/icon-moon.svg"; // switch back to moon
  }
});
