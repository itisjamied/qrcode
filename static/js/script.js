// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    document.getElementById("themeToggle").checked = newTheme === "dark";
}

// Load saved theme preference
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    document.getElementById("themeToggle").checked = savedTheme === "dark";
});


function toggleCustomFgColor() {
    document.getElementById('fg_custom_color').disabled = false;
}

function toggleCustomBgColor() {
    document.getElementById('bg_custom_color').disabled = false;
}

function updateFgColor() {
    document.getElementById('fg_custom').value = document.getElementById('fg_custom_color').value;
}

function updateBgColor() {
    document.getElementById('bg_custom').value = document.getElementById('bg_custom_color').value;
}