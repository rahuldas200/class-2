import React,{ useState } from "react";
import Card from "./Cards";
import ProductDate from "./ProductDate";
const ProductItem = (props) =>{

    const [title,setTitle] = useState(props.title);

    const handelClick =() =>{
        console.log(" clicked....");
        setTitle("popcon");
    }

    return (
        <Card>
            <ProductDate date = {props.date} />
            <div className="text-2xl">
                <h2>{title}</h2>
            </div>

            <button onClick={handelClick} className=" bg-orange-500">Add to Card</button>
        </Card>
    );

}
export default ProductItem;