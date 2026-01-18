document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("add-to-cart");
    const qtyInput = document.getElementById("quantity");
    const langSelect = document.getElementById("language");
    const errorMsg = document.getElementById("error-msg");
    const addedMsg = document.getElementById("added-msg");

    addBtn.addEventListener("click", () => {
        const qty = parseInt(qtyInput.value);

        if (!qty || qty <= 0) {
            errorMsg.style.display = "block";
            addedMsg.style.display = "none";
            return;
        }

        errorMsg.style.display = "none";

        const item = {
            productName: "New Moon",
            productPrice: 27,
            quantity: qty,
            language: langSelect.value,
            image: "Moon.jpg"
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Avoid duplicates
        const existing = cart.find(
            i => i.productName === item.productName && i.language === item.language
        );

        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        addedMsg.style.display = "block";
        setTimeout(() => addedMsg.style.display = "none", 2000);

        qtyInput.value = 1;
    });

});
