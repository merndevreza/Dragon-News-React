import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Root = () => {
   return (
      <div className="container mx-auto font-poppins">
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;