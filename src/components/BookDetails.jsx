 import { useState } from "react";
import { useSelector } from "react-redux";
 import { useParams } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
const BookDetails = () =>{
    const {id} = useParams();
    const [bookId ,setBookId ] = useState(id || 0);
    const books = useSelector((store) => store.booksArray.books);  
     const filterBook = books.filter((book) => book.id == bookId);
     const Books = filterBook[0];
     const navigate = useNavigate();
    function handleBack(){
        navigate("/browsebooks");
    }

    return(
        <>
         <div className="Details bg-gray-200 m-2 border-4 flex">
            <div className="image ">
                <img src="https://imgs.search.brave.com/DSxMttNhxIw_S3zc0qicVel7pvKKH5Yd8sd84nbBNVE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzAwLzg4Lzk2/LzM2MF9GXzEwMDA4/ODk2NDhfeGNrTUZW/Q2F1WFVwaEF2cmNn/NVJCaXpJc3FweUVr/VlQuanBn" alt="Book Image"
                className="rounded-xl shadow-xl" />
            </div>

            <div className="m-5">                
            <div className="title">
                <h1 className="text-3xl font-bold italic m-2">{Books?.title}</h1>
            </div>
            <div className="description">
                <h1 className="text-lg italic ml-2 font-medium">{Books?.description}</h1>
                <div className="flex justify-around m-2">
                <span className="italic font-semibold ">Rating: {(Math.random() * 10).toFixed(2)}</span> <span className="italic font-semibold">Category : {Books?.genre}</span>
                </div>
            </div>
            <div className="author flex gap-10 m-4">
                <span className="font-medium italic">Author: {Books?.author}</span> <span className="font-medium italic">Year: {Books?.publication_year}</span>
            </div>
            <div className="btn text-center m-10">
                <button onClick={handleBack} className=" bg-pink-200 p-3 rounded-xl font-semibold italic hover:bg-green-300 hover:scale-110 ">Back to Browse</button>
            </div>
            </div>
         </div>
        </>
    )
};

export default BookDetails;