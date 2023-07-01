import React from 'react'
import { useParams } from 'react-router-dom';

import ProductDetails from '../../components/product-details/product-details.component';
import { ProductInformationContainer } from './product.styles';


const Product = () => {
    const { productId, categoryId } = useParams();

    return (
      <ProductInformationContainer>
        <ProductDetails productId={productId} categoryId={categoryId}>
        </ProductDetails>
      </ProductInformationContainer>
    );
  };
  
export default Product;