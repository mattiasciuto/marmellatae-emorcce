import React from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface CartPageProps {
    cartItems: Product[];
    removeFromCart: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart }) => (
    <div className="cart-page">
        <h2>Carrello</h2>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-image" />
                    <span>{item.name} - €{item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>Rimuovi</button>
                </li>
            ))}
        </ul>
    </div>
);

export default CartPage;
