import React from 'react'
import ListOfCourse from './ListOfCourse';
import './SubCourse.scss';

function SubCourse() {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg', details: 'Details about product 1' },
    { id: 2, name: 'Product 2', image: 'product2.jpg', details: 'Details about product 2' },
    { id: 3, name: 'Product 3', image: 'product3.jpg', details: 'Details about product 3' },
    { id: 4, name: 'Product 4', image: 'product4.jpg', details: 'Details about product 4' },
    { id: 5, name: 'Product 5', image: 'product5.jpg', details: 'Details about product 5' },
  ];

  return (
    <div className='sub-course'>
      <div>
        <h1>Your Course</h1>
      </div>
      <div className="product-list-container-outer">
      <ListOfCourse products={products} />
      </div>
    </div>
  )
}

export default SubCourse