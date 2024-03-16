async function getClientsJson() {
    try {
        const response = await $.get("../assets/data/productos.json");
        if (response) {
            const cardsContainer = document.getElementById('cards-container');
            response.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="/assets/data/img/${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <p><b>Price: ${product.price}</b></p>
                    <div>
                        <a href="https://wa.me/1234567890?text=Consultar por este producto: ${product.name}" target="_blank" >
                        Consulta
                        </a>
                        <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">
                    </div>
                `;
                cardsContainer.appendChild(card);
            });
        }
    } 
    // catch (error) {
    //     console.error("Error fetching JSON:", error);
    // }
}

// Call the function
getClientsJson();

////  <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">