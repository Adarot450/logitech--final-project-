const popularProducts = [
  {
    name: "G513",
    description:
      "The G513 is a mechanical RGB keyboared with 12 programable keys",
    Rating: "Rating:9.1/10",
    Price: "Price:130$-150$",
    img: "ress/g513.webp",
  },
  {
    name: "G613",
    description:
      "The G513 is a mechanical RGB keyboared with 12 programable keys",
    Rating: "Rating:7.5/10",
    Price: "Price:150$",
    img: "ress/g613.webp",
  },
  {
    name: "G903",
    description:
      "The G903 is a RGB wireless mouse with 6 programable buttons and with upto 140 hours of lifetime from one charge.",
    Rating: "Rating:8/10",
    Price: "Price:130$",
    img: "ress/g903.webp",
  },
  {
    name: "G502",
    description:
      "The G502 is a RGB wireless mouse with many programable buttons.",
    Rating: "Rating:7.8/10",
    Price: "Price:150$",
    img: "ress/g502.webp",
  },
  {
    name: "G903",
    description: "The G903 is a Gaming headset with Spacial ingame awarness.",
    Rating: "Rating:8/10",
    Price: "Price:130$",
    img: "ress/ProX.webp",
  },
  {
    name: "C922",
    description: "The C922 is a streaming camera with 1080p video recording.",
    Rating: "Rating:9.2/10",
    Price: "Price:100$",
    img: "ress/C922.webp",
  },
];

const cardContainer = document.querySelector(".products-cards");

for (var i = 0; i < popularProducts.length; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  var img = document.createElement("img");
  img.src = popularProducts[i].img;
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = popularProducts[i].name;
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = popularProducts[i].description;
  const listGroup = document.createElement("ul");
  listGroup.classList.add("list-group");
  listGroup.classList.add("list-group-flush");
  const Rating = document.createElement("li");
  Rating.classList.add("list-group-item");
  Rating.innerHTML = popularProducts[i].Rating;
  const Price = document.createElement("li");
  Price.classList.add("list-group-item");
  Price.innerHTML = popularProducts[i].Price;

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardDiv.appendChild(listGroup);
  listGroup.appendChild(Rating);
  listGroup.appendChild(Price);
  cardContainer.appendChild(cardDiv);
}
