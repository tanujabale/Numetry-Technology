document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate name starts with a capital letter
    if (!/^[A-Z][a-zA-Z\s]*$/.test(name)) {
        alert("The name must start with a capital letter and contain only letters and spaces.");
        return;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show success popup
    const popup = document.getElementById("successPopup");
    popup.style.display = "flex";

    // Reset the form fields
    this.reset();
});

// Close the popup
document.querySelector(".close-popup").addEventListener("click", function () {
    const popup = document.getElementById("successPopup");
    popup.style.display = "none";
});
