import ProductFrom from "./ProductFrom";

function NewProduct(props){
    const {prany} = props;
    const ProductAdd = (Productdata) =>{
        console.log(Productdata);
        console.log("i am in newProduct");
        prany(Productdata);
    }



    return(
        <div>
            <ProductFrom addProduct ={ProductAdd} />
        </div>
    );
}
export default NewProduct;