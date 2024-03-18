import { useState } from "react";

export const Products = (props) => {
  const [prod1price, setProduct1price] = useState(props.price);
  const [cart, setCart] = useState(props.cartItems);

  const cartHandler1 = () => {
    setProduct1price(prod1price + 500);
    setCart(cart + 1);
    props.updatecp(prod1price, cart);

    return <></>;
  };
  const cartHandler2 = () => {
    setProduct1price(prod1price + 300);
    setCart(cart + 1);
    props.updatecp(prod1price, cart);
    return <></>;
  };
  const cartHandler3 = () => {
    setProduct1price(prod1price + 400);
    setCart(cart + 1);
    props.updatecp(prod1price, cart);
    return <></>;
  };
  return (
    <>
      <span className="circleCart" id="items">
        {props.cartItems}
      </span>
      <span className="price">Total Price : {props.price}</span>
      <div className="products">
        <div className="product">
          <h3>Product1</h3>
          <h4>
            Price: <span id="price1">500</span>
          </h4>

          <button onClick={cartHandler1}>Add to Cart</button>
        </div>
        <div className="product">
          <h3>Product2</h3>
          <h4>
            Price: <span id="price2">300</span>
          </h4>

          <button onClick={cartHandler2}>Add to Cart</button>
        </div>
        <div className="product">
          <h3>Product3</h3>
          <h4>
            Price: <span id="price3">400</span>
          </h4>

          <button onClick={cartHandler3}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
