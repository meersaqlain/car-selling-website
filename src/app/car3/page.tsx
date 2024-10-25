import Link from "next/link";
import Image from "next/image";
import img2 from "../img2.jpg"
export default function car2(){
    return(
        <div className="bg-black">
            <h1 className="flex justify-center text-white bg-black font-bold text-2xl ">

                Honda City 2024  Price in Pakistan, Images , Reviews & Specs   
            </h1>

            <div className="grid grid-cols-3 m-10">
               <div></div>
            <Image className=""  src={img2} alt=" Honda City" title="Honda City"/>
            </div>
            <div className="flex justify-center m-2 gap-4 text-white">
                <button className="bg-blue-700 py-3 px-6 rounded-lg border border-white">Book a test drive</button>
                <button className="bg-blue-700 py-3 px-6 rounded-lg border border-white">Request Band Finance</button>
                <button className="bg-blue-700 py-3 px-6 rounded-lg border border-white">Visit Place</button>
                <button className="bg-blue-700 py-3 px-6 rounded-lg border border-white">Car Inspection</button>
            </div>
            <h1 className="flex justify-center text-2xl font-semibold m-10">Vehicle Description</h1>
            <div className="flex justify-center m-10">
                <p><b>Number of Doors</b> 4  &emsp; <b>Engine</b> 1800 CC &emsp; <b>Driven</b> 9500 KM &emsp; <b>Suspention Type</b>: Soft Suspention
                <br/>
                <b>Avg</b> 13 km per ltr &emsp; <b>Transmission</b> Automatic &emsp; <b>Fuel Type</b> High Octane </p>

            </div>
            <h1 className="text-2xl flex justify-center text-green-600">PKR 58,00,000</h1>
           
            <div className="flex justify-center">
            
            <Link href="/car_details"><button className="flex m-10 bg-blue-700 py-5 px-10 rounded-lg border border-white justify-center">Make Payment</button></Link>
            </div>
        </div>
    )
}
