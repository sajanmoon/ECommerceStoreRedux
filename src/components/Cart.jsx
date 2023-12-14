import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl underline">Cart</h1>
      {products.map((product) => (
        <div key={product.id} className=" mt-8">
          <img src={product.image} alt="" className=" h-20" />
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <h5 className="text-gray-700">Price: {product.price}</h5>
          <button
            onClick={() => handleRemove(product.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
