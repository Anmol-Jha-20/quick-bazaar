import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem as CartProduct } from "../types/types";

type CartItemProps = {
  cartItem: CartProduct;
  incrementHandler: (cartItem: CartProduct) => void;
  decreaseHandler: (cartItem: CartProduct) => void;
  removeHandler: (id: string) => void;
};

function CartItem({
  cartItem,
  incrementHandler,
  decreaseHandler,
  removeHandler,
}: CartItemProps) {
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={`${server}/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decreaseHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>

      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
