// Portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  // Dark / light theme toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.className = document.body.classList.contains("dark-mode")
      ? "bi bi-sun-fill"
      : "bi bi-moon-stars-fill";
  });

  // Close mobile menu after selecting a section
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Highlight the current navigation link while scrolling
  const sections = document.querySelectorAll("main section[id], main div[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  window.addEventListener("scroll", () => {
    let current = "home";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  // Demo buttons: replace the placeholder alert with your real project URL.
  document.querySelectorAll("[data-demo]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      alert(`${button.dataset.demo}: Add your deployed project URL to this button's href.`);
    });
  });

  // Contact form opens the visitor's email app (no backend required).
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
      status.textContent = "Please complete all fields.";
      status.style.color = "#c0392b";
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    status.textContent = "Opening your email application...";
    status.style.color = "#3c8a4a";
    // Change this address to your real email address.
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  });
});
