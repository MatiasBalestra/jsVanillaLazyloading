/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const maximum = 122;
const minimun = 1;
const random = () => Math.floor(Math.random() * (maximum - minimun)) + minimun;
import { registerImage } from "./lazy";


const createImageNode = () => {

    const container = document.createElement('div');
    container.className = 'p-4';


    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; // TODO

    container.appendChild(imagen);


    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');
const imagenesAgregar = [];

const accion = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};


addButton.addEventListener("click", accion);


