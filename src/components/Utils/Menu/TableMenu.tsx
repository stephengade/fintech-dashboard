import React from "react";
import { GrView } from "react-icons/gr";
import { SlUserFollowing, SlUserUnfollow } from "react-icons/sl";

import design from "./Menu.module.scss"

const viewIcon = <GrView fontSize="12px" color="#545F7D" />;
const acceptIcon = <SlUserFollowing fontSize="12px" color="#545F7D"/>;
const deleteIcon = <SlUserUnfollow fontSize="12px" color="#545F7D"/>;

export const MenuList = ({id}: any) => {
 
  const deleteUser = () => {
    alert(`Your about to delete ${id.userName}`);
  };

  const activateUser = () => {
    alert(`Your about to approve ${id.userName}`);
  };

  return (
    <ul className={design.menuList}>
      <li> {viewIcon}
        <a href={`/user/${id.id}`}>
          {" "}
          
          <span>View Details</span>
        </a>
      </li>

      <li onClick={deleteUser}>
        {" "}
        {deleteIcon} <span>Delete user</span>
      </li>
      <li onClick={activateUser}>
        {" "}
        {acceptIcon} <span>Activate user</span>
      </li>
    </ul>
  );
};


