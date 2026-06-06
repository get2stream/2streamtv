// EASY EDIT FILE
// Change these values, save, and upload the updated file.

const siteConfig = {
  businessName: "2Stream",
  pageTitle: "2Stream IPTV",

  heroTitle: "Premium streaming made simple.",
  heroSubtitle: "Watch live channels, sports, movies, and series on your favorite devices with fast setup and simple plans.",

  feature1: "Access live entertainment, news, sports, and more from one easy-to-use service.",
  feature2: "Watch live sports and special events without a complicated setup process.",
  feature3: "Enjoy on-demand entertainment with movies, shows, and series options.",
  feature4: "Use Firestick, Android, Smart TV, Apple TV, phones, tablets, and more.",

  plan1Name: "1 Month",
  plan1Price: "$15",

  plan2Name: "3 Months",
  plan2Price: "$35",

  plan3Name: "12 Months",
  plan3Price: "$89",

  contactEmail: "support@example.com",
  contactPhone: "203-555-1234"
};

document.getElementById("page-title").textContent = siteConfig.pageTitle;
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-business-name]").forEach((el) => {
  el.textContent = siteConfig.businessName;
});

document.querySelector("[data-hero-title]").textContent = siteConfig.heroTitle;
document.querySelector("[data-hero-subtitle]").textContent = siteConfig.heroSubtitle;

document.querySelector("[data-feature-1]").textContent = siteConfig.feature1;
document.querySelector("[data-feature-2]").textContent = siteConfig.feature2;
document.querySelector("[data-feature-3]").textContent = siteConfig.feature3;
document.querySelector("[data-feature-4]").textContent = siteConfig.feature4;

document.querySelector("[data-plan-1-name]").textContent = siteConfig.plan1Name;
document.querySelector("[data-plan-1-price]").textContent = siteConfig.plan1Price;
document.querySelector("[data-plan-2-name]").textContent = siteConfig.plan2Name;
document.querySelector("[data-plan-2-price]").textContent = siteConfig.plan2Price;
document.querySelector("[data-plan-3-name]").textContent = siteConfig.plan3Name;
document.querySelector("[data-plan-3-price]").textContent = siteConfig.plan3Price;

const emailLink = document.querySelector("[data-contact-email-link]");
emailLink.href = `mailto:${siteConfig.contactEmail}`;

const phoneLink = document.querySelector("[data-contact-phone-link]");
phoneLink.href = `tel:${siteConfig.contactPhone.replace(/[^0-9+]/g, "")}`;

document.querySelector("[data-contact-text]").textContent =
  `${siteConfig.contactEmail} • ${siteConfig.contactPhone}`;
