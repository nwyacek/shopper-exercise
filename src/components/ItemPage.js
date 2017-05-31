import React from 'react';
import PropTypes from 'prop-types';
import '../css/ItemPage.css';
import Item from '../components/Item';

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id}>
                    <Item item={item}>
                        <button className="Item-addToCart" onClick={onAddToCart.bind(null, item)}>
                            Add To Cart
                        </button>
                    </Item>
                </li>
            )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;