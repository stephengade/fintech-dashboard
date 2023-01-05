import React, { useEffect, useState } from 'react'
import Table from '../Utils/Table/Table'
import filterIcon from "../../images/filterIcon.svg"
import axios from 'axios'

import design from "../Utils/Table/Table.module.scss"

import Pagination from '../Utils/usePagination'

import { Items } from './Card/DataItems';



const UserData = () => {
 
  const [currentPage, setCurrentPage] = useState(1); // state to store the current page
  const [itemsPerPage, setItemsPerPage] = useState(10); // number of items per page

  const header = ["organisation", "username", "email", "phone Number", "date Joined", "status"];

  const [data, setData] = useState([]); // state to store the data
  const [loading, setLoading] = useState(true)


    
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



  const Filter = (
    <span className={design.filter} onClick={() => alert("working")}>
      <img width="14px" height="14px" src={filterIcon} alt="filter" />
    </span>
  );

  const handleMenu = (e: any) => {
    alert(e);
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
        setItemsPerPage={setItemsPerPage}       />
    </>
  );
};

export default UserData;
