function sendMessage() {
    // Get form values
    const name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate fields
    if (!name || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    // Set default email if empty
    if (!email) {
        email = "demo@gmail.com";
    }

    // Construct WhatsApp message
    const fullMessage = `Hello!%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappNumber = "8081361514"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");

    // Clear form
    document.getElementById("contactForm").reset();
}
