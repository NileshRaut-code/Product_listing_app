import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addItems } from "../utils/cartslice";


 const Header=()=>{
    const sta=useSelector((store)=>store.cart.items.length);
   // console.log(sta);
   const dispatch=useDispatch();
    function addfood(){
      dispatch(addItems({
        "id": 1,
        "title": "iPhone 9",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ],
        "price": 549
    }));
    }

return(
    <div className="flex justify-between p-4">
            <div className="px-3 py-1">CartVilla</div>
            <ul className="flex justify-between">

            <button onClick={()=>addfood()}>+</button>
            <Link to={"/"}><li className="px-3 py-1">Home</li></Link>
            <Link to={"/About"}><li  className="px-3 py-1">About</li></Link> 
            <Link to={"/"}><li  className="px-3 py-1">Login</li></Link>
            <Link to={"/"}><li  className="px-3 py-1">Logiut</li></Link>
            <Link to={"/"}><li  className="px-3 py-1">Cart:{sta} Order</li></Link>
            <Link to={"/cart"}><li  className="px-3 py-1">Cart</li></Link>
            </ul>

        </div>
)


}

export default Header;