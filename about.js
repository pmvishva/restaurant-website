const learnBtn = document.querySelector(".learn");

learnBtn.addEventListener("click", function () {
    alert("Welcome! Learn more about our food and services.");
});

const learnBtn = document.querySelector(".learn");

learnBtn.addEventListener("click", function () {
    window.location.href = "learn.html";
});

const learnBtn = document.querySelector(".learn");
const text = document.getElementById("GL1");

learnBtn.addEventListener("click", function () {
    text.innerHTML += `
    <br><br>
    <strong>More Information:</strong><br>
    Our restaurant serves fresh, healthy, and delicious food prepared with
    high-quality ingredients. We offer vegetarian and non-vegetarian dishes,
    online ordering, fast delivery, and excellent customer service.
    `;

    learnBtn.textContent = "Thank You!";
    learnBtn.disabled = true;
});