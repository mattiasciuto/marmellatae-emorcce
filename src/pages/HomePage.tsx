import React from 'react';
import ProductItem from '../components/ProductItem.tsx';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface HomePageProps {
    products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => (
    <div className="home-page">
        <h2>Benvenuti nel nostro negozio di marmellate!</h2>
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default HomePage;
