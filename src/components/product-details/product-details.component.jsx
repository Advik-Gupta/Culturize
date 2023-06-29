import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/category.selector';

const ProductDetails = ({productId, categoryId}) => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[categoryId]);
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProducts(categoriesMap[categoryId]);
        products.map((product) => {
            if (product.id === parseInt(productId)) {
                setProduct(product)
            }
        })
      }, [categoryId, categoriesMap]);

      if (product) {
        return (
            <div>
                Hello, {product.name}
            </div>
        )
      } else {
        return (
            <div>
                Waiting for product information
            </div>
        )
      }
    

}

export default ProductDetails;