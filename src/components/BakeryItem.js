// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";
import { useState } from "react";


export default function BakeryItem({name, price, description, image, total, cart, setTotal, setCart}) {

    // const name = props.name;
    // const description = props.description;
    // const price = props.price;
    // const image = props.image;


	return (

        <div class="border">
            <h4>
                <img src={image} width="500rem"/>
            </h4>
            <h4>
                {name}
            </h4>
            <h5>
                {description}
            </h5>
            <h5>
                {price}
            </h5>

            <button onClick={() => {
                    setTotal(total + price) 
                    setCart([...cart, name])
                }
            }>Add to cart!</button>

        </div>


	);
}

