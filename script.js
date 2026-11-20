const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navigationLinks = [...document.querySelectorAll(".main-nav a")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const timelineItems = [...document.querySelectorAll(".timeline-item")];
const aboutContent = window.aboutContent;

if (aboutContent) {
  document.querySelector("#about-eyebrow").textContent = aboutContent.eyebrow;
  document.querySelector("#hero-title").textContent = aboutContent.name;
  document.querySelector("#about-role").textContent = aboutContent.role;
  document.querySelector("#about-introduction").textContent = aboutContent.introduction;
  document.querySelector("#about-personal-introduction").textContent = aboutContent.personalIntroduction;
  document.querySelector("#about-residence").textContent = aboutContent.residence;
  document.querySelector("#about-legal-motivation").textContent = aboutContent.legalMotivation;

  const contactList = document.querySelector("#about-contact");
  aboutContent.contacts.forEach((contact) => {
    const item = document.createElement("li");
    const symbol = document.createElement("span");
    const link = document.createElement("a");
    symbol.className = "contact-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = contact.symbol;
    link.href = contact.href;
    link.textContent = contact.text;
    if (contact.href.startsWith("https://")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    item.append(symbol, link);
    contactList.append(item);
  });

  const skillList = document.querySelector("#about-skills");
  aboutContent.skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.textContent = skill;
    skillList.append(tag);
  });

  const languageList = document.querySelector("#about-languages");
  aboutContent.languages.forEach((language) => {
    const card = document.createElement("div");
    const symbol = document.createElement("span");
    const name = document.createElement("div");
    const title = document.createElement("strong");
    const level = document.createElement("small");
    card.className = "language-card";
    symbol.className = "language-card-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = "◎";
    title.textContent = language.name;
    level.textContent = language.level;
    name.append(title, level);
    card.append(symbol, name);
    languageList.append(card);
  });
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.querySelector(".sr-only").textContent = isExpanded
    ? "Åbn navigation"
    : "Luk navigation";
  mainNav.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Åbn navigation";
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });
    timelineItems.forEach((item) => {
      const shouldShow = selectedFilter === "all" || item.dataset.category === selectedFilter;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".section-head, .timeline-card, .education-item, .skill-block").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

if (navigationLinks.some((link) => link.hash)) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navigationLinks.forEach((link) => {
            const isCurrent = link.hash === `#${entry.target.id}`;
            link.classList.toggle("is-current", isCurrent);
            if (isCurrent) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}
document.querySelector("#current-year").textContent = new Date().getFullYear();
