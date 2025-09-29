import { images } from "./images/imageUrls.js";

export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "page-section menu-section";

  const headline = document.createElement("h1");
  headline.textContent = "Our Exquisite Menu";

  const description = document.createElement("p");
  description.textContent =
    "Discover our carefully curated selection of dishes, each prepared with passion and the finest ingredients. From traditional favorites to innovative creations, every meal is a celebration of flavor.";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        {
          name: "Truffle Arancini",
          price: "$14",
          description: "Crispy risotto balls with truffle oil and parmesan",
          image: images.truffleArancini,
        },
        {
          name: "Burrata Caprese",
          price: "$16",
          description: "Fresh burrata with heirloom tomatoes and basil",
          image: images.burrataCaprese,
        },
        {
          name: "Seafood Crudo",
          price: "$18",
          description: "Fresh catch with citrus and olive oil",
          image: images.seafoodCrudo,
        },
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Osso Buco",
          price: "$32",
          description: "Braised veal shank with saffron risotto",
          image: images.ossoBuco,
        },
        {
          name: "Pan-Seared Salmon",
          price: "$28",
          description: "Atlantic salmon with roasted vegetables",
          image: images.panSearedSalmon,
        },
        {
          name: "Handmade Pasta",
          price: "$24",
          description: "Fresh pasta with seasonal ingredients",
          image: images.handmadePasta,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Tiramisu",
          price: "$12",
          description: "Classic Italian dessert with espresso and mascarpone",
          image: images.tiramisu,
        },
        {
          name: "Chocolate Soufflé",
          price: "$14",
          description: "Warm chocolate soufflé with vanilla gelato",
          image: images.chocolateSouffle,
        },
        {
          name: "Panna Cotta",
          price: "$10",
          description: "Silky vanilla panna cotta with berry compote",
          image: images.pannaCotta,
        },
      ],
    },
  ];

  menuCategories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "menu-category";

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.title;

    categoryDiv.appendChild(categoryTitle);

    category.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const itemContent = document.createElement("div");
      itemContent.className = "menu-item-content";

      const itemInfo = document.createElement("div");
      const itemName = document.createElement("div");
      itemName.className = "menu-item-name";
      itemName.textContent = item.name;

      const itemDesc = document.createElement("div");
      itemDesc.className = "menu-item-description";
      itemDesc.textContent = item.description;

      const itemPrice = document.createElement("div");
      itemPrice.className = "menu-item-price";
      itemPrice.textContent = item.price;

      const itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImage.className = "menu-item-image";

      itemInfo.appendChild(itemName);
      itemInfo.appendChild(itemDesc);
      itemContent.appendChild(itemInfo);
      itemContent.appendChild(itemPrice);

      menuItem.appendChild(itemContent);
      menuItem.appendChild(itemImage);

      categoryDiv.appendChild(menuItem);
    });

    menuGrid.appendChild(categoryDiv);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(description);
  menuDiv.appendChild(menuGrid);

  content.appendChild(menuDiv);
}
