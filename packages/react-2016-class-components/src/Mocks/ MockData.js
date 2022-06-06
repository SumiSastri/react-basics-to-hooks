import React from "react";

import MapObjects from "../iterations/MapObjects";

export default function MockList() {
  const mockListData = [
    {
      id: 1,
      name: "Bhavana",
      age: 60,
      phone: 123,
      email: "bhavana@bhavana.com",
    },
    {
      id: 2,
      name: "Butchi",
      age: 18,
      phone: 234,
      email: "butchi@butchi.com",
    },
    {
      id: 3,
      name: "Babita",
      age: 21,
      phone: 5687,
      email: "babita@babita.com",
    },
  ];

  const mockList = mockListData.map((data) => (
    // <h5>
    //   Employee Name:{data.name} Contact details (P): {data.phone} (E):
    //   {data.email}
    // </h5>

    <MapObjects data={data} key={data.id} />
  ));
  return (
    <div>
      <p>
        Example 3: Mapping an object with data as props. This is the parent
        component with the nested array of objects. The map method is called in
        the parent component and passed to the child component as destructured
        props. The child component renders the props in JSX elements.
      </p>
      <br></br>
      {mockList}
    </div>
  );
}
