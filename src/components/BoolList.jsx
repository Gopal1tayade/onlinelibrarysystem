import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BookList = () =>{ 
     const data = useSelector((store) => store.booksArray.books);
     const searchtext = useSelector((store) => store.booksArray.search);
     const [filteredBooks, setFilteredBooks] = useState([]);

     useEffect(() => {
      let updatedBooks = data;
      if (searchtext) {
        updatedBooks = updatedBooks.filter(
          (book) =>
            book.author.toLowerCase().includes(searchtext.toLowerCase()) ||
            book.publication_year.toString().includes(searchtext)
        );
      }
  
      setFilteredBooks(updatedBooks);
    }, [searchtext, data]);
    
     return(
        <>

       <div className='flex flex-wrap gap-5'>
        {filteredBooks && filteredBooks.map((book) =>{
   
         return (
            <div key={book.id}>
            <Link to={`/book/${book.id}`}><BookCard key={book.id} Books = {book} /></Link>
            </div>
         )

        })}
       </div>
        </>
     )
};

export default BookList;