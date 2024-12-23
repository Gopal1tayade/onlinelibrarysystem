 import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <>
        <footer className=" border-4 border-gray-300 bg-gray-200 ">
            <section className="title text-2xl font-semibold italic">
                <h1>📚 Empowering Minds, One Book at a Time! 🌟</h1>
            </section>
            <section>
            <ul className=" font-semibold p-4 italic w-40" >
                <Link to="/"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Home</li></Link>
                <Link to="/browsebooks"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Browse Books</li></Link>
                <Link to="/addbooks"><li className="  p-2 rounded-sm hover:bg-slate-200 ">Add Book</li></Link>
            </ul>
            </section>
            <section>
                <ul className="flex justify-around font-medium italic p-1">
                    <li className="cursor-pointer hover:text-blue-400 delay-150">Term Of Use |</li>
                    <li className="cursor-pointer hover:text-blue-400 delay-150">About the Library |</li>
                    <li className="cursor-pointer hover:text-blue-400 delay-150">Privacy Policy |</li>
                    <li className="cursor-pointer hover:text-blue-400 delay-150">Contact Us |</li>
                    <li className="cursor-pointer hover:text-blue-400 delay-150">Adverties with Us |</li>
                </ul>
            </section>
            <section className="font-bold italic m-2">
                <h1>© 2024 Gopal Tayade | Crafted with passion for knowledge and innovation. All Rights Reserved.</h1>
            </section>
        </footer>
        </>
    );
};

export default Footer;