import React from 'react';
import ProductItem from './ProductItem.tsx';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
