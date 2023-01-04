import React from "react";


interface iHeader {
    header: any[]
}
const Header = ({header}: iHeader) => {
  return (
    <>
      {header.map((h, i) => {
        return (
          <tr key={i}>
            <th>{h}</th>
          </tr>
        );
      })}
    </>
  );
};

export default Header;
