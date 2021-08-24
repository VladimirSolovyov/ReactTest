import React, { useState } from "react";
import ArrowUp from "../svg/arrowUp";
import ArrowDown from "../svg/arrowDown";
import DetailItem from "./../detailItem/detailItem";


const Table = ({
   sortData,
   contactData,
   directionSort, 
   detailRow, 
   detailItemData,
   rowIsClick
  }) => {
const [fieldData, setfieldData] = useState('')
const Arrow = () => {
  return(
    directionSort? <ArrowDown />:<ArrowUp />
  )
}
const fieldSortData = (field) => {
  sortData(field)
  setfieldData(field)
}
    return (
      <div>
        <table className="table">
        <thead>
          <tr>
            <th onClick={()=>{fieldSortData('id')}}>
              id {fieldData === 'id' ? <Arrow /> : null}
            </th>
            <th onClick={()=>{fieldSortData('firstName')}}>
              FirstName {fieldData === 'firstName' ? <Arrow /> : null}
            </th>
            <th onClick={()=>{fieldSortData('lastName')}}>
              LastName {fieldData === 'lastName' ? <Arrow /> : null}
            </th>
            <th onClick={()=>{fieldSortData('email')}}>
              Email {fieldData === 'email' ? <Arrow /> : null}
            </th>
            <th onClick={()=>{fieldSortData('phone')}}>
              Phone {fieldData === 'phone' ? <Arrow /> : null}
            </th>
          </tr>
        </thead>
        <tbody>
            {contactData.map(
                (item=>(
                  <tr key={item.id + item.email} onClick={()=>{detailRow(item)}}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                )
              ))}
        </tbody>
        </table>
        {/* detailItemData?.id - можно было так */}
        {rowIsClick ? <DetailItem detailItemData={detailItemData}/>: null }       
      </div>
    )
}

export default Table;