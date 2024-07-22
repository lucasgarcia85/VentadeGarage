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
                   
                    <div class="divimagen">
                    <img class="imgs" id="imgs" src="/assets/data/img/${product.image}" alt="${product.name}">
                    </div>
                    
                   
                   
                    
                        <p>${product.description}</p>
                        <p><b>Price: ${product.price}</b></p>
                        <div class="descripcion">
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
    catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

// Call the function
getClientsJson();




// function mostrarImagen() {
//     document.getElementsById('imgs').style.width = "50px";
//    }
   
//    function cerrarImagen() {
//     document.getElementById('contenedorImagenAmpliada').style.display = 'none';
//    }

////  <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">



// import productos from './productos.js';

// async function getClientsJson() {
//     try {
//         if (productos) {
//             const cardsContainer = document.getElementById('cards-container');
//             productos.forEach(product => {
//                 const card = document.createElement('div');
//                 card.className = 'card';
//                 card.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <img src="/assets/data/img/${product.image}" alt="${product.name}">
//                     <p>${product.description}</p>
//                     <p><b>Price: ${product.price}</b></p>
//                     <div>
//                         <a href="https://wa.me/1234567890?text=Consultar por este producto: ${product.name}" target="_blank" >
//                         Consulta
//                         </a>
//                         <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">
//                     </div>
//                 `;
//                 cardsContainer.appendChild(card);
//             });
//         }
//     } 
//     catch (error) {
//         console.error("Error fetching JSON:", error);
//     }
// }

// // Llama a la función getClientsJson()
// getClientsJson();