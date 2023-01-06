import React from 'react'
import Header from './Header'
import design from "./Table.module.scss"

interface iTable {
    HeaderData: any[]
    children?: any
    filter?: any
}

const Table = ({ HeaderData, children, filter}: iTable) => {
  return (
   <table className={design.table}>
    
    <Header header={HeaderData} filter={filter} />
   
   
      {children}
   
   </table>
  )
}

export default Table