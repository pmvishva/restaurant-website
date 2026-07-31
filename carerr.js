function sendmessage_g() {

    // Get input values
    let name = document.querySelector(".input1").value.trim();
    let email = document.querySelector(".input3").value.trim();
    let password = document.querySelector(".input7").value.trim();
    let phone = document.querySelector(".input5").value.trim();

    // Message input (second .input7)
    let message = document.querySelectorAll(".input7")[1].value.trim();

    // Validation
    if (name === "" || email === "" || password === "" || phone === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address.");
        return;
    }

    // Phone validation
    if (phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Success
    alert("Application Submitted Successfully!");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Clear fields
    document.querySelector(".input1").value = "";
    document.querySelector(".input3").value = "";
    document.querySelectorAll(".input7")[0].value = "";
    document.querySelector(".input5").value = "";
    document.querySelectorAll(".input7")[1].value = "";
}