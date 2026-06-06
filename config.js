// EASY EDIT FILE
// Change the text below, save, upload again, and your site updates.

const siteConfig = {
  businessName: "2Stream",
  pageTitle: "2Stream IPTV",

  eyebrow: "Live TV • Sports • Movies • Series",
  heroTitle: "Simple IPTV. Easy Streaming.",
  heroSubtitle: "Watch live channels, sports, movies, and series on the devices you already use.",

  feature1: "Access a wide selection of live TV channels from one easy app.",
  feature2: "Stream live sports and special events without complicated setup.",
  feature3: "Enjoy movies, shows, and on-demand entertainment.",
  feature4: "Works with Firestick, Android, Smart TVs, tablets, and phones.",

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

document.querySelectorAll("[data-business-name]").forEach(el => {
  el.textContent = siteConfig.businessName;
});

document.querySelector("[data-eyebrow]").textContent = siteConfig.eyebrow;
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
