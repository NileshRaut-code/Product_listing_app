import { useState ,useEffect } from "react"

export  default function useGetdata (){

    const [filterdata,setfilterddata]=useState({title:"asd"});
   
    useEffect(()=>{
        getdata();
    },[filterdata])
    
 async function getdata(){
            const x =await fetch('https://dummyjson.com/products')
            const y=await x.json();
            setfilterddata(y.products);
        //    console.log(filterdata);
        //     setjso(y.products);
        }

    return filterdata;

}

