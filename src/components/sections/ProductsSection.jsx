import Products from "components/card/Products";
import UsersDetails from "components/card/UsersDetails";
import React from "react";

function ProductsSection() {
  return (
    <div className="row mt-3">
      <Products />
      <UsersDetails />
    </div>
  );
}

export default ProductsSection;
