import React from 'react';
import './SubCourse.scss';

const ListOfCourse = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map(product => (
        <div key={product.id} className="product-card">

          <img src={product.image} alt={product.name} />

          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.details}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ListOfCourse;
