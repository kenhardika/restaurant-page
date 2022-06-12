import { removeAllChildNodes } from "./menu";

function openLocation(){
    console.log('opened Location');
    const main = document.querySelector('.main');
    removeAllChildNodes(main);

    const title = document.createElement('div');
        title.textContent='Our Location';
        title.className='titleLocation';
    main.append(title, createLocation());

}

function createLocation() {
    const locationLayer = document.createElement('div');
    const iframeMaps = document.createElement('iframe');

    iframeMaps.className='locationMaps';
    locationLayer.className='locationLayer';

    iframeMaps.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.430115749213!2d7.28728590774934!3d43.7108015188692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddbe15426d6e7%3A0x3b0782f73b249e3a!2sKFC%20Nice%20Riquier!5e0!3m2!1sen!2sid!4v1654993971435!5m2!1sen!2sid'
    iframeMaps.allowFullscreen='1';
    iframeMaps.loading='lazy';
    iframeMaps.referrerPolicy='no-referrer-when-downgrade';

    locationLayer.append(iframeMaps);

    return locationLayer
}

export default openLocation