import React from 'react';
import { useState, useEffect } from 'react';
import BurgerGrid from "./BurgerGrid.jsx";
import Cart from './Cart.jsx';



export default function MenuList({ handleClick }) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/menu')
            .then(response => response.json())
            .then(data => setMenu(data));
    }, []);

    const burgers = menu.map(item => ({ name: item.name, description: item.description, image: item.img, price: item.price }));

    return (
        <>
            <BurgerGrid burgers={burgers} handleClick={handleClick} />
        </>
    );
}