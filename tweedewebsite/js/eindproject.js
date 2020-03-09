//maakt 2 variable aan voor div uit div en button uit div
var button = document.querySelector("div > button");
var grapje = document.querySelector("div > div");


// functie zodat wanneer er geklikt wordt, class 'verschijn' gekoppeld aan de div uit de div, var grapje, en verdwijnt de oude button, var button
button.addEventListener("click", function() {
    grapje.classList.toggle("verschijn");
    button.style.display = "none";
});

