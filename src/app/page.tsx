import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import img4 from "../app/img4.png"
import img3 from "../app/img3.jpg"
import img2 from "../app/img2.jpg"
import img1 from "../app/img1.jpg"
export default function Home() {
  return (
    <div>
    <div>
     <Navbar/>
      </div>
      <div className="grid grid-cols-2 bg-white border border-red-950 h-80 ">
      <div className=" grid justify-center text-blue-800 m-6"><h3 className="text-2xl font-bold ">Post your Ad on PakWheels</h3>
        <div className="text- row-span-12 text-gray-700"><p>Post your Ad in 3 easy Steps</p>
        <p>Get Genuine offers from Verified Buyers</p>
        <p>Sell your car Fast at the best Price</p>
        <button className="py-3 px-7 rounded-lg bg-blue-800 text-white m-4"> Post Your Ad</button>
        </div>
      </div>

      <div className="grid justify-center text-blue-800 m-6"><h3 className="text-2xl font-bold">Try PakWheels Sell It For Me</h3>
      <div className="text- row-span-12 text-gray-700"><p>Dedicated Sales Expert to Sell your Car</p>
        <p>We Bargain for you and your share the Best Offer</p>
        <p>We ensure Sage & Secure Transaction</p>
        <button className="py-3 px-7 rounded-lg bg-blue-800 text-white m-4"> Register Your Car</button>
        </div>
      </div>
      </div>
      <h1 className="bg-black font-bold gap-5 m-5">Featured New Cars</h1>
      <div className="bg-black flex gap-5 m-5">
      <p>Popular</p> <p>Upcoming </p> <p>Newly Launched</p>
      </div>

     <div className=" bg-black grid grid-cols-6 grid-rows-2  gap-2"> 
   
     <div></div>
     <Link href="/car1">
     <button > 
      <Image  src={img1} alt="Toyota Corolla" title="Toyota Corolla"/>
      <nav className="bg-white">
      <p className="text-blue-500 font-bold">Toyota Corolla</p>
      <p className="text-green-500">PKR 59.7 - 75.5 lacs</p>
      </nav>
      </button>
      </Link>
      <Link href="/car2">
      <button >
      <Image  src={img2} alt="Honda Civic" title="Honda Civic"/>
      <nav className="bg-white">
      <p className="text-blue-500 font-bold">Honda Civic</p>
      <p className="text-green-500">PKR 86.6 - 99.0 lacs</p>
      </nav>
      </button>
      </Link>
      <Link href="/car3">
      <button >
      <Image  src={img3} alt="Honda City" title="Honda City"/>
      <nav className="bg-white">
      <p className="text-blue-500 font-bold">Honda City</p>
      <p className="text-green-500">PKR 46.5 - 58.5 lacs</p>
      </nav>
      </button>
      </Link>
      <Link href="/car4">
      <button >
      <Image  src={img4} alt="Suzuki Alto" title="Suzuki Alto"/>
      <nav className="bg-white">
      <p className="text-blue-500 font-bold">Suzuki Alto</p>
      <p className="text-green-500">PKR 23.3 - 30.5lacs</p>
      </nav>
      </button>
      </Link>
     </div> 
     
    <div>
      <Footer/>
    </div>
  </div> 
       
  )
}


