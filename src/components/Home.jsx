import React from "react";
import Products from "../elements/Products";

const Home = () => {
  return (
    <div>
      <h1 className=" text-3xl">Welcome to redux toolkit</h1>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
