import React, {Fragment} from "react"
import Loader from "./../loader/loader"
import Table from "./../table/table"


const TableBody = ({
    contactData,
    sortData,
    directionSort,
    rowItem,
    detailRow,
    isLoading, 
    rowIsClick,   
}) => {
    return (        
        isLoading? <Loader /> : 
        <Fragment>
            <Table contactData={contactData} 
            sortData={sortData} 
            directionSort={directionSort} 
            detailRow={detailRow}
            detailItemData={rowItem}
            rowIsClick={rowIsClick}/>            
        </Fragment>
    )
}

export default TableBody;