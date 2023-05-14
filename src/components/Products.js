import React from "react";
import ProductItem from "./ProductItem";



function Products(props) {
    

    return(

        <div className="flex flex-col gap-3">
           <ProductItem 
           title = {props.item[0].id}
           amount = {props.item[0].amount}
           date = {props.item[0].date}
           /> 

           <ProductItem 
           title = {props.item[1].id}
           amount = {props.item[1].amount}
           date = {props.item[1].date}
           /> 

           <ProductItem 
           title = {props.item[2].id}
           amount = {props.item[2].amount}
           date = {props.item[2].date}
           /> 

           <ProductItem 
           title = {props.item[3].id}
           amount = {props.item[3].amount}
           date = {props.item[3].date}
           /> 

         

        </div>

    );
}
export default Products;