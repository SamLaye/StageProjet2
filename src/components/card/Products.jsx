import Product from "components/Product";
import React from "react";

function Products() {
  return (
    <div className="col-6">
      <div className="bg-white border">
        <h3 className="text-uppercase fs-6 mt-2 py-1 px-4">NEW PRODUCTS</h3>
        <hr />
        <div className="row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Products;
