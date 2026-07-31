

const quantityBoxes = document.querySelectorAll(".quantity");

quantityBoxes.forEach((box) => {

    const minus = box.children[0];
    const number = box.children[1];
    const plus = box.children[2];

    let count = 1;

    plus.addEventListener("click", () => {
        count++;
        number.innerText = count;
    });

    minus.addEventListener("click", () => {
        if(count > 1){
            count--;
            number.innerText = count;
        }
    });

});




document.getElementById("Menu").addEventListener("click", () => {
    alert("Welcome to Food Menu");
});



document.getElementById("Veg").addEventListener("click", () => {

    document.querySelectorAll(".b").forEach(card=>{

        let food = card.querySelector("p").innerText.toLowerCase();

        if(
            food.includes("idali") ||
            food.includes("rice") ||
            food.includes("satham") ||
            food.includes("veg") ||
            food.includes("thali")
        ){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

});




document.getElementById("Non-Veg").addEventListener("click",()=>{

    document.querySelectorAll(".b").forEach(card=>{

        let food = card.querySelector("p").innerText.toLowerCase();

        if(
            food.includes("chiken") ||
            food.includes("binyani")
        ){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

});


document.getElementById("All").addEventListener("click",()=>{

    document.querySelectorAll(".b").forEach(card=>{
        card.style.display="block";
    });

});
let subtotal = 940;
let gst = subtotal * 0.05;
let delivery = subtotal > 500 ? 0 : 40;
let grandTotal = subtotal + gst + delivery;

let total = 0;

const cards = document.querySelectorAll(".b");

cards.forEach(card => {

    const minus = card.querySelectorAll("button")[1];
    const plus = card.querySelectorAll("button")[2];
    const count = card.querySelector("span");

    let qty = 1;

    const price = Number(card.dataset.price);

    function updateTotal(){

        total = 0;

        cards.forEach(item=>{

            const q = Number(item.querySelector("span").innerText);

            total += q * Number(item.dataset.price);

        });

        document.getElementById("total").innerHTML="$"+total;

    }

    plus.onclick=function(){

        qty++;

        count.innerHTML=qty;

        updateTotal();

    }

    minus.onclick=function(){

        if(qty>1){

            qty--;

            count.innerHTML=qty;

            updateTotal();

        }

    }

});

updateTotal();

document.getElementById("paymentBtn").onclick=function(){

    localStorage.setItem("bill",total);

    window.location.href="payment.html";

}