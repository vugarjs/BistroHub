
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const foodItem = button.closest(".food-card").querySelector("h3").textContent;

        alert(`You have ordered: ${foodItem}`);
    });
        
});

