import animateAppear from ".";
import foodCassoulet from '../components/img/food-Cassoulet.jpg';
import foodFilet from '../components/img/food-filetmignon.jpg'

function openMenu() {
    console.log('Open Menu');
    const footer = document.querySelector('.footer');
    removeAllChildNodes(footer);
    showMenu()
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function showMenu() {
    console.log('this is will show th emenu')
    const footer = document.querySelector('.footer');
    const menuLayer = document.createElement('div');
    const menuOne = document.createElement('div');
    const menuOnePic = document.createElement('img');
    const menuOneCap = document.createElement('p');


    menuOne.className='menuList';
    menuOneCap.className= 'menuText';
    menuOnePic.className='menuImg';
    menuLayer.className='menuLayer';

    menuOneCap.textContent ='Fillet Mignon with Buttery Souffle Cake Complementary';
    menuOnePic.src=foodFilet;

    menuOne.append(menuOnePic, menuOneCap);
    menuLayer.append(menuOne);
    footer.append(menuLayer);
}

export {openMenu, removeAllChildNodes}
