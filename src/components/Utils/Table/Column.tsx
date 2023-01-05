import React from "react";
import design from "../../Utils/Table/Table.module.scss"
interface iData {
  Header: any[];
  Column: any[];
}

const Column = ({ Column, Header }: iData) => {
  return (
    <>
   
        <tr  className={design.dataRow}>     
          <td className={design.data}></td>
      </tr>
   
   </>
  );
};

export default Column;
