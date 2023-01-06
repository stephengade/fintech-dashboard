import React from "react";
import design from "./Table.module.scss"

interface iHeader {
    header: any[]
    filter?: any
}
const Header = ({header, filter}: iHeader) => {
    return (
      <tr>
        {header.map((h, i) => (
          <th key={i} className={design.row}>
            {h}
            {filter}
          </th>
        ))}
      </tr>
    );
  };
  

export default Header;
