import Link from "next/link"
export default function details(){
    return(
        
        <div className="bg-gray-800 grid grid-rows-none">

       <div className="flex justify-center font-bold text-3xl text-black ">
        <h1 className="m-10">Enter Your Details</h1>
       </div>

       <div>
        <form className="flex justify-center m-40 bg-gray-800  gap-4 flex-col items-center  ">
            <input type="name" className="p-2 w-2/6  border border-black text-black" placeholder="Enter Your Name" />
            <input type="email"className="p-2 w-2/6  border border-black text-black" placeholder="Enter Your Email "/>
            <input type="password" className="p-2 w-2/6  border border-black text-black" placeholder="Card Number"/>
            <input type="address"className="p-2 w-2/6  border border-black text-black" placeholder="Address"/>
        </form>
       
       </div>

       <div className="flex justify-center " >
       <Link href="/thanku"><button className=" bg-blue-700 py-5 px-10 gap-2  font-semibold border border-black rounded-lg">Place your order</button></Link>
       </div>

       <div/>
        </div>
    )
}