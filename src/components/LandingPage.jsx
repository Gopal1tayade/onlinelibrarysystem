import { Link } from "react-router-dom";
const LandingPage = () =>{
    const categories = ["Fiction","Non-Fiction","Science Fiction","Fantasy","Poetry","Fable","Mystery"];
     return(
        <>    
        <div className=" text-center h-36  p-10 font-semibold italic text-lg border-b-4">

           <h1 className="text-2xl">📚 Welcome to the Online Library System! 📖</h1>
            <p>Discover, explore, and enjoy a world of knowledge at your fingertips.
            Search for your favorite books, manage your borrowings, and unlock the joy of reading!</p>
            <h1>✨ Your journey into the world of books starts here. Happy Reading! 🌟"</h1>

        </div>

        <div className="category mt-2 mb-4">
            <ul className="flex  justify-around items-center text-2xl font-semibold italic cursor-pointer ">
            {categories.map((category, index) => (
          <li key={index}  className="hover:text-blue-700 delay-75">
            <Link to={`/browsebooks/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
             
            </ul>
        </div>
            
        </>
     )
}

export default LandingPage;