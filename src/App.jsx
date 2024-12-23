 import NavBar from "./components/NavBar"
 import { Outlet } from "react-router-dom"
 import Footer from "./components/Footer";
 import UseEffect from "./components/useEffect";
function App() {
  const { error, loading} = UseEffect();

  return (
    
   <>
     <NavBar />
    <main  className="flex-grow">
      <Outlet />
    </main>
    <Footer />
   </>


  )
}

export default App;
