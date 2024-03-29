import React from 'react';

function BasketItem({ id, title, image, price, quantity, removeItemFromBasket }) {
    return (
        <div className="basketItem">
            <img src={image} alt={title} className="basketItem_image" />
            <div className="basketItem_info">
                <p className="basketItem_title">{title}</p>
                <p className="basketItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem_quantity">
                    <label htmlFor={`quantity_${id}`}>Qty:</label>
                    <input type="number" id={`quantity_${id}`} name="quantity" min="1" defaultValue={quantity} />
                </div>
                <button onClick={() => removeItemFromBasket(id)}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default BasketItem;