const products = [
    {
        id: "1",
        name: "Baseball Calavera",
        description: "Gorra Baseball Calavera Color Beige",
        color: "Beige",
        stock: 15,
        price: 30,
        img: 'baseball calavera.jpg',
        category: 'baseball',
        detailDescription: ["Esta sofisticada gorra de béisbol de Limbo Hats en un suave tono beige es una elección de estilo excepcional. El color beige transmite una elegancia sutil, mientras que el aplique de calavera skull agrega un toque de intriga y rebeldía a tu apariencia", "Esta gorra está confeccionada con materiales de primera calidad que garantizan su durabilidad y comodidad. El color beige neutro sirve como el fondo perfecto para el llamativo aplique de calavera skull en la parte frontal. La calavera skull está meticulosamente diseñada con detalles que resaltan, creando un contraste impresionante y un punto focal atractivo.", "El diseño de gorra de béisbol incluye una visera curvada que protege tus ojos del sol y te brinda sombra en días brillantes. Además, cuenta con una correa ajustable en la parte trasera, lo que permite que la gorra se ajuste de manera personalizada y cómoda.", "Ya sea que quieras destacar en un evento especial o simplemente desees agregar un toque de estilo distintivo a tu apariencia diaria, esta gorra beige de Limbo Hats con el aplique de calavera skull es una elección magnífica. Combina elegancia, individualidad y calidad en un accesorio que refleja tu personalidad única."]
    },
    {
        id: "2",
        name: "Baseball Flor",
        description: "Gorra Baseball Flor Color Gris",
        color: "Gris",
        stock: 20,
        price: 30,
        img: 'baseball flor gris.jpg',
        category: 'baseball',
        detailDescription: ["Esta encantadora gorra de béisbol de Limbo Hats en un elegante tono gris es una elección que combina simplicidad y elegancia. El color gris es atemporal y versátil, lo que la convierte en una adición perfecta a tu colección de accesorios.", "En la parte frontal de la gorra, destaca un hermoso aplique de una flor tradi. Esta flor tradi está meticulosamente diseñada, con detalles que capturan la belleza y la delicadeza de la naturaleza. El contraste entre el gris neutro de la gorra y los colores vibrantes de la flor tradi crea una imagen sorprendentemente hermosa.", "La gorra de béisbol presenta una visera curva que te protege del sol y te brinda una sombra cómoda en días soleados. Además, cuenta con una correa ajustable en la parte trasera para un ajuste personalizado que garantiza la comodidad durante todo el día.", "Esta gorra de béisbol de Limbo Hats es la elección ideal para aquellos que desean una pieza de moda que combine lo clásico con lo distintivo. Ya sea que desees usarla para una salida casual o para destacar en un evento especial, esta gorra gris con el aplique de la flor tradi te proporciona estilo y calidad en un solo accesorio."]
    },
    {
        id: "3",
        name: "Baseball Flor",
        description: "Gorra Baseball Flor Color Violeta",
        Color: "Violeta",
        stock: 20,
        price: 30,
        img: 'baseball flor violeta.jpg',
        category: 'baseball',
        detailDescription: ["Esta llamativa gorra de béisbol de Limbo Hats en un audaz tono violeta es la elección perfecta para quienes buscan destacar con estilo y originalidad. El color violeta es vibrante y enérgico, lo que le brinda a esta gorra un aspecto fresco y atractivo.", "En la parte frontal de la gorra, se encuentra un aplique artísticamente diseñado de una flor tradi. Esta flor tradi se presenta en tonos que contrastan con el violeta de la gorra, creando un punto focal impresionante. Los detalles de la flor tradi están elaborados con precisión, capturando la belleza y la elegancia de la naturaleza.", "La gorra de béisbol está diseñada con una visera curvada que proporciona sombra y protección contra el sol, y cuenta con una correa ajustable en la parte trasera para un ajuste cómodo y personalizado.", "Ya sea que quieras añadir un toque de color y estilo a tu atuendo diario o hacer una declaración audaz en un evento especial, esta gorra violeta de Limbo Hats con el aplique de la flor tradi es una elección excepcional. Combina audacia, elegancia y calidad en un solo accesorio que refleja tu personalidad única."]
    },
    {
        id: "4",
        name: "Baseball IPA",
        description: "Gorra Baseball IPA Color Verde",
        stock: 20,
        price: 30,
        img: 'baseball ipa verde.jpg',
        category: 'baseball',
        detailDescription: ["Esta fresca gorra de béisbol de Limbo Hats en un vibrante tono verde es un homenaje perfecto para los amantes de la cerveza IPA. El color verde evoca la frescura de los ingredientes naturales, mientras que el aplique de un lúpulo de cerveza IPA añade un toque de pasión cervecera a tu estilo.", "El aplique del lúpulo de cerveza IPA se encuentra en la parte frontal de la gorra y está elaborado con una precisión asombrosa. Captura la forma y los detalles característicos del lúpulo, que es esencial para la elaboración de las cervezas IPA, con sus hojas puntiagudas y conos aromáticos.", "La gorra de béisbol ofrece una visera curvada que protege tus ojos del sol y te brinda sombra en los días soleados. Además, cuenta con una correa ajustable en la parte trasera para un ajuste personalizado y cómodo.", "Esta gorra verde de Limbo Hats con el aplique de un lúpulo de cerveza IPA es el accesorio perfecto para los amantes de la cerveza artesanal. Ya sea que quieras mostrar tu pasión por las IPAs o simplemente desees destacar con estilo, esta gorra te proporciona un toque de originalidad y calidad en un solo accesorio. ¡Es la elección ideal para los amantes de la cerveza y la moda!"]
    },
    {
        id: "5",
        name: "Baseball Planeta",
        description: "Gorra Baseball Planeta Color Gris",
        color: "Gris",
        stock: 20,
        price: 30,
        img: 'baseball planeta gris.jpg',
        category: 'baseball',
        detailDescription: ["Esta gorra de béisbol de Limbo Hats en un sutil tono de gris es un tributo a la majestuosidad del espacio. El color gris representa la neutralidad y la elegancia, mientras que el aplique de Saturno añade un toque de misterio y maravilla cósmica a tu estilo.", "El aplique de Saturno se encuentra en la parte frontal de la gorra y está cuidadosamente diseñado para capturar la belleza distintiva de este planeta. Los anillos de Saturno son un elemento destacado, mostrando su belleza característica y su elegancia en un diseño intrincado.", "La gorra de béisbol está diseñada con una visera curvada que proporciona sombra y protección contra el sol, y cuenta con una correa ajustable en la parte trasera para un ajuste cómodo y personalizado.", "Esta gorra gris de Limbo Hats con el aplique de Saturno es la elección perfecta para los amantes de la astronomía y la ciencia espacial, así como para quienes aprecian un toque de estilo único y sofisticado. Combina la elegancia con la inspiración espacial en un solo accesorio de alta calidad que destaca en cualquier ocasión."]
    },
    {
        id: "6",
        name: "Snap Calavera",
        description: "Gorra Snap Calavera Color Amarillo",
        color: "Amarillo",
        stock: 20,
        price: 30,
        img: 'snap calavera amarillo y negro.jpg',
        category: 'snap',
        detailDescription: ["Esta llamativa gorra snapback de Limbo Hats combina audazmente los colores amarillo y negro para un efecto impactante. La visera amarilla agrega un toque de vitalidad y energía, mientras que el resto de la gorra en negro le proporciona un aspecto elegante y atrevido.", "En la parte frontal de la gorra, destaca un aplique de calavera skull en un tono amarillo que coincide perfectamente con la visera. La calavera skull está meticulosamente diseñada, con detalles que la hacen destacar en contraste con el fondo negro. Este diseño agrega un elemento de rebeldía y estilo a tu apariencia.", "La gorra snapback es conocida por su estilo clásico y su capacidad de ajuste. Con su diseño de seis paneles, ofrece una estructura robusta y cómoda. La visera plana proporciona sombra y estilo al mismo tiempo, y la correa ajustable en la parte trasera te permite personalizar el ajuste para tu comodidad.", "Esta gorra snapback de Limbo Hats es una elección excepcional para aquellos que buscan una declaración de moda llamativa y original. Ya sea que la uses para resaltar en un evento especial o como un accesorio distintivo en tu atuendo diario, esta gorra amarilla y negra con el aplique de calavera skull es la elección perfecta para destacar con estilo."]
    },
    {
        id: "7",
        name: "Snap Gato",
        description: "Gorra Snap Gato Color Negro",
        color: "Negro",
        stock: 20,
        price: 30,
        img: 'snap gato grande negro.jpg',
        category: 'snap',
        detailDescription: ["Esta gorra snapback de Limbo Hats en un clásico color negro es un tributo a la elegancia atemporal. El negro es un tono versátil que combina con cualquier estilo, y en esta gorra se combina con un toque de diversión y ternura a través de un parche en forma de la cara de un gato.", "En la parte frontal de la gorra, destaca un parche de la cara de un gato, con sus ojos y orejas característicos. El diseño del gato agrega un toque lúdico y adorable a tu apariencia, mostrando tu amor por estos felinos encantadores.", "La gorra snapback es conocida por su estilo icónico y su capacidad de ajuste. Con su diseño de seis paneles, ofrece una estructura robusta que se adapta cómodamente a la forma de tu cabeza. La visera plana proporciona sombra y un toque de estilo adicional.", "Ya sea que seas un amante de los gatos o simplemente quieras agregar un toque de ternura a tu atuendo diario, esta gorra negra de Limbo Hats con el parche de la cara de un gato es una elección perfecta. Combina la elegancia con la expresión de tu pasión en un accesorio de alta calidad que te hará destacar en cualquier ocasión."]
    },
    {
        id: "8",
        name: "Snap Gato",
        description: "Gorra Snap Gato Color Rojo",
        color: "Rojo",
        stock: 20,
        price: 30,
        img: 'snap gato rojo.jpg',
        category: 'snap',
        detailDescription: ["Esta vibrante gorra snapback de Limbo Hats en un audaz tono rojo es una declaración de estilo que no pasa desapercibida. El rojo es un color llamativo y lleno de energía, y en esta gorra se combina con la adorable y simpática cara de un gato.", "En la parte frontal de la gorra, destaca un parche de la cara de un gato con sus características faciales características. Este parche de gato agrega un toque de ternura y diversión a tu apariencia, mostrando tu amor por estos adorables felinos.", "La gorra snapback es conocida por su estilo icónico y su capacidad de ajuste. Con su diseño de seis paneles, ofrece una estructura robusta y cómoda que se adapta a la forma de tu cabeza. La visera plana proporciona sombra y un toque de estilo adicional.", "Ya sea que seas un amante de los gatos o simplemente quieras destacar con un toque de vitalidad y alegría en tu atuendo diario, esta gorra roja de Limbo Hats con el parche de la cara de un gato es una elección excepcional. Combina la energía del rojo con la expresión de tu pasión en un accesorio de alta calidad que te hará destacar en cualquier ocasión."]
    },
    {
        id: "9",
        name: "Snap IPA",
        description: "Gorra Snap IPA color Verde",
        color: "Verde",
        stock: 20,
        price: 30,
        img: 'snap ipa verde.jpg',
        category: 'snap',
        detailDescription: ["Esta llamativa gorra snapback de Limbo Hats en un audaz tono de verde es la elección perfecta para los amantes de la cerveza IPA. El verde evoca la frescura de los ingredientes naturales, y en esta gorra se combina con elementos relacionados con la cerveza IPA.", "En la parte frontal de la gorra, destaca un diseño relacionado con la cerveza IPA, como un lúpulo o una etiqueta de cerveza. Este diseño rinde homenaje a la pasión por las cervezas artesanales y la IPA en particular.", "La gorra snapback es conocida por su estilo clásico y su capacidad de ajuste. Con su diseño de seis paneles, ofrece una estructura robusta y cómoda. La visera plana proporciona sombra y un toque de estilo adicional, y la correa ajustable en la parte trasera te permite personalizar el ajuste según tu comodidad.", "Esta gorra verde de Limbo Hats con el diseño relacionado con la cerveza IPA es la elección ideal para los amantes de la cerveza artesanal que desean mostrar su pasión y estilo. Ya sea que la uses para resaltar en un evento cervecero o simplemente como un accesorio distintivo en tu atuendo diario, esta gorra te proporciona un toque de originalidad y calidad en un solo accesorio. ¡Es perfecta para los amantes de la cerveza y la moda!"]
    },
    {
        id: "10",
        name: "Snap Limbo",
        description: "Gorra Snap Limbo Color Blanco",
        color: "Blanco",
        stock: 20,
        price: 30,
        img: 'snap lmb arg blanco.jpg',
        category: 'snap',
        detailDescription: ["Esta elegante gorra snapback de Limbo Hats es la elección perfecta para los amantes del estilo y la comodidad. Confeccionada en un blanco limpio y nítido, esta gorra presenta un diseño minimalista que combina a la perfección con cualquier atuendo.", "En el frente de la gorra, destaca el distintivo logo de Limbo Argentina, un sello de calidad que representa la excelencia de esta marca. El logo está bordado con precisión y atención al detalle en tonos que resaltan sobre el fondo blanco, añadiendo un toque de sofisticación y originalidad", "La gorra snapback te permite ajustarla a tu medida con facilidad, garantizando un ajuste cómodo y seguro. Su diseño de seis paneles ofrece una estructura robusta que se adapta a la forma de tu cabeza, brindándote la combinación perfecta de estilo y confort.", "Ya sea que desees dar un toque de moda a tu conjunto diario o mostrar tu apoyo a Limbo Argentina, esta gorra snapback blanca es una elección inmejorable. Combina la elegancia y la identidad de marca en un solo accesorio, perfecto para lucir en cualquier ocasión."]
    },
    {
        id: "11",
        name: "Trucker Maradona",
        description: "Gorra Trucker Maradona Color Negro",
        color: "Negro",
        stock: 20,
        price: 30,
        img: 'trucker 10 gris.jpg',
        category: 'trucker',
        detailDescription: ["Esta gorra trucker de Limbo Hats es una verdadera joya para los fanáticos del fútbol y, en particular, para los admiradores del legendario Diego Armando Maradona. Confeccionada en un hermoso color gris gaspeado, esta gorra captura la esencia del fútbol y la pasión que Maradona inspiró en todo el mundo.", "En la parte frontal de la gorra, se destaca un parche con el número 10, el icónico número de camiseta que Maradona llevó en su carrera. El número 10 se presenta con un estilo audaz y elegante que rinde homenaje al legado del gran futbolista argentino.", "Justo al lado del parche del número 10 se encuentra la firma de Diego Armando Maradona, que está bordada con precisión y atención al detalle. La firma añade un toque de autenticidad y nostalgia a la gorra, recordándonos la huella indeleble que Maradona dejó en el mundo del fútbol.", "El diseño trucker de la gorra incluye una parte trasera de malla que proporciona transpirabilidad y comodidad en los días más calurosos. La visera curvada ofrece protección contra el sol y un estilo clásico."]
    },
    {
        id: "12",
        name: "Trucker Trece",
        description: "Gorra Trucker Trece Color Negro",
        color: "Negro",
        stock: 20,
        price: 30,
        img: 'trucker 13 negro.jpg',
        category: 'trucker',
        detailDescription: ["Esta gorra trucker de Limbo Hats en un elegante tono negro es un accesorio que combina estilo y misterio. El negro es un color atemporal que se combina perfectamente con el parche del número 13, añadiendo un toque intrigante a tu apariencia.", "El parche del número 13 se encuentra en la parte frontal de la gorra y está diseñado con precisión y atención al detalle. Este número, a menudo asociado con la suerte o la mala suerte, agrega un elemento de misterio y superstición a tu estilo.", "El diseño trucker de la gorra incluye una parte trasera de malla que proporciona transpirabilidad y comodidad en los días más calurosos. La visera curvada ofrece protección contra el sol y un toque de estilo clásico.", "Ya sea que quieras añadir un toque enigmático a tu atuendo diario o destacar con estilo en un evento especial, esta gorra trucker negra de Limbo Hats con el parche del número 13 es una elección excepcional. Combina elegancia con un toque de misterio en un accesorio de alta calidad que te hará destacar en cualquier ocasión. ¡Es la elección perfecta para aquellos que buscan un estilo distintivo y enigmático!"]
    },
    {
        id: "13",
        name: "Trucker Flor",
        description: "Gorra Trucker Flor Color Negro",
        color: "Negro",
        stock: 20,
        price: 30,
        img: 'trucker flor negro.jpg',
        category: 'trucker',
        detailDescription: ["Esta gorra trucker de Limbo Hats en un clásico tono negro es una elección que combina la elegancia y la naturaleza en un solo accesorio. El negro es un color versátil que se presta perfectamente para resaltar el hermoso parche de la flor tradi.", "En la parte frontal de la gorra, destaca un parche de una flor tradi meticulosamente diseñada. La flor tradi se presenta con detalles que capturan su belleza y delicadeza, creando un contraste impresionante con el fondo negro.", "El diseño trucker de la gorra incluye una parte trasera de malla que proporciona transpirabilidad y comodidad en los días más calurosos. La visera curvada no solo ofrece protección contra el sol, sino que también añade un toque de estilo clásico.", "Ya sea que desees agregar un toque de naturaleza y elegancia a tu atuendo diario o simplemente quieras destacar en un evento especial, esta gorra trucker negra de Limbo Hats con el parche de la flor tradi es una elección excepcional. Combina la sofisticación con la belleza natural en un accesorio de alta calidad que te hará destacar en cualquier ocasión. ¡Es la elección perfecta para los amantes de la moda y la naturaleza!"]
    },
    {
        id: "14",
        name: "Trucker Limbo",
        description: "Gorra Trucker Limbo Color Verde",
        color: "Verde",
        stock: 20,
        price: 30,
        img: 'trucker limbo verde.jpg',
        category: 'trucker',
        detailDescription: ["Esta gorra trucker de Limbo Hats en un llamativo tono de verde es una elección audaz y distintiva. El verde evoca la frescura y la vitalidad, y en esta gorra se combina con un parche que presenta una calavera con una gorra de Limbo, lo que agrega un toque de originalidad y actitud a tu apariencia.", "El parche de la calavera con la gorra de Limbo se encuentra en la parte frontal de la gorra y está diseñado con precisión. La calavera, con su gorra de Limbo, crea una imagen intrigante y única que captura la esencia de la marca.", "El diseño trucker de la gorra incluye una parte trasera de malla que proporciona transpirabilidad y comodidad en los días más calurosos. La visera curvada ofrece protección contra el sol y un toque de estilo clásico.", "Ya sea que desees destacar con un estilo llamativo y original en un evento especial o simplemente quieras mostrar tu lealtad a la marca Limbo Hats, esta gorra trucker verde con el parche de la calavera con la gorra de Limbo es una elección excepcional. Combina la frescura con la actitud en un accesorio de alta calidad que te hará destacar en cualquier ocasión. ¡Es la elección perfecta para los amantes de la moda y la marca Limbo!"]
    },
    {
        id: "15",
        name: "Trucker Limbo",
        description: "Gorra Trucker Limbo Color Negro",
        color: "Negro",
        stock: 20,
        price: 30,
        img: 'truker lmb negro.jpg',
        category: 'trucker',
        detailDescription: ["Esta gorra trucker de Limbo Hats en un elegante tono negro es un accesorio que combina estilo y misterio. El negro es un color atemporal que se combina perfectamente con el parche del número 13, añadiendo un toque intrigante a tu apariencia.", "El parche del número 13 se encuentra en la parte frontal de la gorra y está diseñado con precisión y atención al detalle. Este número, a menudo asociado con la suerte o la mala suerte, agrega un elemento de misterio y superstición a tu estilo.", "El diseño trucker de la gorra incluye una parte trasera de malla que proporciona transpirabilidad y comodidad en los días más calurosos. La visera curvada ofrece protección contra el sol y un toque de estilo clásico.", "Ya sea que quieras añadir un toque enigmático a tu atuendo diario o destacar con estilo en un evento especial, esta gorra trucker negra de Limbo Hats con el parche del número 13 es una elección excepcional. Combina elegancia con un toque de misterio en un accesorio de alta calidad que te hará destacar en cualquier ocasión. ¡Es la elección perfecta para aquellos que buscan un estilo distintivo y enigmático!"]
    },
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const product = products.find((p) => p.id === id);
            
            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000)
    })
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            const productsFiltered = category
                ? products.filter(product => product.category === category)
                : products
            
            resolve(productsFiltered);

        }, 2000);
    });
};

