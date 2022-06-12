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
    
    layer.className='layerContact';

}

export default openContactUs