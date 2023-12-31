
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimerp from "./Shimerp";




const Product=()=>{
    const [data,setdata]=useState({id:-1});
    const {pId}=useParams();
    useEffect(()=>{
        getdata();
    },[])

    async function getdata(){
        const da=await fetch("https://dummyjson.com/products/"+pId);
        const maindata=await da.json();
        setdata(maindata);
        console.log(maindata);


    }

    const images=data.images;
    console.log(images);
    return data.id===-1 ? (<Shimerp/>) :(

        <>
        <div className="flex flex-col items-center  justify-center ">
        <h1 className="font-bold text-4xl p-4">product id :{pId}</h1>
            <img src={data.thumbnail}/>
            <h1 className="font-bold text-4xl p-4">Product Name:{data.title}</h1>
            <h2 className="font-bold text-2xl p-2">Price:{data.price}$</h2>
          
            </div>
          
            <div className="flex flex-wrap">{images.map((imgsrc)=>{
                 return <img class=""  src={imgsrc}/>
                   
                })}

            </div>


            
      </>
    )
}


export default Product;
 

  