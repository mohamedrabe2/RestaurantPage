import { images } from "./images/imageUrls.js";

export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.className = "page-section home-section";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Bella Vista Restaurant";

  const heroText = document.createElement("p");
  heroText.className = "hero-text";
  heroText.textContent =
    "Where culinary artistry meets exceptional hospitality";

  const description = document.createElement("p");
  description.textContent =
    "Experience an unforgettable dining journey with our carefully crafted dishes made from the finest local ingredients. Our passionate chefs create masterpieces that delight both the eye and the palate.";

  const featuresContainer = document.createElement("div");
  featuresContainer.className = "features";

  const features = [
    {
      title: "Fresh Ingredients",
      description:
        "Locally sourced, organic ingredients delivered daily to ensure the highest quality and freshness.",
      image: images.freshIngredients,
    },
    {
      title: "Expert Chefs",
      description:
        "Our award-winning culinary team brings years of experience and passion to every dish.",
      image: images.expertChefs,
    },
    {
      title: "Elegant Atmosphere",
      description:
        "Sophisticated ambiance perfect for romantic dinners, business meetings, or special celebrations.",
      image: images.elegantAtmosphere,
    },
  ];

  features.forEach((feature) => {
    const featureCard = document.createElement("div");
    featureCard.className = "feature-card";

    const featureImage = document.createElement("img");
    featureImage.src = feature.image;
    featureImage.alt = feature.title;
    featureImage.className = "feature-image";

    const featureTitle = document.createElement("h3");
    featureTitle.textContent = feature.title;

    const featureDesc = document.createElement("p");
    featureDesc.textContent = feature.description;

    featureCard.appendChild(featureImage);
    featureCard.appendChild(featureTitle);
    featureCard.appendChild(featureDesc);
    featuresContainer.appendChild(featureCard);
  });

  homeDiv.appendChild(headline);
  homeDiv.appendChild(heroText);
  homeDiv.appendChild(description);
  homeDiv.appendChild(featuresContainer);

  content.appendChild(homeDiv);
}
