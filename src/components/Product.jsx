import React from "react";
import _img1 from "../assets/images/img1.jpg";
import Image from "./Image";

function Product() {
  const newProducts = [
    {
      image: _img1,
      name: "Admin Template",
      desc: "Responsive admin template...",
      price: 36,
    },
    {
      image: _img1,
      name: "Schedule App",
      desc: "Manage your schedule...",
      price: 9,
    },
    {
      image: _img1,
      name: "Chat App",
      desc: "Realtime chat application...",
      price: 12,
    },
    {
      image: _img1,
      name: "Wordpress Business Theme",
      desc: "Over 100+ templates and pages...",
      price: 24,
    },
    {
      image: _img1,
      name: "Camera App",
      desc: "Over 30+ filter...",
      price: 6.99,
    },
    {
      image: _img1,
      name: "Calendar App",
      desc: "Organize your schedule...",
      price: 6.99,
    },
  ];
  console.log(newProducts);
  return (
    <div>
      {newProducts.map((product) => (
        <div
          className="col-11 mx-auto d-flex justify-content-between p-1"
          key={Math.random()}
        >
          <div className="d-flex">
            <Image
              src={product.image}
              imgWidth="120px"
              imgHeight="70px"
              imgObjectFit="cover"
              className="rounded me-2"
            />
            <div className="d-flex flex-column justify-content-start">
              <h2 style={{ fontSize: "18px" }}>{product.name}</h2>
              <p className="text-secondary">{product.desc}</p>
            </div>
          </div>
          <h3>${product.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default Product;
