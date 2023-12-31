import { Link } from "react-router-dom";
const Shimer=()=>{
    return (
           <div className="w-70 h-80 shadow rounded-md animate-pulse ">
            
            <h1 className="font-bold px-2 bg-slate-700"></h1>
            <img className="w-64 h-60 bg-slate-700" />
            <h2 className="px-3 bg-slate-700"></h2>
            
            <Link className="px-5 rounded-lg mr-[50%]  ml-[50%] bg-purple-400" >.....</Link>

          </div>
    )
}

export default Shimer;