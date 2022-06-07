import './style.css';
import saySomething from './printText.js'
import { head } from 'lodash';

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


function callRestaurantName() {
    console.log('Welcome to The Rat-a-Toule');
    saySomething();
}

window.onload =()=> {
    onLoadLayer();
    callRestaurantName();
}