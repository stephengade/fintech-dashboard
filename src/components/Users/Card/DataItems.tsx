import React from "react";
import { formatDate } from "../../Utils/formatDate";
import design from "../../Utils/Table/Table.module.scss";
// import { GrView } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { SlUserFollowing, SlUserUnfollow } from "react-icons/sl";

const menuIcon = <BsThreeDotsVertical />;

// const viewIcon = <GrView fontSize="12px" />;
// const acceptIcon = <SlUserFollowing fontSize="12px"/>;
// const deleteIcon = <SlUserUnfollow fontSize="12px"/>;

interface iItem {
  Data: any[];
  currentPage: number;
  itemsPerPage: number;
  handleMenu: (e?: any) => void;
}


export const Items = ({
  Data,
  currentPage,
  itemsPerPage,
  handleMenu,
}: iItem) => {
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
            onClick={() => handleMenu(item)}
          >
            {menuIcon}
          </td>
        </tr>
      ))}
    </>
  );
};
