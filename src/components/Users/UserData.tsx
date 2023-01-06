import React, { useEffect, useState } from 'react'
import Table from '../Utils/Table/Table'
import filterIcon from "../../images/filterIcon.svg"
import axios from 'axios'

import design from "../Utils/Table/Table.module.scss"

import Pagination from '../Utils/SetPagination'

import { Items } from './Card/DataItems';

import { GrView } from "react-icons/gr";
import { SlUserFollowing, SlUserUnfollow } from "react-icons/sl";


const viewIcon = <GrView fontSize="12px" color="#545F7D" />;
const acceptIcon = <SlUserFollowing fontSize="12px" color="#545F7D"/>;
const deleteIcon = <SlUserUnfollow fontSize="12px" color="#545F7D"/>;

// export const MenuList = (id: any) => {
 
//   const deleteUser = () => {
//     alert(`Your about to delete ${id.userName}`);
//   };

//   const activateUser = () => {
//     alert(`Your about to approve ${id.userName}`);
//   };

//   return (
//     <ul className={design.menuList}>
//       <li> {viewIcon}
//         <a href={`/user/${id}`}>
//           {" "}
          
//           <span>View Details</span>
//         </a>
//       </li>

//       <li onClick={deleteUser}>
//         {" "}
//         {deleteIcon} <span>Delete user</span>
//       </li>
//       <li onClick={activateUser}>
//         {" "}
//         {acceptIcon} <span>Activate user</span>
//       </li>
//     </ul>
//   );
// };



const UserData = () => {
 
  const [currentPage, setCurrentPage] = useState(1); // state to store the current page
  const [itemsPerPage, setItemsPerPage] = useState(10); // number of items per page

  const header = ["organisation", "username", "email", "phone Number", "date Joined", "status"];

  const [data, setData] = useState([]); // state to store the data
  const [loading, setLoading] = useState(true)

   const [show, setShow] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


// filter
  const Filter = (
    <span className={design.filter} onClick={() => alert("working")}>
      <img width="14px" height="14px" src={filterIcon} alt="filter" />
    </span>
  );


  // menu
  
const handleMenu = (id: any) => {
  setShow(!show);

  alert(id.userName)

  };



  
  const totalItems = data.length;

  if (loading) return <p className={design.data}>Loading...</p>;

  return (
    <>
      <Table HeaderData={header} prop={Filter}>
        <Items
          Data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handleMenu={handleMenu}
        />
      </Table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        setItemsPerPage={setItemsPerPage}     
          />
        
    </>
  );
};

export default UserData;
