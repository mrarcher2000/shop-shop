import { createSlice } from '@reduxjs/toolkit';
import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART
  } from "./actions";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    },
    reducers: {

        updateProducts: (state, action) => {
            return {
                ...state,
                products: [...action.products],
              }
        },

        addToCart: (state, action) => {
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
              } 
        },

        addMultipleToCart: (state, action) => {
            return {
                ...state,
                cart: [...state.cart, ...action.products],
              }
        },

        updateCartQuantity: (state, action) => {
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                  if (action._id === product._id) {
                    product.purchaseQuantity = action.purchaseQuantity
                  }
                  return product
                })
              } 
        },

        removeFromCart: (state, action) => {
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
              });
        
              return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
              }
        },

        clearCart: (state, action) => {
            return {
                ...state,
                cartOpen: false,
                cart: []
              }
        },

        toggleCart: (state, action) => {
            return {
                ...state,
                cartOpen: !state.cartOpen
              }
        },

        updateCategories: (state, action) => {
            return {
                ...state,
                categories: [...action.categories],
              }
        },

        updateCurrentCategory: (state, action) => {
            return {
                ...state,
                currentCategory: action.currentCategory
              }
        }
    }
})


export const { updateProducts, addToCart, addMultipleToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart, updateCategories, updateCurrentCategory} = productSlice.actions;

export default productSlice.reducer;