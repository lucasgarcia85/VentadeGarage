const productsArray = [
    {
        name: "Licuadora Philips",
        image: "1.jpg",
        description: "Licuadora funcionando con jarra reparada, no pierde, usable, 400watts",
        price: "$17500"
     },
    {
       name: "Plancha Philips Diva 130",
       image: "2.jpg",
       description: "PLancha usada funcionando.",
       price: "$12000"
    },
    {
       name: "Plancha de cabello Gama",
       image: "3.jpg",
       description: "Tourmaline CP3M HPT.",
       price: "$25000"
    },
    {
      name: "Vinoteca para 15 Botellas",
      image: "4.jpg",
      description: "En buen estado",
      price: "$9000"
   },
   {
      name: "Radiador a aceite italiano",
      image: "5.jpg",
      description: "Estufa radiador a aceite 1000W y 2000W.Usada funcionando.",
      price: "$17000"
   },
   {
      name: "Cama dos plazas desarmable",
      image: "6.jpg",
      description: "Cama 2 plazas con maderas extendibles. Es desarmable. Buen estado",
      price: "$40000"
   },
   {
      name: "Mesas de luz de pino",
      image: "7.jpg",
      description: "Juego de mesas de Luz pino. Buen estado.",
      price: "$18000"
   },
   {
      name: "Memoria Sodimm Ddr3 Low voltaje 4gb 12800",
      image: "8.jpg",
      description: "Memoria Ddr3 L 1.35v. Usada funcionando.",
      price: "$12000"
   },
   {
      name: "Mesa de Tv",
      image: "9.jpg",
      description: "Mesa para Tv 32pulgadas maximo. Muy buen estado.",
      price: "$15000"
   },
   {
      name: "Mesa antigua de Tv",
      image: "10.jpg",
      description: "Mesa de Tv con lugar para guardas cosas.",
      price: "$10000"
   },
   {
      name: "Mesa Ratona de vidrio",
      image: "11.jpg",
      description: "Mesa ratona aprox 80cm x 50cm.",
      price: "$45000"
   },
   {
     name: "Mesa de Tv de madera con rueditas",
     image: "12.jpg",
     description: "Mesa ratona aprox 80cm x 50cm.",
     price: "$20000"
   },
   {
     name: "Mesa Ratona de vidrio",
     image: "13.jpg",
     description: "Mesa ratona aprox 50cm x 40cm.",
     price: "$35000"
   },
   {
    name: "Lavarropas Drean vertical",
    image: "14.jpg",
    description: "Lavarropas funcionando con tapa rota.",
    price: "$45000"
   }
    // Agrega más productos según sea necesario
];


function displayProductsFromArray(products) {
    const cardsContainer = document.getElementById('cards-container');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${product.name}</h2>
            
            <div class="divimagen">
            <img class="imgs" id="imgs" src="assets/data/img/${product.image}" alt="${product.name}">
            </div>
            
            <p>${product.description}</p>
            <p><b>Price: ${product.price}</b></p>
            <div class="descripcion">
                <a href="https://wa.me/5491126300818?text=Consultar por este producto: ${product.name}" target="_blank" >
                Consulta
                </a>
                <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">
            </div>
        
        `;
        cardsContainer.appendChild(card);
    });
}


displayProductsFromArray(productsArray);






















































// async function getClientsJson() {
//     try {
//         const response = await $.get("../assets/data/productos.json");
//         if (response) {
//             const cardsContainer = document.getElementById('cards-container');
//             response.forEach(product => {
//                 const card = document.createElement('div');
//                 card.className = 'card';
//                 card.innerHTML = `
//                     <h2>${product.name}</h2>
                   
//                     <div class="divimagen">
//                     <img class="imgs" id="imgs" src="assets/data/img/${product.image}" alt="${product.name}">
//                     </div>
                    
                   
                   
                    
//                         <p>${product.description}</p>
//                         <p><b>Price: ${product.price}</b></p>
//                         <div class="descripcion">
//                             <a href="https://wa.me/5491126300818?text=Consultar por este producto: ${product.name}" target="_blank" >
//                             Consulta
//                             </a>
//                             <img src="assets/img/whatsapp.png" alt="WhatsApp Icon">
//                         </div>
                    
//                 `;
//                 cardsContainer.appendChild(card);
//             });
//         }
//     } 
//     catch (error) {
//         console.error("Error fetching JSON:", error);
//     }
// }

// // Call the function
// getClientsJson();




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