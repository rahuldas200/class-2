import "./App.css";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {

  const item = [
    {
     id:'Maggie',
     amount:100,
     date: new Date(2021,8,10),
    },
    {
     id:'Layes',
     amount:200,
     date: new Date(2021,12,10),
    },
    {
     id:'Bingo',
     amount:130,
     date: new Date(2021,2,2),
    },
    {
     id:'Kurkure',
     amount:140,
     date: new Date(2021,16,3),
    },

 ];
 const AddProduct = (data) =>{
    console.log("i am in app component");
    console.log(data);
    console.log(data.title);
    console.log(data.date);
 };
  
  return (
    <div>
       <div className=" bg-yellow-400 h-auto w-[300px] text-center p-3 m-5 rounded-xl">
          <Products item ={item} />
          <NewProduct prany = {AddProduct} />
       </div>
         
      
    </div>
    

  );
}

export default App;
