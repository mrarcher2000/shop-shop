export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const updateProducts = () => {return {type: "UPDATE_PRODUCTS"}};
export const addToCart = () => {return {type: "ADD_TO_CART"}};
export const addMultipleToCart = () => {return {type: "ADD_MULTIPLE_TO_CART"}};
export const removeFromCart = () => {return {type: "REMOVE_FROM_CART"}};
export const clearCart = () => {return {type: "CLEAR_CART"}};
export const updateCartQuantity = () => {return {type: "UPDATE_CART_QUANTITY"}};
export const toggleCart = () => {return {type: "TOGGLE_CART"}};
export const updateCategories = () => {return {type: "UPDATE_CATEGORIES"}};
export const updateCurrentCategory = () => {return {type: "UPDATE_CURRENT_CATEGORY"}};