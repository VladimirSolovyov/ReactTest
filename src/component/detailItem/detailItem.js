import React from "react";

const DetailItem = ({detailItemData}) =>{
    return(
        <div>
            <p><label>id:</label><span className="text-success fs-5">{detailItemData.id}</span></p>
            <p><label>firstName:</label><span className="text-success fs-5">{detailItemData.firstName}</span></p>
            <p><label>lastName:</label><span className="text-success fs-5">{detailItemData.lastName}</span></p>
            <p><label>email:</label><span className="text-success fs-5">{detailItemData.email}</span></p>
            <p><label>phone:</label><span className="text-success fs-5">{detailItemData.phone}</span></p>
        </div>
    )
}

export default DetailItem;