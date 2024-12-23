import { useState } from "react";

const Image =() =>{
    const[curreentImage , setCurreentImage] = useState(0);
    const Images = [
       "https://imgs.search.brave.com/dfdLwx7Wg2GeRxQGun3VrxcRPTAmhdcgiRtfQPN8wSs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn",
       "https://imgs.search.brave.com/IUJgLSdJk7gGkiXhsjoevQ4vNnhfh-UgE6s-zuLF3xE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/MTEwNDczNC9waG90/by93b21hbi1zaWxo/b3VldHRlLWF0LXN1/bnNldC1vbi1oaWxs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zUHJDSGNsdFM0/VHR4VVhIeFQ5ckxY/ckcxNTRMcGY3MEJO/RFFma3lzUm5RPQ",
       "https://imgs.search.brave.com/4nUb-i1pX5ZR3WDaGCG6AK4RRciqVKZUrwqjyC_nUF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzYwLzkyLzIz/LzM2MF9GXzk2MDky/MjM1M19XUVdIaW5H/Rk9nM01SWjY5YWhk/YWJrYjZxV3I2Tms5/Yy5qcGc"
    ];

    function handleNext(){
        setCurreentImage((curreentImage + 1) % Images.length)
    };

    function handlePrev(){
        setCurreentImage((curreentImage - 1 + Images.length) % Images.length)
    }
    return (

        <>
         <h1 className="font-bold text-2xl text-center m-2">image gallary</h1>
         <div className="flex justify-center">
            <img src={Images[curreentImage]} alt="Image Url"  className="rounded-xl"/>
         </div>
            <div className="flex justify-center">
            <button onClick={handlePrev} className="m-5 border-2 border-black p-2 hover:bg-green-400 rounded-md">Previous</button>
            <button onClick={handleNext} className="m-5 border-2 border-black p-2 hover:bg-green-400 rounded-md">Next</button>
            </div>
        </>
    )
}

export default Image;