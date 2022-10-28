import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({id, title, image, price, rating}) => {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to your Cart</button>
        </div>
    )
}

export default Product;