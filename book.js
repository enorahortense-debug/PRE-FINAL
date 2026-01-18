document.addEventListener("DOMContentLoaded", () => {
    
    const addToCartBtn = document.getElementById("add-to-cart");
    
    addToCartBtn.addEventListener("click", () => {
        
        // 1. Get the details from your HTML
        // Note: I am assuming your book title is in an <h1> tag. 
        // If not, add id="book-title" to your title in HTML and use getElementById.
        const title = document.querySelector("h1").innerText; 
        
        // Grab price from the class "book-price" (Line 30 in your photo)
        const priceText = document.querySelector(".book-price").innerText;
        const price = parseFloat(priceText); // Converts "25" to 25.00
        
        // Grab quantity from the input id="quantity" (Line 38)
        const quantityInput = document.getElementById("quantity");
        const quantity = parseInt(quantityInput.value);
        
        // Grab language (Line 16 seems to be the language selector)
        const langSelect = document.getElementById("language");
        const language = langSelect ? langSelect.value : "English"; // Default if missing
        
        // Grab the image source (assuming it's the main image on the page)
        const imageSrc = document.querySelector("img").src;

        // 2. Create the item object
        // IMPORTANT: These keys (productName, productPrice) MUST match your cart.js
        const product = {
            productName: title,
            productPrice: price,
            quantity: quantity,
            language: language,
            image: imageSrc
        };

        // 3. Get existing cart from memory, or start an empty one
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // 4. Add new product to the list
        cart.push(product);

        // 5. Save back to memory
        localStorage.setItem("cart", JSON.stringify(cart));

        // 6. Show the "Item added" message (Line 46 in your photo)
        const successMsg = document.getElementById("added-msg"); // Line 46 ID
        successMsg.style.display = "block";
        
        // Hide the message after 3 seconds
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);
        
        console.log("Product saved:", product);
    });
});