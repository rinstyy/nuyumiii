/* ================================================================
   RAJAN ALE — script.js
   Only two small jobs. Nothing here is needed for the page to show.
   ================================================================ */

// ---------- JOB 1: put the current year in the footer ----------
// So you never have to update "© 2026" by hand again.
document.getElementById("year").textContent = new Date().getFullYear();


// ---------- JOB 2: the menu on phones ----------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


/* ================================================================
   TRY THIS:
   1. In style.css change --accent: #d92b2b to #2563eb (blue).
      Save, refresh. Every button, label and underline changes.
   2. Press F12 in the browser -> Console, and type:
      document.title
   ================================================================ */
