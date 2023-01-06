import React, { useState } from "react";
import { formatDate } from "../../Utils/formatDate";
import design from "../../Utils/Table/Table.module.scss";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MenuList } from "../../Utils/Menu/TableMenu";

import _ from 'lodash';

const menuIcon = <BsThreeDotsVertical />;


interface iItem {
  Data: any[];
  currentPage: number;
  itemsPerPage: number;
}


export const Items = ({
  Data,
  currentPage,
  itemsPerPage,
 
}: iItem) => {



 const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

 // status

 const status = ["active", "inactive", "blacklisted"];
const shuffledStatus = _.shuffle(status);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = Data && Data.slice(startIndex, endIndex);

  return (
    <>
      {paginatedItems.map((item: any, index: number) => (
        <tr key={index} className={design.dataRow}>
          <td className={design.data}>{item.orgName}</td>
          <td className={design.data}>{item.userName}</td>
          <td className={design.data}>{item.email}</td>
          <td className={`${design.data}`}>{item.phoneNumber}</td>
          <td className={`${design.data}`}>{formatDate(item.createdAt)}</td>
          <td className={`${design.data}`}>{shuffledStatus[index % 3]}</td>
          <td
            className={`${design.data} ${design.menu}`}
            onClick={() => toggleMenu(item.id)}
          >
            {menuIcon}

            {openMenuId === item.id && <MenuList id={item} />}
          </td>
        </tr>
      ))}
    </>
  );
};
