import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductPageProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, addToCart }) => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === parseInt(id!));

    if (!product) {
        return <div>Prodotto non trovato!</div>;
    }

    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>€{product.price}</p>
            <button onClick={() => addToCart(product)}>Aggiungi al Carrello</button>
        </div>
    );
};

export default ProductPage;
