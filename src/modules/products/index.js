//import React from 'react';
// import ProductCard from './components/ProductCard/ProductCard';
// import ProductFeatures from './components/ProductCard/ProductFeatures';
// import ProductFilter from './components/ProductFilter';
// import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';
// import Ratings from './components/Ratings';
import All from './All';
import ProductCategories from './ProductCategories';
import ProductDetails from './ProductDetails';
import Sale from './Sale';

export default {
    routeProps: [
        {
            path: '/all',
            exact: true,
            component: All
        },
        {
            path: '/category/:category',
            exact: true,
            component: ProductCategories
        },
        {
            path: '/product/:productSlug',
            exact: true,
            component: ProductDetails
        },
        {
            path: '/sale',
            exact: true,
            component: Sale
        }
    ],
    navigation: {
      permission: [],
      label: 'Products',
      theme: 'products',
    },
    name: 'Products',
}