import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";
import { images } from "./images/imageUrls.js";

function clearContent() {
  document.getElementById("content").textContent = "";
}

function setActiveButton(activeBtn) {
  // Remove active class from all buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to clicked button
  activeBtn.classList.add("active");
}

function init() {
  // Load Home initially
  loadHome();

  // Event listeners
  document.getElementById("homeBtn").addEventListener("click", (e) => {
    clearContent();
    loadHome();
    setActiveButton(e.target);
  });

  document.getElementById("menuBtn").addEventListener("click", (e) => {
    clearContent();
    loadMenu();
    setActiveButton(e.target);
  });

  document.getElementById("contactBtn").addEventListener("click", (e) => {
    clearContent();
    loadContact();
    setActiveButton(e.target);
  });
}

init();
