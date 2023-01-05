
import React from "react";
import { formatDate } from "../../Utils/formatDate";
import design from "../../Utils/Table/Table.module.scss"

import {BsThreeDotsVertical} from 'react-icons/bs'
const menuIcon = <BsThreeDotsVertical />

interface iItem {
    Data: any[]
    currentPage: number
    itemsPerPage: number
    handleMenu: (e?: any) => void
}

export const Items = ({ Data, currentPage, itemsPerPage, handleMenu }: iItem) => {


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
            <td className={`${design.data}`}>{"inactive"}</td>
            <td
              className={`${design.data} ${design.menu}`}
              onClick={() => handleMenu(item.userName)}
            >
              {menuIcon}
            </td>
          </tr>
        ))}
      </>
    );
  };
  