//import React from 'react';
// import AddToWishlist from '../products/components/AddToWishlist';
// import CartProducts from './components/Cart/CartProducts';
// import CartProductTotals from './components/Cart/CartProductTotals';
// import CreditCardInputs from './components/Payment/CreditCardInputs';
// import PaymentOptions from './components/Payment/PaymentOptions';
// import CheckoutCartProduct from './components/CheckoutCartProduct';
// import CheckoutCartTotals from './components/CheckoutCartTotals';
// import CustomerInputs from './components/CustomerInputs';
// import DeliveryOptions from './components/DeliveryOptions';
// import PromoCodeForm from './components/PromoCodeForm';
import Cart from './Cart';
import Checkout from './Checkout';

const CartPage = Cart;
const CheckoutPage = Checkout;

export default {
    // AddToWishlist,
    // CartProducts,
    // CartProductTotals,
    // CreditCardInputs,
    // PaymentOptions,
    // CheckoutCartProduct,
    // CheckoutCartTotals,
    // CustomerInputs,
    // DeliveryOptions,
    // PromoCodeForm,
    // PromoCodeValue,
    //CartPage,
    //CheckoutPage,
    routeProps: [
      {
        path: '/cart',
        exact: true,
        component: CartPage
      },
      {
        path: '/checkout',
        exact: true,
        component: CheckoutPage
      }
    ],
    navigation: {
      permission: [],
      label: 'Checkout',
      theme: 'checkout',
    },
    name: 'Checkout',
}