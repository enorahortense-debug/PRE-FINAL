const payment = document.getElementById("payment");
const cardDetails = document.getElementById("cardDetails");
const paypalDetails = document.getElementById("paypalDetails");
const form = document.getElementById("checkoutForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

payment.addEventListener("change", () => {
    cardDetails.classList.add("hidden");
    paypalDetails.classList.add("hidden");

    if (payment.value === "visa" || payment.value === "debit") {
        cardDetails.classList.remove("hidden");
    }

    if (payment.value === "paypal") {
        paypalDetails.classList.remove("hidden");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";

    const requiredFields = [
        "name", "address", "city", "zip", "phone"
    ];

    for (let id of requiredFields) {
        if (document.getElementById(id).value.trim() === "") {
            errorMsg.textContent = "Please fill in all required fields.";
            return;
        }
    }

    if (payment.value === "") {
        errorMsg.textContent = "Please select a payment method.";
        return;
    }

    if ((payment.value === "visa" || payment.value === "debit")) {
        if (
            cardNumber.value === "" ||
            expiry.value === "" ||
            cvv.value === ""
        ) {
            errorMsg.textContent = "Please complete card details.";
            return;
        }
    }

    if (payment.value === "paypal" && paypalEmail.value === "") {
        errorMsg.textContent = "Please enter PayPal email.";
        return;
    }

    // SUCCESS
    successMsg.style.display = "block";
    setTimeout(() => {
        successMsg.style.display = "none";
        form.reset();
    }, 3000);
    
     window.location.href = "thankyou.html";
});
