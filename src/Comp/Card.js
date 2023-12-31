import { Link } from "react-router-dom"


export const Card=({id,title,images,price,des})=>{
       
    return (
       <div className="w-64 h-80">
        
         <h1 className="font-bold px-2">{title}</h1>
         <img className="w-64 h-60" src={images[0]}/>
         <h2 className="px-3">{price}$</h2>
         {/* <h2>{des}</h2> */}
         <Link className="px-5 rounded-lg mr-[50%]  ml-[50%] bg-purple-400" to={"/product/"+id}>Click</Link>

       </div>
    )
}

export const Cardstock =(Card)=>{
    return(data)=>{
        return(
            <div>
                <label>Stocked Out</label>
                <Card {...data} />
            </div>
        )
    }

}