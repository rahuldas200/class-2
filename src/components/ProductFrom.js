import React,{useState} from "react";



function ProductFrom(props){

    const [NewTitle,setTitle] = useState('');
    const [NewDate ,setDate] = useState('');


    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handelDate(event){
        setDate(event.target.value);
    }
    function HandleSubmit(event){
        event.preventDefault();
        const obj = {
            title:NewTitle,
            date:NewDate
        }
        const {addProduct} = props;
        addProduct(obj);
        setTitle('');
        setDate('');
    }
    



    return(
        <form onSubmit={HandleSubmit} className=" mt-4 flex flex-col gap-2">
            <div>
                <label className="mr-1">Title</label> 
                <input type = "text" value ={NewTitle} onChange={handleTitle}></input>
            </div>
            <div>
                <label className="mr-1">Date</label>
                <input type = "date" value={NewDate} onChange={handelDate} min="2023-01-01" max="2023-12-31"></input>
            </div>
            <div>
                <button type ="submit" >Add to product</button>
            </div>

        </form>
    );
}
export default ProductFrom;