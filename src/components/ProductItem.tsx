import React from 'react';
import { Link } from 'react-router-dom';
import RoundedButton from './RoundedButton';
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductItemProps {
    product: Product;
    addToCart: (product: Product) => void;
    
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => (
 
    <Link to={`/product/${product.id}`} className="details-link">
    <div className="product-item">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>€{product.price}</p>
    </div>
    </Link>
    // <button onClick={() => addToCart(product)}>Aggiungi al Carrello</button>

);
    {/* <RoundedButton label='ciao' icon='' onClick={} />    */}
export default ProductItem;
