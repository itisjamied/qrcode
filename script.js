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


function generateQRCode() {
    // Get URL and colors from form
    const url = document.getElementById("url").value;
    const fgColor = document.querySelector('input[name="fg_color"]:checked').value;
    const bgColor = document.querySelector('input[name="bg_color"]:checked').value;

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate new QR code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200,
        colorDark: fgColor,
        colorLight: bgColor
    });
}

function downloadQRCode() {
    // Select the generated QR code canvas
    const qrCanvas = document.querySelector("#qrcode canvas");
    
    // Convert canvas to image
    const imgURL = qrCanvas.toDataURL("image/png");
    
    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "qr_code.png";
    link.click();
}