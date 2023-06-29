import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  Buttons
} from './product-card.styles';

const ProductCard = ({ product, categoryName }) => {
  const { name, price, imageUrl, id} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Buttons>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to card
        </Button>
        <Link to={`/${categoryName}/product/${id}`}>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}            
          >
            View Product
          </Button>
        </Link>
      </Buttons>
    </ProductCartContainer>
  );
};

export default ProductCard;
