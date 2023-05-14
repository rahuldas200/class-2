import React from "react";


 const ProductDate = (props) =>{

 const month = props.date.toLocaleString('en-us',{month: 'long'});
 const day = props.date.toLocaleString('en-us',{day: '2-digit'});
 const year  = props.date.getFullYear();


    return(
        <div className="bg-black w-[80px] m-2 p-1 rounded-lg">
            <div className="text-white text-sm p-1">{month}</div>
            <div className="text-red-500 text-2xl ">{day}</div>
            <div className="text-white text-sm ">{year}</div>

        </div>
    );
 }
 export default ProductDate; 