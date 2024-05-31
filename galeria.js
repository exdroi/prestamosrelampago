const categorias = ['Consola','Televisión','Telefonia','Electrodomesticos','Tablet']
const marca = [
    [
        'NINTENDO','XBOX','SONY',
    ],
    [
        'HISENSE'
    ]
    ,
    [
        'APPLE','HONOR','MOTOROLA','SAMSUNG'
    ],
    [
        'HISENSE'
    ],
    [
        'HONOR'
    ]
]

const productos = [
    {
      nombre: "Barra de sonido HISENSE 3.1.2",
        categoria:categorias[3],
        marca: marca[3][0],
        precio: "359",
        imagen: "img/productos/barrahisense.jpg"
    },
    {
        nombre: "HONOR Pad X9",
        categoria:categorias[4],
        marca: marca[4][0],
        precio: "240",
        imagen: "img/productos/honorpadx9.jpg"
    },
    {
        nombre: "HONOR X6a",
        categoria:categorias[2],
        marca: marca[2][1],
        precio: "176",
        imagen: "img/productos/honorx6a.jpg"
    },
    {
        nombre: "HONOR X7b",
        categoria:categorias[2],
        marca: marca[2][1],
        precio: "240",
        imagen: "img/productos/honorx7b.jpg"
    },
    {
        nombre: "HONOR X8b",
        categoria:categorias[2],
        marca: marca[2][1],
        precio: "320",
        imagen: "img/productos/honorx8b.jpg"
    },
    {
        nombre: "iPhone 11",
        categoria:categorias[2],
        marca: marca[2][0],
        precio: "399",
        imagen: "img/productos/iphone11.jpg"
    },
    {
        nombre: "MOTOROLA E22i",
        categoria:categorias[2],
        marca: marca[2][2],
        precio: "399",
        imagen: "img/productos/motoe22i.jpg"
    },
    {
        nombre: "MOTOROLA G14",
        categoria:categorias[2],
        marca: marca[2][2],
        precio: "180",
        imagen: "img/productos/motog14.jpg"
    },
    {
        nombre: "MOTOROLA G52",
        categoria:categorias[2],
        marca: marca[2][2],
        precio: "240",
        imagen: "img/productos/motog52.jpg"
    },
    {
        nombre: "MOTOROLA G72",
        categoria:categorias[2],
        marca: marca[2][2],
        precio: "272",
        imagen: "img/productos/motog72.jpg"
    },
    {
        nombre: "PlayStation 5 Spider Digital",
        categoria:categorias[0],
        marca: marca[0][2],
        precio: "619",
        imagen: "img/productos/ps4sp.jpg"
    },
    {
        nombre: "PlayStation 5 Digital",
        categoria:categorias[0],
        marca: marca[0][2],
        precio: "499",
        imagen: "img/productos/ps5.jpg"
    },
    {
        nombre: "SAMSUNG A05",
        categoria:categorias[2],
        marca: marca[2][3],
        precio: "150",
        imagen: "img/productos/samsunga05.jpg"
    },
    {
        nombre: "SAMSUNG A14",
        categoria:categorias[2],
        marca: marca[2][3],
        precio: "160",
        imagen: "img/productos/samsunga14.jpg"
    },
    {
        nombre: "SAMSUNG A15",
        categoria:categorias[2],
        marca: marca[2][3],
        precio: "192",
        imagen: "img/productos/samsunga15.jpg"
    },
    {
        nombre: "SAMSUNG A24",
        categoria:categorias[2],
        marca: marca[2][3],
        precio: "200",
        imagen: "img/productos/samsunga24.jpg"
    },
    {
        nombre: "Switch OLED Mario",
        categoria:categorias[0],
        marca: marca[0][0],
        precio: "312",
        imagen: "img/productos/switchom.jpg"
    },
    {
        nombre: "Switch Lite",
        categoria:categorias[0],
        marca: marca[0][0],
        precio: "220",
        imagen: "img/productos/switchlite.jpg"
    },
    {
        nombre: 'HISENSE Smart TV 32"',
        categoria:categorias[1],
        marca: marca[1][0],
        precio: "160",
        imagen: "img/productos/tv32hisense.jpg"
    },
    {
        nombre: 'HISENSE Smart TV 43"',
        categoria:categorias[1],
        marca: marca[1][0],
        precio: "240",
        imagen: "img/productos/tv43hisense.jpg"
    },
    {
        nombre: 'HISENSE Smart TV 55"',
        categoria:categorias[1],
        marca: marca[1][0],
        precio: "407",
        imagen: "img/productos/tv55hisense.jpg"
    },
    {
        nombre: 'HISENSE Smart TV 65"',
        categoria:categorias[1],
        marca: marca[1][0],
        precio: "479",
        imagen: "img/productos/tv65hisense.jpg"
    },
    {
        nombre: "XBOX Series S",
        categoria:categorias[0],
        marca: marca[0][1],
        precio: "300",
        imagen: "img/productos/xboxss.jpg"
    },
    {
        nombre: "XBOX Series X",
        categoria:categorias[0],
        marca: marca[0][1],
        precio: "439",
        imagen: "img/productos/xboxsx.jpg"
    },
]

let galeria = document.getElementById("galleria");

window.onload=mostrarproductos();


function mostrarproductos(){
        productos.forEach(productos=>{

            const tarjeta = document.createElement("div");
            tarjeta.classList.add("card")

            const imagen = document.createElement('img');
            imagen.src=productos.imagen; tarjeta.dataset.imagen=productos.imagen;
            tarjeta.appendChild(imagen);

            const titulo =    document.createElement('h3');
            titulo.innerHTML = productos.nombre;
            tarjeta.appendChild(titulo);

            const categoria =    document.createElement('h4');
            categoria.innerHTML = productos.categoria;
            tarjeta.appendChild(categoria);

            const marca =    document.createElement('h4');
            marca.innerHTML = productos.marca;
            marca.classList.add("marca");
            tarjeta.appendChild(marca);

            const precio =    document.createElement('p');
            precio.innerHTML = `$${productos.precio}/sem`;
            tarjeta.appendChild(precio);

            const boton = document.createElement('button');
            boton.dataset.img = productos.imagen;
            boton.innerHTML='Ampliar';
            tarjeta.appendChild(boton);

            boton.addEventListener('click',completa);

            galeria.appendChild(tarjeta);
        });
}
const pantalla = document.getElementById('frame');

function completa(e){
    const boton =e.target;
    const img = document.getElementById('imagen')
    const cont = boton.dataset.img.valueOf();

    img.src = cont;
    pantalla.style.display='flex';
}

document.getElementById('span').addEventListener('click',function (){
    pantalla.style.display = 'none';
})