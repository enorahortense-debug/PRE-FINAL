document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const addButton = document.getElementById("add-to-cart");
    const quantityInput = document.getElementById("quantity");
    const errorMsg = document.getElementById("error-msg");
    const addedMsg = document.getElementById("added-msg");

    addButton.addEventListener("click", () => {
        const quantity = parseInt(quantityInput.value);
        
        // Check for invalid quantity
        if (!quantity || quantity <= 0) {
            errorMsg.style.display = "block";
            addedMsg.style.display = "none";
            return;
        }

        errorMsg.style.display = "none";

        // Get language (optional)
        const language = document.getElementById("language").value;

        // Create item object
        const item = {
            productName: "Twilight",
            productPrice: 25,      // price per unit
            quantity: quantity,
            language: language
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add item to cart
        cart.push(item);

        // Save back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Show "added to cart" message briefly
        addedMsg.style.display = "block";

        setTimeout(() => {
            addedMsg.style.display = "none";
        }, 2000); // hide after 2 seconds

        // Reset quantity to 1
        quantityInput.value = 1;
    });

});
