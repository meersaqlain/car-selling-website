const  Navbar = () =>{
    return(
        <div>
            <div className=" bg-red-950 grid grid-cols-12  grid-rows-3 h-36 gap-2 m-2 " > 
                <div></div>
                <div className="col-span-8">Download App Via SMS
                    <hr/>
                    <div>PAKWHEELSCOM</div> </div>
                <div></div>
                
                <div>Sign Up<hr/></div>
                <div>Sign In <hr/></div>
                <div className="col-span-12 "></div>
                <div className=" "></div>
                <div>Used Cars</div>
                <div>New Cars</div>
                <div >Bikes</div>
                <div>Auto Stores</div>
                <div>Videos</div>
                <div>Forums</div>
                <div>Blogs</div>
                <div>More</div>
                <div></div>
                <div>Post an Ad</div>
            </div>
            <div className="text-white text-center bg-black">Sell Your Car On PakWheels and Get the Best Price</div>
            
        </div>
        
    )
}
export default Navbar;