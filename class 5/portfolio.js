
const loader = document.getElementById("loader");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

document.body.classList.add("loading");

function hideLoader() {
  loader.classList.add("hidden");
  document.body.classList.remove("loading");
}

window.addEventListener("load", () => {
  setTimeout(hideLoader, 350);
});

setTimeout(hideLoader, 2000);

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", event => {
  if (
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const projectCards = document.querySelectorAll(".project-card");
document.getElementById("projectCount").textContent =
  String(projectCards.length).padStart(2, "0");

const revealElements = document.querySelectorAll(
  ".section-heading, .about-grid, .stats-grid, .section-intro, " +
  ".info-card, .skills-area, .projects-heading, .project-card, " +
  ".journey-intro, .timeline-item, .goals-header, .goal-card, .contact-section"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -25px 0px"
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

document.getElementById("copyEmail").addEventListener("click", async event => {
  const email = event.currentTarget.dataset.email;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement("textarea");
      input.value = email;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();

      const copied = document.execCommand("copy");
      input.remove();

      if (!copied) {
        throw new Error("Copy failed");
      }
    }

    showToast("Email address copied!");
  } catch {
    showToast("Please copy the email manually: " + email);
  }
});

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navigationLinks.forEach(link => {
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px"
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}
