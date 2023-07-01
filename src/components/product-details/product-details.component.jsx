import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';


import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { addItemToCart, removeItemFromCart, } from '../../store/cart/cart.action';
import { ProductDetailsContainer, ProductName, ProductInformation, ProductRating, ProductPrice, TagsContainer, ProductSize, ProductDescription, OrderOptions, QuantityChooser, QuantityDisplay } from './product-details.styles';
import ProductCarousel from '../product-carousel/product-carousel.component';
import RatingDisplay from '../rating/rating.component';
import Tags from '../tags/tags.component';
import Typography from '@mui/material/Typography';
import Button from '../button/button.component';
import IconButton from '@mui/joy/IconButton';
import { Add, Remove } from '@mui/icons-material';

const ProductDetails = ({productId, categoryId}) => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const cartItems = useSelector(selectCartItems);
    const [products, setProducts] = useState(categoriesMap[categoryId]);
    const [product, setProduct] = useState(undefined);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(categoriesMap[categoryId]);
        setProduct(products.find(o => o.id === productId))        
      }, [categoryId, categoriesMap]);

      const clickedOnToAdd = (productToAdd) => {
        dispatch(addItemToCart(cartItems, productToAdd))
      }

      const clickedOnToRemove = (productToAdd) => {
        dispatch(removeItemFromCart(cartItems, productToAdd))
      }

      if (product) {
        return (
            <ProductDetailsContainer>
                <ProductCarousel images={product.images}>

                </ProductCarousel>
                <ProductInformation>
                    <ProductName>
                        {product.name}
                    </ProductName>
                    <ProductRating>
                        <RatingDisplay value={product.averageRating}></RatingDisplay>
                        <Typography component="legend">({product.reviews.length} people reviewed)</Typography>
                    </ProductRating>
                    <ProductPrice>${product.price}</ProductPrice>
                    <TagsContainer>
                        {
                            product.tags.map((tag) => (
                                <Tags tags={tag}></Tags>
                            ))
                        }
                    </TagsContainer>
                    <ProductSize>Sizes Available: {product.size}</ProductSize>
                    <ProductDescription>{product.desc}</ProductDescription>
                    {
                        cartItems.find(o => o.id === productId) ?
                        (
                           <QuantityChooser>
                                <IconButton color="neutral" onClick={() => clickedOnToAdd(product)}>
                                    <Add />
                                </IconButton>
                                <QuantityDisplay>
                                    {cartItems.find(o => o.id === productId).quantity}
                                </QuantityDisplay>
                                <IconButton color="neutral" onClick={() => clickedOnToRemove(product)}>
                                    <Remove />
                                </IconButton>
                           </QuantityChooser> 
                        ) : (
                            <OrderOptions>
                                <Button onClick={() => clickedOnToAdd(product)}>Add To Cart</Button>
                                <Button>Buy Now</Button>
                            </OrderOptions>
                        )
                    }
                </ProductInformation>
            </ProductDetailsContainer>
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