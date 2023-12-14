import React, { useEffect, useState } from "react";
import { add } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/cart/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (state.product.isLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <>
      {/* <button onClick={(e) => dispatch(fetchProducts())}>Fetch Data</button> */}
      {state.product.data ? (
        state.product.data.map((e) => (
          <div key={e.id} className=" grid-cols-3">
            <img className=" h-20" src={e.image} />
            <h4 className="text-lg font-semibold">{e.title}</h4>
            <h5 className="text-gray-700">${e.price}</h5>
            <button
              onClick={() => handleAdd(products)}
              className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
              ADD TO CART
            </button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </>

    // <div className="grid grid-cols-4 gap-4">
    //   <h1 className="col-span-full text-2xl font-bold">PRODUCTS</h1>
    //   {state.products.map((product) => (
    //     <div className="col-span-1" key={product.id}>
    //       <img className="h-20" src={product.image} alt="" />
    //       <h4 className="text-lg font-semibold">{product.title}</h4>
    //       <h5 className="text-gray-700">${product.price}</h5>
    //       <button
    //         onClick={() => handleAdd(product)}
    //         className="bg-blue-500 text-white px-4 py-2 mt-2"
    //       >
    //         ADD TO CART
    //       </button>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Products;
