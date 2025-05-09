document.addEventListener("DOMContentLoaded", () => {
  console.log("Enhancements.js loaded");
  // Add search bar
  const header = document.querySelector("header .container");
  if (header) {
    const searchDiv = document.createElement("div");
    searchDiv.className = "mt-4 flex justify-center";
    searchDiv.innerHTML = `
      <input type="text" id="search-input" placeholder="Search products..." class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 w-64">
      <button onclick="searchProducts()" class="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600">Search</button>
    `;
    header.appendChild(searchDiv);
  } else {
    console.error("Header container not found");
  }

  // Attach event to Proceed to Cart button
  const cartButton = document.getElementById("proceed-to-cart");
  if (cartButton) {
    cartButton.onclick = () => {
      console.log("Proceed to Cart clicked");
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      if (cartItems.length === 0) {
        alert("Your cart is empty!");
        console.log("Cart is empty, showing alert");
        return;
      }
      console.log("Redirecting to cart.html");
      window.location.href = "cart.html";
    };
  } else {
    console.error("Proceed to Cart button not found");
  }
});

function searchProducts() {
  console.log("Searching products");
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = name.includes(searchInput) ? "block" : "none";
  });
}

function filterCategory(category) {
  console.log(`Filtering category: ${category}`);
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    const productCategory = product.getAttribute("data-category");
    product.style.display = category === "all" || productCategory === category ? "block" : "none";
  });
}