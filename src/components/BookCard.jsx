const BookCard = (props) =>{
    return(
        <>
        <div className=" w-80 m-4 bg-pink-300 rounded-md cursor-pointer ">
            <div className="image p-2 w-fit shadow-lg">
                <img src="https://imgs.search.brave.com/SxPUGzsVJWCRA2rdEOlK6MroFaKgHDfBdzcLzpSvJds/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NzUzMjg1MS9waG90/by9tYWdpYy1ib29r/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1qeE5KcGVFSlho/MkhSejB4dWJweHBM/dWM3cU4xUHpJOFkt/WXlUNXpJbjJnPQ" 
                 alt="book image" className=" rounded-sm "/>
                  {/* <img src={props.Books.cover_image}
                 alt="book image" className=" rounded-sm "/> */}
            </div>
            <div className="book">
            <div className="title text-2xl ml-1 font-bold italic">
                <h1>{props.Books.title}</h1>
            </div>
            <div className="text-[16px] ml-1 font-medium italic ">
                <h1>{props.Books.description}</h1>
            </div>
            <div className="flex justify-between ml-1 ">
             <span className="italic"><span className="font-semibold text-[16px]">Author: </span >{props.Books.author}</span> <span className="mr-4"><span className="font-semibold text-[16px]">year: </span>{props.Books.publication_year}</span>
            </div>
            </div>      
        </div>
        </>
    )
};

export default BookCard;