import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { removItem } from "../utils/cartslice";

const Cartpage=()=>{
    const data=useSelector((store)=>store.cart.items);
    console.log(data)
    const dispatch=useDispatch();
    function clear(){
        dispatch(removItem());

    }
    return(
        <>
        <h1>carting</h1>
        <button onClick={()=>clear()}>ClearCart</button>
        {data.length}
        <div className="flex flex-wrap">
        { data.map((data,index)=>{return  <Card {...data} key={index}/>}) }
        </div>

            
        
        </>
    )

}
export default Cartpage;