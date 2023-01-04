import React from "react";

interface iData {
    Data: any[]
} 

const Column = ({Data}: iData) => {
  return (
    <>
      {Data.map((h, i) => {
        return (
          <tr key={i}>
            <th>{h}</th>
          </tr>
        );
      })}
    </>
  );
};

export default Column;
