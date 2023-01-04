import React from 'react'
import Header from './Header'
import Column from './Column'

interface iTable {
    ColumnData: any[]
    HeaderData: any[]
}

const Table = ({ColumnData, HeaderData}: iTable) => {
  return (
   <table>
    <Header header={HeaderData} />
    <Column Data={ColumnData} />
   </table>
  )
}

export default Table