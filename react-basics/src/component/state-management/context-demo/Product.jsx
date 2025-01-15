import { useContext } from "react";
import { CartContext } from "../../../store/shopping-cart-context.jsx"

export default function Product({
    id,
    image,
    title,
    price,
    description,
}) {

    const { addItemToCart } = useContext(CartContext);

    return (
        <article className="product">
            <img className="w-100" src={image} alt={title} height={300} width={300} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className='product-price'>${price}</p>
                    <p>{description}</p>
                </div>
                <p className='product-actions'>
                    <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p>
            </div>
        </article>
    );
}
