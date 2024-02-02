import React from "react";
import Image from "components/Image";
import _img2 from "../../assets/images/imgTask.jpg";
import Button from "components/Button";

function Task() {
  return (
    <div className="col-12 col-md-4 ">
      <div className="border bg-white rounded">
        <Image src={_img2} imgWidth="100%" imgObjectFit="cover" />
        <div className="p-2">
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fs-5" htmlFor="flexCheckDefault">
              task 1
            </label>
          </div>
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fs-5" htmlFor="flexCheckDefault">
              task 2
            </label>
          </div>
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fs-5" htmlFor="flexCheckDefault">
              task 3
            </label>
          </div>
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fs-5" htmlFor="flexCheckDefault">
              task 4
            </label>
          </div>
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fs-5" htmlFor="flexCheckDefault">
              task 5
            </label>
          </div>
          <Button title="Add" bgColor="#fc5c7d" color="#fff" />
        </div>
      </div>
    </div>
  );
}

export default Task;
