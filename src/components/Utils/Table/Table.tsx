import React from 'react'
import Header from './Header'
import Column from './Column'
import design from "./Table.module.scss"

interface iTable {
    ColumnData: any[]
    HeaderData: any[]
    children?: any
}

const Table = ({ColumnData, HeaderData, children}: iTable) => {
  return (
   <table className={design.table}>
    
    <Header header={HeaderData} children={children} />
   
   
    <Column Column={ColumnData} Header={HeaderData} />
   
   </table>
  )
}

export default Table