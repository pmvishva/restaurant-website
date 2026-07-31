

document.getElementById("sendBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let username = document.getElementById("username").value.trim();
    let message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        username === "" ||
        message === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    alert("Reservation sent successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("username").value = "";
    document.getElementById("message").value = "";
});


// Subscribe

document.getElementById("sub2").addEventListener("click", function () {

    let subscribeEmail = document.getElementById("sub1").value.trim();

    if (subscribeEmail === "") {
        alert("Please enter your email.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(subscribeEmail)) {
        alert("Invalid email address.");
        return;
    }

    alert("Thank you for subscribing!");

    document.getElementById("sub1").value = "";
});