import React from "react";
import UserDetail from "../UserDetail";
import { BiSolidMessageDots } from "react-icons/bi";

function UsersDetails() {
  return (
    <div className="col-6">
      <div className="bg-white ps-1 border">
        <h3 className="text-uppercase fs-6 mt-2 py-1 px-4">NEW users</h3>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <BiSolidMessageDots />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Participation</th>
              <th scope="col">%</th>
            </tr>
          </thead>
          <UserDetail />
        </table>
      </div>
    </div>
  );
}

export default UsersDetails;
