const cards = document.getElementById("cards");
const templateCards = document.getElementById("template-cards").content;

const fragment = document.createDocumentFragment();

const fechApi = async() => {
    try {
        const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await usuarios.json();

        dibujarCards(data)
    } catch (error) {
        console.log(error)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    fechApi()    
})


const dibujarCards = (data) => {
    data.forEach((objeto) => {
        
        templateCards.querySelector("h5").textContent = objeto.name;
        templateCards.querySelector("p").textContent = objeto.username;
        templateCards.querySelectorAll("li")[0].textContent = objeto.email;
        templateCards.querySelectorAll("li")[1].textContent = objeto.website;
        templateCards.querySelectorAll("li")[2].textContent = objeto.phone;
        const clone = templateCards.cloneNode(true)
        fragment.appendChild(clone)

    }); 
    cards.appendChild(fragment);

}