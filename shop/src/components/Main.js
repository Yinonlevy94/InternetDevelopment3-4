import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;

  const groupedProducts = []; 

  
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <main className="block col-2">
      <h2>Products</h2>
      {/* Render each set of products in a new row */}
      {groupedProducts.map((group, index) => (
        <div key={index} className="row">
          {group.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      ))}
    </main>
  );
}
