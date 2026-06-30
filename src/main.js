import "./style.css";

/* ---------- Data ---------- */
const products = [
  { id: 1, category: "Waffle",       name: "Waffle with Berries",        price: 6.5,
    image: { thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
             mobile:    "./assets/images/image-waffle-mobile.jpg",
             tablet:    "./assets/images/image-waffle-tablet.jpg",
             desktop: "./assets/images/image-waffle-desktop.jpg"
    }
  },
  { id: 2, category: "Crème Brûlée", name: "Vanilla Bean Crème Brûlée",  price: 7.0,
    image: { thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
             mobile:    "./assets/images/image-creme-brulee-mobile.jpg",
             tablet:    "./assets/images/image-creme-brulee-tablet.jpg",
             desktop:   "./assets/images/image-creme-brulee-desktop.jpg" } },
  { id: 3, category: "Macaron",      name: "Macaron Mix of Five",        price: 8.0,
    image: { thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
             mobile:    "./assets/images/image-macaron-mobile.jpg",
             tablet:    "./assets/images/image-macaron-tablet.jpg",
             desktop:   "./assets/images/image-macaron-desktop.jpg" } },
  { id: 4, category: "Tiramisu",     name: "Classic Tiramisu",           price: 5.5,
    image: { thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
             mobile:    "./assets/images/image-tiramisu-mobile.jpg",
             tablet:    "./assets/images/image-tiramisu-tablet.jpg",
             desktop:   "./assets/images/image-tiramisu-desktop.jpg" } },
  { id: 5, category: "Baklava",      name: "Pistachio Baklava",          price: 4.0,
    image: { thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
             mobile:    "./assets/images/image-baklava-mobile.jpg",
             tablet:    "./assets/images/image-baklava-tablet.jpg",
             desktop:   "./assets/images/image-baklava-desktop.jpg" } },
  { id: 6, category: "Pie",          name: "Lemon Meringue Pie",         price: 5.0,
    image: { thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
             mobile:    "./assets/images/image-meringue-mobile.jpg",
             tablet:    "./assets/images/image-meringue-tablet.jpg",
             desktop:   "./assets/images/image-meringue-desktop.jpg" } },
  { id: 7, category: "Cake",         name: "Red Velvet Cake",            price: 4.5,
    image: { thumbnail: "./assets/images/image-cake-thumbnail.jpg",
             mobile:    "./assets/images/image-cake-mobile.jpg",
             tablet:    "./assets/images/image-cake-tablet.jpg",
             desktop:   "./assets/images/image-cake-desktop.jpg" } },
  { id: 8, category: "Brownie",      name: "Salted Caramel Brownie",     price: 4.5,
    image: { thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
             mobile:    "./assets/images/image-brownie-mobile.jpg",
             tablet:    "./assets/images/image-brownie-tablet.jpg",
             desktop:   "./assets/images/image-brownie-desktop.jpg" } },
  { id: 9, category: "Panna Cotta",  name: "Vanilla Panna Cotta",        price: 6.5,
    image: { thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
             mobile:    "./assets/images/image-panna-cotta-mobile.jpg",
             tablet:    "./assets/images/image-panna-cotta-tablet.jpg",
             desktop:   "./assets/images/image-panna-cotta-desktop.jpg" } },
];

/* ---------- State & DOM ---------- */
let cart = [];
const productContainer = document.getElementById("product-list");
const cartContainer    = document.querySelector("div[id=cart]");
const hidden           = document.querySelector("div[id='hidden']");
const dialog           = document.querySelector("dialog");
const divInsideDialog  = document.getElementById("inside-dialog");
const form             = document.querySelector("form");
const newOrderBtn      = document.getElementById("new-order");

/* ---------- Responsive image ---------- */
const desktopMQ = window.matchMedia("(min-width: 1024px)");
const tabletMQ  = window.matchMedia("(min-width: 768px)");

const getDevice = () => desktopMQ.matches ? "desktop" : tabletMQ.matches ? "tablet" : "mobile";

const getImageForDevice = (product) => product.image[getDevice()];

