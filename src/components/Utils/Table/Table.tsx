import React from 'react'
import Header from './Header'
import design from "./Table.module.scss"

interface iTable {
    HeaderData: any[]
    children?: any
    prop?: any
}

const Table = ({ HeaderData, children, prop}: iTable) => {
  return (
   <table className={design.table}>
    
    <Header header={HeaderData} prop={prop} />
   
   
      {children}
   
   </table>
  )
}

export default Table