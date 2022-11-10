import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <h1>Jeremy's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} total={total} cart={cart} setTotal={setTotal} setCart={setCart} />
      ))}

      

      <div>
        <h2>Cart</h2>
        <h3>{cart}</h3>
        <h3>Total: {total}</h3>
  
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