/* ---------- Templates ---------- */

const cartIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>`;

const emptyCartTemplate = () => `
  <div class="flex flex-col items-center justify-center">
  ${cartIconSVG}
    <p class="text-brand-rose-500 my-6">Your added items will appear here</p>
  </div>`;

const addToCartButtonTemplate = (id) => `
  <button id="${id}" class="group hover:border-brand-red transition-colors cursor-pointer bg-brand-rose border-brand-rose-500 border flex gap-2 items-center justify-center py-3 px-7 rounded-full -mb-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
      <g fill="#C73B0F" clip-path="url(#a)">
        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
      </g>
      <defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
    </svg>
    <span class="group-hover:text-brand-red transition-colors ease-in-out duration-500 font-bold">Add To Cart</span>
  </button>`;

const quantityControlTemplate = (id, quantity = 1) => `
  <div class="bg-brand-red flex gap-10 items-center justify-center py-3 px-7 rounded-full -mb-8">
    <button class="negative group hover:bg-brand-rose transition-colors cursor-pointer w-6 h-6 bg-transparent rounded-full border-white border-2 inline-flex justify-center items-center">
      <svg xmlns="http://w3.org" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path class="fill-white group-hover:fill-brand-red" d="M0 .375h10v1.25H0V.375Z"/>
      </svg>
    </button>
    <span class="text-brand-rose" id="quantity-${id}">${quantity}</span>
    <button class="positive group hover:bg-brand-rose cursor-pointer w-6 h-6 bg-transparent rounded-full border-white border-2 inline-flex justify-center items-center">
      <svg xmlns="http://w3.org" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path class="group-hover:fill-brand-red" fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
      </svg>
    </button>
  </div>`;

const productCardTemplate = (p) => `
  <article>
    <div class="relative">
      <img id="product-${p.id}" data-product-id="${p.id}" src="${getImageForDevice(p)}" alt="${p.name}" class="rounded"/>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-nowrap">
        <div id="btn-${p.id}">${addToCartButtonTemplate(p.id)}</div>
      </div>
    </div>
    <p class="mt-12 text-sm text-brand-rose-500">${p.category}</p>
    <h2 class="font-bold text-nowrap">${p.name}</h2>
    <p class="text-brand-red font-bold mb-2">$${p.price.toFixed(2)}</p>
  </article>`;

const cartItemTemplate = ({ name, price, quantity, id }) => `
  <div class="flex justify-between items-center border-b border-brand-red pb-4 mb-4">
    <div class="space-y-1">
      <h2 class="font-bold text-brand-rose-900">${name}</h2>
      <p class="flex items-center gap-2 text-sm">
        <span class="font-bold text-brand-red mr-2">${quantity}x</span>
        <span class="text-brand-rose-400">@ $${price.toFixed(2)}</span>
        <span class="font-semibold text-brand-rose-500">$${(price * quantity).toFixed(2)}</span>
      </p>
    </div>
    <button id="remove-${id}" class="w-5 h-5 bg-transparent rounded-full border border-brand-rose-500 flex justify-center items-center hover:border-brand-rose-900 transition-colors group">
      <svg class="group-hover:stroke-brand-rose-900" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
    </button>
  </div>`;

/* ---------- Renderers ---------- */
const renderProducts = () => {
  productContainer.innerHTML = products.map(productCardTemplate).join("");
};

const renderCart = () => {
  cartContainer.innerHTML = cart.map(cartItemTemplate).join("");
  hidden.classList.remove("hidden");
};

const renderTitle = () => {
  document.querySelector("span[id=number-of-item]").textContent =
    `(${cart.reduce((acc, i) => acc + i.quantity, 0)})`;
};

const renderTotal = () => {
  const total = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  document.querySelectorAll("h2.total-text").forEach(
    (el) => (el.textContent = `$${total.toFixed(2)}`)
  );
};

const updateCart = () => { renderTitle(); renderCart(); renderTotal(); };

const resetCartUI = () => {
  cartContainer.innerHTML = emptyCartTemplate();
  hidden.classList.add("hidden");
};

const restoreAddButton = (id) => {
  const wrapper = document.querySelector(`div[id=btn-${id}]`);
  if (wrapper) wrapper.innerHTML = addToCartButtonTemplate(id);
  const img = document.getElementById(`product-${id}`);
  if (img) img.style.border = "";
};

const showQuantityControl = (id, quantity = 1) => {
  document.querySelector(`div[id=btn-${id}]`).innerHTML =
    quantityControlTemplate(id, quantity);
  const img = document.getElementById(`product-${id}`);
  if (img) img.style.border = "2px solid hsl(14, 86%, 42%)";
};

/* ---------- Cart ops ---------- */
const addToCart = (id) => {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
};

const removeFromCart = (id) => {
  cart = cart.filter((i) => i.id !== id);
  if (cart.length === 0) resetCartUI();
  else renderCart();
  restoreAddButton(id);
  renderTitle();
  renderTotal();
};

const setQuantity = (id, qty) => {
  if (qty <= 0) { removeFromCart(id); return; }
  const item = cart.find((i) => i.id === id);
  if (item) item.quantity = qty;
  updateCart();
};

/* ---------- Event handlers ---------- */
productContainer.addEventListener("click", (e) => {
  const positiveBtn = e.target.closest("button.positive");
  const negativeBtn = e.target.closest("button.negative");
  const addBtn      = e.target.closest("button[id]");

  if (positiveBtn) {
    const span = positiveBtn.previousElementSibling;
    const id = Number(span.id.split("-")[1]);
    const newQty = Number(span.textContent) + 1;
    span.textContent = newQty;
    setQuantity(id, newQty);
    return;
  }
  if (negativeBtn) {
    const span = negativeBtn.nextElementSibling;
    const id = Number(span.id.split("-")[1]);
    const newQty = Number(span.textContent) - 1;
    span.textContent = Math.max(newQty, 0);
    setQuantity(id, newQty);
    return;
  }
  if (addBtn) {
    const id = Number(addBtn.id);
    if (!id) return;
    addToCart(id);
    showQuantityControl(id, 1);
    updateCart();
  }
});

cartContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button[id^='remove-']");
  if (!btn) return;
  removeFromCart(Number(btn.id.split("-")[1]));
});

/* ---------- Dialog ---------- */
const openConfirmationDialog = () => {
  divInsideDialog.innerHTML =
    cart.map(({ name, price, quantity, image }) => `
      <div class="flex justify-between items-center border-b border-brand-red pb-4 mb-4">
        <div class="space-y-1">
          <div class="flex items-center justify-center gap-4">
            <img class="rounded-2xl shrink p-2" src="${image.thumbnail}" alt="${name}">
            <div class="flex flex-col">
              <h2 class="font-semibold text-brand-rose-900 mb-2">${name}</h2>
              <p class="flex items-center gap-2 text-sm">
                <span class="font-bold text-brand-red text-xl mr-2">${quantity}x</span>
                <span class="text-brand-rose-400">@ $${price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        <h2 class="font-semibold text-brand-rose-900">$${(price * quantity).toFixed(2)}</h2>
      </div>`).join("") +
    `<div class="flex justify-between items-center pt-2">
       <p class="text-brand-rose-900">Order Total</p>
       <h2 class="total-text font-bold text-2xl text-brand-rose-900 text-nowrap">$0.00</h2>
     </div>`;
  renderTotal();
  dialog.showModal();
};

const reset = () => {
  cart = [];
  renderProducts();
  renderTitle();
  renderTotal();
  resetCartUI();
  dialog.close();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(openConfirmationDialog, 400);
});

newOrderBtn.addEventListener("click", reset);

/* ---------- Responsive image swap ---------- */
const refreshProductImages = () => {
  products.forEach((p) => {
    const img = document.getElementById(`product-${p.id}`);
    if (img) img.src = getImageForDevice(p);
  });
};
desktopMQ.addEventListener("change", refreshProductImages);
tabletMQ.addEventListener("change", refreshProductImages);

/* ---------- Init ---------- */
renderProducts();
