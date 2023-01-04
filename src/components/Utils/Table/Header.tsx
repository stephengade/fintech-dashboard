import React from "react";
import design from "./Table.module.scss"

interface iHeader {
    header: any[]
    children?: any
}
const Header = ({header, children}: iHeader) => {
    return (
      <tr>
        {header.map((h, i) => (
          <th key={i} className={design.row}>
            {h}

            {children}
          </th>

         
        ))}
      </tr>
    );
  };
  

export default Header;
