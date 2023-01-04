import React from "react";
import design from "../../Utils/Table/Table.module.scss"
interface iData {
  Header: any[];
  Column: any[];
}

const Column = ({ Column, Header }: iData) => {
  return (
    <>
    {Column.map(col => (
        <tr key={col.name} className={design.dataRow}>
        {Header.map((h, i) => (
          <td key={i} className={design.data}>{col[h]}</td>
          
        ))}
      </tr>
    ))}
   </>
  );
};

export default Column;
