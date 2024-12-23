import { useSelector, useDispatch } from "react-redux";
import { addNewBook } from '../Redux/bookReducer';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const bookData = useSelector((store) => store.booksArray.books);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const publicationYear = form.publicationYear.value;
        const description = form.description.value;
        const coverImage = form.coverImage.value;
        const category = form.category.value;

        if (!title || !author || !publicationYear || !description || !coverImage || !category) {
            alert('The information is insufficient!');
            return;  
        }

        let categorys = [];
        categorys.push(category);

        const book = {
            id: new Date().getTime(), 
            title: title,
            author: author,
            publication_year: publicationYear,
            genre: categorys,
            description: description,
            cover_image: coverImage,
        };

        dispatch(addNewBook(book));    
        form.reset();  
        navigate("/browsebooks");
    }

    useEffect(() => {
        console.log("Updated bookData:", bookData);
    }, [bookData]);

    return (
        <>
            <div className="h-fit p-10 border-2 border-black rounded-xl">
                <form onSubmit={handleSubmit} className="border-4 w-fit p-10 rounded-2xl ">
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Title: </label>
                        <input type="text" name="title" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Author: </label>
                        <input type="text" name="author" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Publication Year: </label>
                        <input type="text" name="publicationYear" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Description: </label>
                        <input type="text" name="description" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Cover Image: </label>
                        <input type="text" name="coverImage" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <label className="text-xl font-semibold italic">Category: </label>
                        <input type="text" name="category" className="ml-4 p-2 w-80 rounded-xl outline-blue-100 italic font-medium" />
                    </div>
                    <div className="p-2">
                        <button
                            type="submit"
                            className="mt-4 p-2 bg-blue-500 text-white rounded-xl font-semibold"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBook;
