

const loginDialog = document.getElementById("loginDialog");
const loginBtn = document.getElementById("Log");

if (loginBtn && loginDialog) {
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        loginDialog.showModal();
    });

    loginDialog.addEventListener("click", function (e) {
        const rect = loginDialog.getBoundingClientRect();

        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            loginDialog.close();
        }
    });
}



const learnBtn = document.getElementById("t4");

if (learnBtn) {
    learnBtn.addEventListener("click", function () {
        document.getElementById("Explore Categories").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===============================
// Order Button
// ===============================

const orderBtn = document.getElementById("t3");

if (orderBtn) {
    orderBtn.addEventListener("click", function () {
        alert("Welcome! Choose your favourite food.");
    });
}

// ===============================
// Create Account Validation
// ===============================

const submitBtn = document.getElementById("S1");

if (submitBtn) {

    submitBtn.addEventListener("click", function () {

        const name = document.querySelector(".input1").value.trim();
        const email = document.querySelector(".input3").value.trim();
        const phone = document.querySelector(".input5").value.trim();
        const pass = document.querySelectorAll(".input7")[0].value;
        const cpass = document.querySelectorAll(".input7")[1].value;
        const check = document.querySelector('input[type="checkbox"]');

        if (name === "") {
            alert("Enter your name");
            return;
        }

        if (email === "") {
            alert("Enter your Gmail");
            return;
        }

        if (phone.length != 10) {
            alert("Enter valid Phone Number");
            return;
        }

        if (pass.length < 6) {
            alert("Password must contain at least 6 characters");
            return;
        }

        if (pass !== cpass) {
            alert("Passwords do not match");
            return;
        }

        if (!check.checked) {
            alert("Accept Terms & Conditions");
            return;
        }

        alert("Account Created Successfully!");

        document.querySelector(".input1").value = "";
        document.querySelector(".input3").value = "";
        document.querySelector(".input5").value = "";
        document.querySelectorAll(".input7")[0].value = "";
        document.querySelectorAll(".input7")[1].value = "";
        check.checked = false;

    });

}


const feedbackBtn = document.getElementById("Fb");

if (feedbackBtn) {

    feedbackBtn.addEventListener("click", function () {

        let name = prompt("Enter Your Name");

        if (name == null || name == "") return;

        let review = prompt("Write Your Feedback");

        if (review == null || review == "") return;

        alert("Thank You " + name + "!\n\nYour Feedback:\n" + review);

    });

}



const priceButtons = document.querySelectorAll("#R1");

priceButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        alert("Item Added Successfully!");

    });

});



const whatsapp = document.getElementById("w1");

if (whatsapp) {

    whatsapp.addEventListener("click", function () {

        alert("Opening WhatsApp...");

    });

}