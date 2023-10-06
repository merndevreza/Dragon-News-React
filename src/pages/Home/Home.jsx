import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LeftSide from "../Shared/LeftSide/LeftSide";
import RightSidebar from "../Shared/RightSidebar/RightSidebar";
import BreakingNews from "./BreakingNews";


const Home = () => {
   return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         
         <div className="grid grid-cols-4 gap-6">
            <div>
               <LeftSide></LeftSide>
            </div>
            <div className="col-span-2">HOME</div>
            <div>
               <RightSidebar></RightSidebar>
            </div>
         </div>
      </div>
   );
};

export default Home;