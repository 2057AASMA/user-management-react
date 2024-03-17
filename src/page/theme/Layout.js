import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () =>{
    return(
        <div >

            <Header/>
            <section>
            <Sidebar/>
            <article>
            <Outlet/>
        </article>
        </section>
            <Footer/>
          
        </div>
    );
} 
export default  Layout;