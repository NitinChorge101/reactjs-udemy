import { Children, createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../component/state-management/context-demo/dummy-products";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateCartItem: () => { },

});

const shoppingCartReducer = (state, action) => {

}

//as component logic increase we can move it in context file in below function name is up to us
export default function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer();

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    function handleAddItemToCart(id) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems?.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === id);
                updatedItems.push({
                    id: id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                items: updatedItems,
            };
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateCartItem: handleUpdateCartItemQuantity
    }
    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )
}
