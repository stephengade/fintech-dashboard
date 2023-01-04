import React from 'react'
import Table from '../Utils/Table/Table'
import filterIcon from "../../images/filterIcon.svg"

import design from "../Utils/Table/Table.module.scss"



// const header = ["Name", "Age", "School", "Class", "Religion", "Gender"];


const column = [
    {
       name: "Seun",
       age: 50,
       school: "UNILAG",
       class: "500L",
       religion: "Budhism",
       gender: "LGBTQ"
    },

    {
        name: "Seun",
        age: 50,
        school: "UNILAG",
        class: "500L",
        religion: "Budhism",
        gender: "LGBTQ"
     }
]


const header = Object.keys(column[0])

const UserData = () => {

const Filter = <span className={design.filter} onClick={() => alert("working")}>
    <img width="14px" height="14px" src={filterIcon} alt="filter" />
</span>

  return (
   <Table ColumnData={column} HeaderData={header} children={Filter}/>
  )
}

export default UserData