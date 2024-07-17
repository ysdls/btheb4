document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("popupClosedToday")) {
        showPopup();
    }
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function doNotShowToday() {
    closePopup();
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    localStorage.setItem("popupClosedToday", true);
    localStorage.setItem("popupExpiration", midnight.getTime());
}

if (localStorage.getItem("popupExpiration")) {
    const expirationTime = parseInt(localStorage.getItem("popupExpiration"), 10);
    const now = new Date().getTime();
    if (now > expirationTime) {
        localStorage.removeItem("popupClosedToday");
        localStorage.removeItem("popupExpiration");
    }
}
