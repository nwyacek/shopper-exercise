import React from 'react';
import PropTypes from 'prop-types';
import '../css/ItemPage.css';
import Item from '../components/Item';

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id}>
                    <Item
                        item={item}
                        onAddToCart={onAddToCart.bind(null, item)}
                     />
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