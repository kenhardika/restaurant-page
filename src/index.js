import './style.css';
import saySomething from './printText.js';
import { head } from 'lodash';
import logoRestaurant from '../components/img/logo_square.png'

function onLoadLayer() {
    const header = document.createElement('div');
    const content = document.createElement('div');
    const footer = document.createElement('div');
    const container = document.createElement('div');

    header.className='header';
    content.className='content';
    footer.className='footer';
    container.className='container';

    header.textContent='this is the header';
    content.textContent='this is the content';
    footer.textContent='this is the footer';

    container.append(header, content, footer);
    document.body.append(container);
}

function popUpModal(){

    const backgroundLayer = document.createElement('div');
    const logo = new Image();
        logo.src = logoRestaurant;
    const logoDiv = document.createElement('div');
    const notesDiv = document.createElement('div');
    const notes = document.createElement('p');

    logoDiv.className='logoDiv';
    backgroundLayer.className='backgroundLayer';
    notesDiv.className='notesDiv';
    notes.className='notes';
    notes.textContent='click to proceed';
    
    notesDiv.append(notes);
    logoDiv.append(logo);
    backgroundLayer.append(logoDiv,notesDiv);

    document.body.append(backgroundLayer);
    backgroundLayer.onclick = ()=> {
        animateRotate(logoDiv);
        setTimeout(animateDisappear(backgroundLayer), 1000);
        removeLayer(backgroundLayer);
    } 
    function noteAppear(divs) {
        animateAppear(divs);
    }

    setTimeout( ()=> {noteAppear(notes)}, 2000);
}

function callRestaurantName() {
    console.log('Welcome to The Rat-a-Toule');
    saySomething();
}

function animateRotate(divs){
    divs.classList.add('rotateDivs');
}

function animateAppear(divs){
    divs.classList.add('appearDivs');
}

function animateDisappear(divs){
    divs.classList.add('disappearDivs');
}

function removeLayer(divs){
    setTimeout(()=> {divs.parentNode.removeChild(divs)},500);
}

window.onload =()=> {
    onLoadLayer();
    popUpModal();
    callRestaurantName();
}