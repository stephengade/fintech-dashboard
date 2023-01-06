import React, { useEffect, useState } from 'react'
import Table from '../Utils/Table/Table'
import filterIcon from "../../images/filterIcon.svg"
import axios from 'axios'

import design from "../Utils/Table/Table.module.scss"

import Pagination from '../Utils/SetPagination'

import { Items } from './Card/DataItems';
import Filter from '../Utils/Filter/Filter'


const UserData = () => {
 
  const [currentPage, setCurrentPage] = useState(1); // state to store the current page
  const [itemsPerPage, setItemsPerPage] = useState(10); // number of items per page

  const header = ["organisation", "username", "email", "phone Number", "date Joined", "status"];

  const [data, setData] = useState([]); // state to store the data
  const [loading, setLoading] = useState(true)


//filter
const [filteredItems, setFilteredItems] = useState(data);

const handleFilter = (filteredItems: any) => {
  setFilteredItems(filteredItems);
};

  const [showFilter, setShowFilter] = useState(false)
    
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
  const FilterIcon =  <span className={design.filter} onClick={() => setShowFilter(!showFilter)}>
        <img width="14px" height="14px" src={filterIcon} alt="filter" />
      </span>
    
  
  


  
  const totalItems = data.length;

  if (loading) return <p className={design.data}>Loading...</p>;

  return (
    <>
      <Table HeaderData={header} filter={FilterIcon}>
        <Items
          Data={filteredItems.length === 0 ? data : filteredItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
     {showFilter && <Filter items={data} onFilter={handleFilter} setShowFilter={setShowFilter}/>}
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
