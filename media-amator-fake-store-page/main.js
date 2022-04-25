let currentProducts = products;
let categories = new Set();
let basket = [];
let addToBasketButtons;
const productsSection = document.querySelector(".products");

const addToBasket = (e) => {
  const selectedId = parseInt(e.target.dataset.id);

  const key = currentProducts.findIndex((product) => product.id === selectedId);

  basket.push(currentProducts.at(key));

  const basketTotal = basket.reduce((sum, product) => {
    return (sum += product.price);
  }, 0);

  basketTotal > 0
    ? basketClearBtn.classList.add("active")
    : basketClearBtn.classList.remove("active");

  basketAmountSpan.innerHTML = `${basketTotal} zł`;
};

const renderProducts = (items) => {
  productsSection.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const newProduct = document.createElement("div");
    newProduct.className = `product-item ${items[i].sale ? "on-sale" : ""}`;
    newProduct.innerHTML = `
    <img src="${items[i].image}" alt="product-image" />
    <p class="product-name">${items[i].name}</p>
    <p class="product-description">
   ${items[i].description}
    </p>
    <div class="product-price">
    <span class="price">${items[i].price.toFixed(2)} zł</span>
    <span class="price-sale">${(items[i].price - items[i].saleAmount).toFixed(
      2
    )} zł</span>
    </div>
    <button data-id="${
      items[i].id
    }" class="product-add-to-basket-btn">Dodaj do koszyka</button>
<p class="product-item-sale-info">Promocja</p>`;

    productsSection.appendChild(newProduct);
  }
  addToBasketButtons = document.querySelectorAll(".product-add-to-basket-btn");
  addToBasketButtons.forEach((btn) =>
    btn.addEventListener("click", addToBasket)
  );
};

const renderCategories = (items) => {
  for (let i = 0; i < items.length; i++) {
    categories.add(items[i].category);
  }

  const categoriesItems = document.querySelector(".categories-items");

  categories = ["wszystkie", ...categories];

  categories.forEach((category, index) => {
    const newCategory = document.createElement("button");
    newCategory.innerHTML = category;
    newCategory.dataset.category = category;

    index === 0 ? newCategory.classList.add("active") : "";

    categoriesItems.appendChild(newCategory);
  });
};

document.onload = renderProducts(currentProducts);
document.onload = renderCategories(currentProducts);

const categoriesButtons = document.querySelectorAll(".categories-items button");

categoriesButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const category = e.target.dataset.category;

    categoriesButtons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    currentProducts = products;

    if (category === "wszystkie") {
      currentProducts = products;
    } else {
      currentProducts = currentProducts.filter(
        (product) => product.category === category
      );
    }

    renderProducts(currentProducts);
  })
);

const searchBarInput = document.querySelector(".search-bar-input");

searchBarInput.addEventListener("input", (e) => {
  const search = e.target.value;

  const foundProducts = currentProducts.filter((product) => {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      return product;
    }
  });

  const emptyState = document.querySelector(".empty-state");

  foundProducts.length === 0
    ? emptyState.classList.add("active")
    : emptyState.classList.remove("active");

  renderProducts(foundProducts);
});

const basketAmountSpan = document.querySelector(".basket-amount");
const basketClearBtn = document.querySelector(".basket-clear-btn");

const clearBasket = () => {
  basketAmountSpan.innerHTML = "Koszyk";
  basket = [];
};

basketClearBtn.addEventListener("click", clearBasket);
