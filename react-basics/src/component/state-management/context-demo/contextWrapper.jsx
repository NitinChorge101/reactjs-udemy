import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Header from "./Header";
import Shop from "./Shop";
import Product from "./Product.jsx";
import CartContextProvider from "../../../store/shopping-cart-context.jsx"
function ContextWrapper() {

    return (
        <>
            {/* provide the context at parent level  */}
            <CartContextProvider>
                <Header />
                <Shop>
                    {
                        DUMMY_PRODUCTS.map((product) => (
                            <div className="col-md-4" key={product.id}>
                                <Product {...product} />
                            </div >
                        ))
                    }

                </Shop>
            </CartContextProvider>
        </>
    );
}

export default ContextWrapper;
