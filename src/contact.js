export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.className = "page-section contact-section";

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const description = document.createElement("p");
  description.textContent =
    "We'd love to hear from you! Whether you're planning a special event, have questions about our menu, or simply want to make a reservation, we're here to help make your dining experience exceptional.";

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  const contactCards = [
    {
      title: "Visit Us",
      details: [
        "123 Gourmet Street",
        "Downtown District",
        "New York, NY 10001",
      ],
    },
    {
      title: "Call Us",
      details: [
        "Reservations: (555) 123-4567",
        "Catering: (555) 123-4568",
        "General Info: (555) 123-4569",
      ],
    },
    {
      title: "Hours",
      details: [
        "Monday - Thursday: 5:00 PM - 10:00 PM",
        "Friday - Saturday: 5:00 PM - 11:00 PM",
        "Sunday: 4:00 PM - 9:00 PM",
      ],
    },
    {
      title: "Connect",
      details: [
        "Email: info@bellavista.com",
        "Follow us on social media",
        "Sign up for our newsletter",
      ],
    },
  ];

  contactCards.forEach((card) => {
    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = card.title;

    contactCard.appendChild(cardTitle);

    card.details.forEach((detail) => {
      const detailP = document.createElement("p");
      detailP.textContent = detail;
      contactCard.appendChild(detailP);
    });

    contactInfo.appendChild(contactCard);
  });

  contactDiv.appendChild(headline);
  contactDiv.appendChild(description);
  contactDiv.appendChild(contactInfo);

  content.appendChild(contactDiv);
}
