import animateAppear from ".";

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

    menuLayer.className='menuLayer';
    
    footer.append(menuLayer);
}

export {openMenu, removeAllChildNodes}
