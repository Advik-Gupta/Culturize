import React from 'react'
import { useParams } from 'react-router-dom';

import ProductDetails from '../../components/product-details/product-details.component';


const Product = () => {
    const { productId, categoryId } = useParams();

    return (
      <ProductDetails productId={productId} categoryId={categoryId}>
      </ProductDetails>
    );
  };
  
export default Product;