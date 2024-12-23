 import { Link } from "react-router-dom";
 import { useDispatch,useSelector } from "react-redux";
 import {searchbook} from '../Redux/bookReducer'
const NavBar = () =>{
    
    const dispatch = useDispatch();
    function handleSearch (e){
        const text = e.target.value;
        dispatch(searchbook(text))
    }
   
    return(
        <>
         <nav className="w-full bg-gray-300 border-2 rounded-sm  flex items-center justify-between">

            <ul className="flex gap-10 font-semibold p-4 italic" >
                <Link to="/"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Home</li></Link>
                <Link to="/browsebooks"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Browse Books</li></Link>
                <Link to="/addbooks"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Add Book</li></Link>
                        
            </ul>

            <div className="container flex items-center justify-between  w-fit gap-20 mr-16">

            <div className="search ">
                <input type="search" onChange={(e)=> handleSearch(e)} className="p-2 rounded-lg w-96 outline-none border-4 font-semibold italic" placeholder="Enter Name of Author or Year to Search........!" />
            </div>

            <div>
                <div className="circle w-16 h-16 bg-red-800 rounded-full ">
                   <img src="https://imgs.search.brave.com/rPXq8YL52MUrDQ8qTGGwMKeUkGV2X_KdW01Q7AX1VGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvY2FydG9vbi1j/YXQtYXZhdGFyLW1h/ZGUtaW4tZm90b3It/YWktYW5pbWFsLWFu/aW1lLWF2YXRhci1j/cmVhdG9yXzIwMjMt/MDYtMjUtMDU0MjQx/X29hcHAuanBn" 
                   alt=""    className="rounded-full border-4 border-red-400"/>
                </div>
            </div>

            <div className="line cursor-pointer">

                <div className="w-6 text-black h-1 bg-black mb-1"></div>
                <div className="w-6 text-black h-1 bg-black mb-1"></div>
                <div className="w-6 text-black h-1 bg-black mb-1"></div>
                </div>  

            </div>
            

         </nav>
        
        </>
    )
};

export default NavBar;