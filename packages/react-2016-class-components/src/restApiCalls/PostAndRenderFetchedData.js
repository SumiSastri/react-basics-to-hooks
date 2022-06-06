import React from "react";

export default function PostAndRenderFetchedData({ persons }) {
  let persons = this.props;
  const personList = persons.map((person) => (
    <ul key={person.id}>
      <li>
        ({person.id}) : {""}
        {person.name}
      </li>
    </ul>
  ));
  return (
    <div>
      <ul>
        <li>{personList}</li>
      </ul>
    </div>
  );
}
