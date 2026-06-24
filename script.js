// EXPAND EXPERIENCE
document.querySelectorAll("[data-toggle]").forEach(el => {
  el.addEventListener("click", () => {
    const target = document.getElementById(el.dataset.toggle);
    target.classList.toggle("hidden");
  });
});

// CERTIFICATE MODAL
const modal = document.getElementById("modal");
const frame = document.getElementById("frame");

document.querySelectorAll("[data-cert]").forEach(el => {
  el.addEventListener("click", () => {
    frame.src = el.dataset.cert;
    modal.classList.remove("hidden");
  });
});

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
  frame.src = "";
};

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      // small stagger effect per element
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 40);

    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ROTATING ROLE

const roleElement = document.getElementById("changing-role");

if (roleElement) {

  const roles = [
    "IT Engineer",
    "Digital Consultant",
    "Systems Developer",
    "Administrative Manager",
    "IT Support Specialist",
    "5+ years of experience",
  ];

  let roleIndex = 0;

  setInterval(() => {

    roleElement.style.opacity = 0;
    roleElement.style.transform = "translateY(6px)";

    setTimeout(() => {

      roleIndex = (roleIndex + 1) % roles.length;
      roleElement.textContent = roles[roleIndex];

      roleElement.style.opacity = 1;
      roleElement.style.transform = "translateY(0px)";

    }, 200);

  }, 2500);

}