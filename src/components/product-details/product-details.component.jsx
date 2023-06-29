import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/category.selector';

const ProductDetails = ({productId, categoryId}) => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[categoryId]);
    const [product, setProduct] = useState();

    useEffect(() => {
        setProducts(categoriesMap[categoryId]);
        console.log(products[`${productId}`])
      }, [categoryId, categoriesMap]);

    
    return (
        <div>Hello, {productId}</div>
    )
}

export default ProductDetails;