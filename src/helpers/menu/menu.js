import fishMawn from './images/fishMaw.png';
import prawn from './images/prawn.png';
import premiumFillet from './images/premiumFillet.png';
import pumpkinSoup from './images/pumpkinSoup.png';
import steakRosemary from './images/steakRosemary.png';
import wine from './images/wine.png';

const menuItems = [
    // starters
    {
        dish: 'Cucumber Salad',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 18,
        category: 'starters',
        main: true,
        id: 3
    },

    {
        dish: 'Grilled Okra and Tomatoes ',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 20,
        category: 'starters',
        main: false,
        id: 5
    },

    {
        dish: ' Basil Pancakes',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 12,
        category: 'starters',
        main: false,
        id: 6
    },
    // mains
    
    {
        dish: 'Deep Sea Snow White Cod Fillet',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 20,
        category: 'mains',
        main: true,
        id: 1
    },

    {
        dish: 'Steak With Rosemary Butter',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 22,
        category: 'mains',
        main: true,
        id: 2
    },

    {
        dish: 'Steaks with Grilled Kimchi',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 20,
        category: 'mains',
        main: false,
        id: 7
    },

    
    // Pastries & Drinks
    {
        dish: 'Natural Wine Pairing',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 168,
        category: 'drinks',
        main: true,
        id: 4
    },

    {
        dish: 'Wine Pairing',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 158,
        category: 'drinks',
        main: false,
        id: 8
    },


    {
        dish: 'Whisky Flyer',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'drinks',
        main: false,
        id: 9
    },

    // portfolio
    {
        dish: 'Premium Deep Sea Snow White Cod Fillet',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: premiumFillet,
        id: 10
    },

    {
        dish: 'Option of natural wine available',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: wine,
        id: 11
    },

    {
        dish: 'Best pumpkin for pumpkin soup',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: pumpkinSoup,
        id: 12
    },

    {
        dish: 'Strip Steak With Rosemary Butter',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: steakRosemary,
        id: 13
    },

    {
        dish: 'Braised Sliced Abalone,Fish Maw with Premium Seafood',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: fishMawn,
        id: 14
    },

    {
        dish: 'Pan Fried Live Prawn with Superior Soy Sauce',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        price: 90,
        category: 'portfolio',
        main: false,
        img: prawn,
        id: 15
    }



]

export {menuItems}