import React, { useEffect, useState } from "react";
import { add } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      <h1 className="col-span-full text-2xl font-bold">PRODUCTS</h1>
      {products.map((product) => (
        <div className="col-span-1" key={product.id}>
          <img className="h-20" src={product.image} alt="" />
          <h4 className="text-lg font-semibold">{product.title}</h4>
          <h5 className="text-gray-700">${product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className="bg-blue-500 text-white px-4 py-2 mt-2"
          >
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
