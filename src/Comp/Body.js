import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimer from "./Shimer.js";
import { filters } from "../utils/Helper.js";
import { useSelector,useDispatch } from "react-redux";
import { addItems } from "../utils/cartslice.js";



export default function Body(){
    let [searchtxt,setsearchtext]=useState("");
    let[filterdata,setfilterddata]=useState({title:"asd"});
    let [datas,setjso]=useState({title:"asd"});
    //console.log(data);
    const dispatch=useDispatch();
    function adding(title){

        dispatch(addItems(title))
    }
useEffect(()=>{
    getdata();
},[setfilterddata])

    async function getdata(){
        const x =await fetch('https://dummyjson.com/products')
        const y=await x.json();
        setfilterddata(y.products);
      // console.log(filterdata);
        setjso(y.products);
    }

    const Card=({id,title,images,price,des})=>{
       
        return (
           <div className="w-64 h-80">
            
             <h1 className="font-bold px-2">{title}</h1>
             <img className="w-64 h-60" src={images[0]}/>
             <h2 className="px-3">{price}$</h2>
             {/* <h2>{des}</h2> */}
             
             <button onClick={()=>{adding({id,title,images,price,des})}}>++</button>
             <Link className="px-5 rounded-lg mr-[50%]  ml-[50%] bg-purple-400" to={"product/"+id}>Click</Link>

           </div>
        )
    }

    const Heady=()=>{
        return(
            <div className="flex items-center  justify-center space-x-4  px-5 py-5 content-center bg-pink-100">

            <input className="w-80 p-3 rounded-lg" onChange={(e)=>{
           setsearchtext(e.target.value);
           const ress=filters(datas,searchtxt)
           setfilterddata(ress);
       }} value={searchtxt}/>
    
       <button className="rounded-lg p-3  text-white bg-orange-700"  onClick={()=>{
           console.log(datas);
           const ress=filters(datas,searchtxt)
           console.log(datas.title);
           console.log(ress);
           setfilterddata(ress);
       }}>search</button>
       </div>
        )
    }
    
   if(filterdata.title==="asd") return (<><><Heady/> <div className="flex flex-wrap space-x-8 content-stretch px-5"><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/><Shimer/></div></></>)
   else return(
        <>
       <Heady/>
       
      <div className=" flex flex-wrap space-x-8  px-5">
        
        { filterdata.map((data,index)=>{return  <Card {...data} key={index}/>}) }

        
    
      </div>
        
        
        </>
    )
}