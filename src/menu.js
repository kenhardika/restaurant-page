import animateAppear from ".";
// import foodCassoulet from '../components/img/food-Cassoulet.jpg';
// import foodFilet from '../components/img/food-filetmignon.jpg';
// import foodChoco from '../components/img/food-Chocolate-soufflé.jpeg';
// import foodConfit from '../components/img/food-Confit-de-canard.jpg';
// import foodCoq from '../components/img/food-coq-au-vin.jpg';
// import foodFlamiche from '../components/img/food-Flamiche.jpg';
// import foodRat from '../components/img/food-Ratatoullie.jpg';
// import foodSalad from '../components/img/food-Salade-Niçoise.jpg';
// import foodSoup from '../components/img/food-soup-oignon.jpeg';


function openMenu() {
    console.log('Open Menu');
    const footer = document.querySelector('.footer');
    
    removeAllChildNodes(footer);

    //showMenu();
    //menuLayer.append(listOfMenu());
    
    footer.append(appendListOfMenu());
}

function appendListOfMenu(){
    const menuLayer = document.createElement('div');
        menuLayer.className='menuLayer';    
    menuLayer.append(
        createMenu('Cassoulet', 'Baked Beans, Marinated Chicken, Special Sauces', '$20'), 
        createMenu('Chocolate Soufflé', 'Molten Chocolate, Dark Northern Sugar, Happy Powder', '$16'),
        createMenu('Confit de Canard', 'Roasted Duck Legs, Baked Peas, Herbal Seasoning', '$23'),
        createMenu('Coq au Vin', 'Marinated Chicken Filet, French Curry Sauces, Fresh Veggies', '$26'),
        createMenu('Filet Mignon', 'Roasted Beef, Marinated with Enak Sauces, Very Good', '$21' ),
        createMenu('Flamiche', 'Meat Pies, Cheese, and Minced Meat', '$18'),
        createMenu('Ratatoullie', 'Thin Vegetables Sliced and arranged like a Train, Good Movie Food', '$15'),
        createMenu('Salade Niçoise', 'Bunch of Salad, good for your health', '$12' ),
        createMenu('Soup Oignon', 'Zupa Zupa with a touch of Frenchness', '$12')
        );
    return menuLayer
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createMenu(name, desc, price){
    const menuList = document.createElement('div');
    const foodDiv = document.createElement('div');    
        const foodImg = document.createElement('img');
    const foodText = document.createElement('div');
        const foodCap = document.createElement('p');
        const foodDesc = document.createElement('p');
        const foodPrice = document.createElement('p');

    menuList.className='menuList';

    foodDiv.className='foodDiv';
        foodImg.src=`/img/food-${name}.jpg`;
        foodImg.className='foodImg';

    foodText.className='foodText';
        foodCap.textContent=`${name}`;
        foodDesc.textContent=`${desc}`;
        foodPrice.textContent=`${price}`;

    foodDiv.append(foodImg);
    foodText.append(foodCap,foodDesc, foodPrice);
    menuList.append(foodDiv, foodText);

    return menuList
}

export {openMenu, removeAllChildNodes}
