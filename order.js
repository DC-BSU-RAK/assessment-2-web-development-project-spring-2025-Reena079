const products = [
  { name: "Tropical Mango (Cup)", price: 5.00 },
  { name: "Strawberry Silk Shake (Medium)", price: 4.50 }
];

const cart = [];

function updateCartDisplay() {
  const cartList = document.querySelector(".cart-items");
  const totals = document.querySelector(".totals");

  cartList.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p><span>${item.name}</span></p>
      <span>Qty: ${item.quantity}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartList.appendChild(li);
    subtotal += item.price * item.quantity;
  });

  const tax = +(subtotal * 0.11).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  totals.innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax: $${tax.toFixed(2)}</p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
  `;
}

function addToCart(index) {
  const product = products[index];
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => addToCart(index));
  });

  // Start with an empty cart display
  updateCartDisplay();
});
