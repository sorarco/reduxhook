import React from "react";
const List = ({ data }) => {
  return (
    <ul>
      <li>#1</li>
      <li>#2</li>
      {data.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
