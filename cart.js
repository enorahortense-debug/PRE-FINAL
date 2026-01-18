document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalEl = document.getElementById("total-price");
    const checkoutBtn = document.querySelector(".checkout-btn");
    const itemCountEl = document.getElementById("item-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p style="color:red; font-size:18px;">Your cart is empty 😔</p>`;
        totalEl.textContent = "$0.00";
        checkoutBtn.disabled = true;
        itemCountEl.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.productName}">
            <div>
                <h2>${item.productName}</h2>
                <p>Language: ${item.language}</p>
                <p>Price: $${item.productPrice}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    function updateTotal() {
        let total = 0;
        let count = 0;
        cart.forEach(item => {
            let priceString=String(item.productPrice).replace('$','');
            let price=parseFloat(priceString);

            let quantity=parseInt(item.quantity);

            if(!isNaN(price)&& !isNaN(quantity)){

            
            total += item.productPrice * item.quantity;
            count += item.quantity;}
        });
        totalEl.textContent = `$${total.toFixed(2)}`;
        checkoutBtn.textContent = `Checkout • $${total.toFixed(2)}`;
        itemCountEl.textContent = count;
    }

    updateTotal();

    document.addEventListener("click", e => {
        if (e.target.classList.contains("remove-btn")) {
            const idx = parseInt(e.target.dataset.index);
            cart.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        }
    });
});
