const bracelet = [
    {
        id: 1,
        name: "Piedra Volcanica",
        description: "Pulsera de Onix",
        stock: 15,
        precio: 2600,
        img: 'Piedra Volcanica.jpg'
    },
    {
        id: 2,
        name: "Espiga",
        description: "Pulsera Plana de Acero con Forma de Espiga",
        stock: 20,
        precio: 2900,
        img: 'Espiga Plana Acero.jpg'
    },
    {
        id: 3,
        name: "Acero Martillado",
        description: "Pulsera Acero Martillado",
        stock: 20,
        precio: 3300,
        img: 'Acero martillado.jpg'
    },
    {
        id: 4,
        name: "Acero Talle XL",
        description: "Pulsera de Acero Extra Grande",
        stock: 20,
        precio: 3600,
        img: 'Acero talle XL.jpg'
    },
    {
        id: 5,
        name: "Acero Calavera",
        description: "Pulsera de Acero y Calavera",
        descriptionDetail: "Explora el lado audaz y vanguardista de la moda con nuestra pulsera de acero quirúrgico. Cada eslabón de cadena gruesa está meticulosamente diseñado para irradiar fuerza y estilo. Entre las cadenas, las intrincadas calaveras añaden un toque de misterio y atrevimiento. Con una longitud de 20 cm, esta pulsera se adapta perfectamente a tu muñeca, y su cierre de gancho en color plata asegura un ajuste seguro y cómodo. Ya sea que desees destacar en un evento especial o simplemente expresar tu individualidad cotidiana, esta pulsera es una elección que fusiona calidad, diseño y actitud. Atrévete a mostrar tu pasión por la moda con nuestra pulsera de acero quirúrgico de cadena gruesa con calaveras. Es más que una simple pulsera; es una declaración de estilo que encarna la fusión entre la robustez del acero y la expresión artística de las calaveras.",
        stock: 20,
        precio: 3600,
        img: 'Acero.jpg'
    },
];

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        const opSuccesfull = true;

        setTimeout(() => {
            if (opSuccesfull) {
                resolve({
                    products: bracelet,
                });
            } else {
                reject({
                    mensaje: "La operacion no fue exitosa",
                });
            }
        }, 3000);
    });
};