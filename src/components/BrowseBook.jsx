import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BrowseBook = () => {
  
  const data = useSelector((store) => store.booksArray.books);
  const searchtext = useSelector((store) => store.booksArray.search);
    const { category } = useParams();
  const [categorys, setCategorys] = useState(category || "");
  const [filteredBooks, setFilteredBooks] = useState([]);
 
  useEffect(() => {
    setCategorys(category || "");
  }, [category]);

  useEffect(() => {
    let updatedBooks = data;
    if (categorys) {
      updatedBooks = updatedBooks.filter((book) =>
        book.genre.some((g) => g.toLowerCase() === categorys.toLowerCase())
      );
    }
    if (searchtext) {
      updatedBooks = updatedBooks.filter(
        (book) =>
          book.author.toLowerCase().includes(searchtext.toLowerCase()) ||
          book.publication_year.toString().includes(searchtext)
      );
    }

    setFilteredBooks(updatedBooks);
  }, [categorys, searchtext, data]);

  return (
    <>
      <div className={`${filteredBooks.length === 0 ? "h-[360px]" : ""}`}>
        <div className="flex flex-grow">
          <select
            name="Category"
            value={categorys}
            className="p-2 m-4 rounded-lg text-xl font-semibold italic"
            onChange={(e) => {
              setCategorys(e.target.value);
            }}
          >
            <option value="">---Please select Category---</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Poetry">Poetry</option>
            <option value="Fable">Fable</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-5">
          {filteredBooks &&
            filteredBooks.map((book) => {
              return (
                <div key={book.id}>
            <Link to={`/book/${book.id}`}><BookCard key={book.id} Books = {book} /></Link>
            </div>
             )
            })}
        </div>
      </div>
    </>
  );
};

export default BrowseBook;
