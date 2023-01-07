import React, { useState } from "react";
import { formatDate } from "../../Utils/formatDate";
import design from "../../Utils/Table/Table.module.scss";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MenuList } from "../../Utils/Menu/TableMenu";


const menuIcon = <BsThreeDotsVertical />;

interface iItem {
  Data: any[];
  currentPage: number;
  itemsPerPage: number;
}

export const Items = ({ Data, currentPage, itemsPerPage }: iItem) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

  // status

  const status = ["active", "inactive", "blacklisted", "pending"];

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
          <td
            className={`${design.data}`}
          >
            <span
              className={` ${
                status[index % 4] === "blacklisted"
                  ? design.blacklisted
                  : status[index % 4] === "active"
                  ? design.active
                  : status[index % 4] === "pending"
                  ? design.pending
                  : design.inactive
              }`}
            >
              {status[index % 4]}
            </span>
          </td>
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
