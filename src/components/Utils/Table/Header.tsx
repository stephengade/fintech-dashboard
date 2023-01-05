import React from "react";
import design from "./Table.module.scss"

interface iHeader {
    header: any[]
    prop?: any
}
const Header = ({header, prop}: iHeader) => {
    return (
      <tr>
        {header.map((h, i) => (
          <th key={i} className={design.row}>
            {h}
            {prop}
          </th>
        ))}
      </tr>
    );
  };
  

export default Header;
