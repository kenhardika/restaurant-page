import './style.css';
import saySomething from './printText.js';
import { head } from 'lodash';
import logoRestaurant from '../components/img/logo_square.png'
import { openMenu, removeAllChildNodes } from './menu';

function onLoadLayer() {
    const header = document.createElement('div');
    const content = document.createElement('div');
    const footer = document.createElement('div');
    const credit = document.createElement('div');
    const container = document.createElement('div');

    header.className='header';
    content.className='content';
    footer.className='footer';
    credit.className='credit';
    container.className='container';

    container.append(header, content, footer, credit);
    document.body.append(container);
}

function sliderHeader() {

    const header = document.querySelector('.header');
    const slider = document.createElement('div');
    const layerHeader = document.createElement('div');
    const nameHeader = document.createElement('p');
    const theHeader = document.createElement('p');
    const underHeader = document.createElement('p');

    theHeader.className='theHeader';
    nameHeader.className='nameHeader';
    underHeader.className='underHeader';
    theHeader.textContent = 'THE';
    nameHeader.textContent = 'Rat-A-Toulé';
    underHeader.textContent = 'Authentic French Cuisine since 1996';
    layerHeader.className='layerHeader';
    slider.className='sliderHeader';


    layerHeader.append(theHeader,nameHeader, underHeader);
    slider.append(layerHeader);
    header.append(slider);
}

function contentButtons() {

    const contentLayer = document.querySelector('.content');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const locationBtn = document.createElement('button');
    const contactUsBtn = document.createElement('button');

    contentLayer.className='content';
    homeBtn.id='homeBtn';
    homeBtn.textContent='Home';
    menuBtn.id='menuBtn';
    menuBtn.textContent='Menu';
    locationBtn.id='locationBtn';
    locationBtn.textContent='Location';
    contactUsBtn.id='contactUsBtn';
    contactUsBtn.textContent='Contact Us';

    contentLayer.append(homeBtn,menuBtn,locationBtn,contactUsBtn);

    menuBtn.onclick = () => { 
        openMenu();
    }
    homeBtn.onclick = () => {
        videoFooter();
    }

}

function videoFooter(){
    const footer = document.querySelector('.footer');
    removeAllChildNodes(footer);
    
    const videoBg = document.createElement('iframe');
    const layerFooter = document.createElement('div');
    const layerText = document.createElement('div');
    const textOverlayCaption = document.createElement('p');
    const textOverlayPara = document.createElement('p');
    const textOverlayRegards =document.createElement('p');

    layerText.className='layerText';
    textOverlayCaption.className='textOverlayCaption';
    textOverlayPara.className='textOverlayPara';
    textOverlayCaption.textContent='Loved, Authentic, Grand';
    textOverlayPara.textContent='Acquire the taste of greatness through our passionate gourmet, fullfill your desire with our authentic french cuisine from the bottom of ocean to the highest sky on earth. We provide you extra careness in our craftmanship, from Ethical Hunting to Organic Food. Halal with certificates provided.'
    textOverlayRegards.className = 'textOverlayRegards';
    textOverlayRegards.textContent = 'Regards, The Rat-A-Toulé Team';
    layerFooter.className = 'layerFooter';
    videoBg.className='videoBg';
    videoBg.allowFullscreen='1';
    videoBg.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoBg.src=`https://www.youtube.com/embed/yR076KE_Fb4?controls=0&playlist=yR076KE_Fb4&loop=1&autoplay=1&mute=1&modestbranding=1&frameborder=0&iv_load_policy=3`;
    
    layerText.append(textOverlayCaption, textOverlayPara, textOverlayRegards);
    layerFooter.appendChild(layerText);
    footer.append(videoBg, layerFooter);   
}

function popUpModal(){

    const backgroundLayer = document.createElement('div');
    const logo = new Image();
    const logoDiv = document.createElement('div');
    const notesDiv = document.createElement('div');
    const notes = document.createElement('p');

    logo.src = logoRestaurant;
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
    sliderHeader();
    contentButtons();
    videoFooter();
    callRestaurantName();
}

export default animateAppear