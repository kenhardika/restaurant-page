import { create } from "lodash";
import { removeAllChildNodes } from "./menu";

function openContactUs() {
    console.log('openMenu');

    const main = document.querySelector('.main');
    removeAllChildNodes(main);

    const title = document.createElement('div');
        title.textContent='Contact Us';
        title.className='titleContact';
    main.append(title, createContactUs());
}

function createContactUs(){
    const layer = document.createElement('div');
    const layerRight = document.createElement('div');
    const layerLeft = document.createElement('div');

    layerRight.className='layerRightContact';
    layerLeft.className='layerLeftContact';

    layer.className='layerContactUs';
    layerLeft.append(
        createCaptionDivForms(),
        createDivForms()
    );
    layerRight.append(
        createContactP('telephone', '+62-9928-6698'),
        createContactP('envelope', 'theratatoule@rest.com'),
        createContactP('clock', 'Open Everyday 08:00-22:00')
    );
    
    layer.append(layerLeft, layerRight);
    return layer;
}

function createCaptionDivForms(){
    const layerCap = document.createElement('div');
    layerCap.className='layerCaptionContact';
    layerCap.textContent='Send us a Message!';
    return layerCap;
}

function createDivForms() {
    const layerForm = document.createElement('form')
    layerForm.className='layerForms';
    layerForm.append(
        createForms('text', 'Your Name'), 
        createForms('email', 'Your Email'),
        createForms('text', 'Your Message'),
        createButton('Submit')
        );
    return layerForm
}

function createForms(inputType, inputName){
    const inputForms = document.createElement('input');

    inputForms.name=`${inputName}`;
    inputForms.type=`${inputType}`;
    inputForms.placeholder=`${inputName}`;

    return inputForms;
}

function createButton(name){
    const button = document.createElement('button');
    button.id = 'submitContactUsBtn';
    button.textContent = `${name}`;

    return button;
}

function createContactP( icon, text ){
    const layer = document.createElement('div');
    const img = document.createElement('img');
    const tex = document.createElement('p');

    layer.className='contactDiv';

    img.className='contactImg';
    img.src= `./img/${icon}.svg`;
    img.style.backgroundColor='transparent';
    img.style.width='20px'
    tex.className='contactText';
    tex.textContent=`${text}`;
    tex.style.backgroundColor='transparent';

    layer.append(img, tex);
    return layer;
}

export default openContactUs