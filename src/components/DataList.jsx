import React, { useState, useEffect } from "react";

function DataList() {
  const [userList, setUserList] = useState([]); // for rendering the data through the  given API end point
  const [searchTerm, setSearchTerm] = useState(""); //Manages for Search filter

  //fetching the data using the fetch function and getting the JSON version
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((response) => response.json())
      .then((result) => setUserList(result));
  }, []);

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {/* the table starts here */}
      <table>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>COUNTRY</th>
            <th>PRODUCT</th>
            <th>ADDRESS</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        {userList && userList.length > 0
          ? userList
              .filter((usr) => {
                if (searchTerm == "") {
                  return usr;
                } else if (
                  usr.customer
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return usr;
                }
              })
              .map(
                (
                  usr // mapping the data through map function of ES6.
                ) => (
                  <tbody>
                    <tr>
                      <td>{usr.order_id}</td>
                      <td>{usr.customer}</td>
                      <td>{usr.country}</td>
                      <td>
                        {usr.product_title}
                        {usr.product_description}
                      </td>
                      <td>{usr.address}</td>
                      <td>{usr.date}</td>
                      <td>{usr.status}</td>
                    </tr>
                  </tbody>
                )
              )
          : "loading"}
      </table>
    </div>
  );
}

export default DataList;
