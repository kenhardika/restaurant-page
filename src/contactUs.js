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

    layerLeft.append('this is the forms');
    layerRight.append(
        createContactP('telephone', '+62-9928669'),
        createContactP('envelope', 'theratatoule@rest.com')
    );
    
    layer.append(layerLeft, layerRight)
    return layer;
}


function createContactP( icon, text ){
    const layer = document.createElement('div');
    const img = document.createElement('img');
    const tex = document.createElement('p');

    layer.className='contactDiv';

    img.className='contactImg';
    img.src=`/img/${icon}.svg`;
    img.style.backgroundColor='transparent';
    tex.className='contactText';
    tex.textContent=`${text}`;
    tex.style.backgroundColor='transparent';

    layer.append(img, tex);
    return layer;
}

export default openContactUs