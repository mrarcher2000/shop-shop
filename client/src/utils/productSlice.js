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
  import {reducer} from './reducers';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    },
    reducers: (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
          return {
            ...state,
            products: [...action.products],
          };
    
        case ADD_TO_CART:
          return {
            ...state,
            cartOpen: true,
            cart: [...state.cart, action.product],
          };
    
        case ADD_MULTIPLE_TO_CART:
          return {
            ...state,
            cart: [...state.cart, ...action.products],
          };
    
        case UPDATE_CART_QUANTITY:
          return {
            ...state,
            cartOpen: true,
            cart: state.cart.map(product => {
              if (action._id === product._id) {
                product.purchaseQuantity = action.purchaseQuantity
              }
              return product
            })
          };
    
        case REMOVE_FROM_CART:
          let newState = state.cart.filter(product => {
            return product._id !== action._id;
          });
    
          return {
            ...state,
            cartOpen: newState.length > 0,
            cart: newState
          };
    
        case CLEAR_CART:
          return {
            ...state,
            cartOpen: false,
            cart: []
          };
    
        case TOGGLE_CART:
          return {
            ...state,
            cartOpen: !state.cartOpen
          };
    
        case UPDATE_CATEGORIES:
          return {
            ...state,
            categories: [...action.categories],
          };
    
        case UPDATE_CURRENT_CATEGORY:
          return {
            ...state,
            currentCategory: action.currentCategory
          }
    
        default:
          return state;
      }
    }
    // {

    //     updateProducts: (state, action) => {
    //         return {
    //             ...state,
    //             products: [...action.products],
    //           }
    //     },

    //     addToCart: (state, action) => {
    //         return {
    //             ...state,
    //             cartOpen: true,
    //             cart: [...state.cart, action.product],
    //           } 
    //     },

    //     addMultipleToCart: (state, action) => {
    //         return {
    //             ...state,
    //             cart: [...state.cart, ...action.products],
    //           }
    //     },

    //     updateCartQuantity: (state, action) => {
    //         return {
    //             ...state,
    //             cartOpen: true,
    //             cart: state.cart.map(product => {
    //               if (action._id === product._id) {
    //                 product.purchaseQuantity = action.purchaseQuantity
    //               }
    //               return product
    //             })
    //           } 
    //     },

    //     removeFromCart: (state, action) => {
    //         let newState = state.cart.filter(product => {
    //             return product._id !== action._id;
    //           });
        
    //           return {
    //             ...state,
    //             cartOpen: newState.length > 0,
    //             cart: newState
    //           }
    //     },

    //     clearCart: (state, action) => {
    //         return {
    //             ...state,
    //             cartOpen: false,
    //             cart: []
    //           }
    //     },

    //     toggleCart: (state, action) => {
    //         return {
    //             ...state,
    //             cartOpen: !state.cartOpen
    //           }
    //     },

    //     updateCategories: (state, action) => {
    //         return {
    //             ...state,
    //             categories: [...action.categories],
    //           }
    //     },

    //     updateCurrentCategory: (state, action) => {
    //         return {
    //             ...state,
    //             currentCategory: action.currentCategory
    //           }
    //     }
    }
)


export const { } = productSlice.actions;

export default productSlice.reducer;