import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

import qZone1 from "../../../assets/images/qZone1.png";
import qZone2 from "../../../assets/images/qZone2.png";
import qZone3 from "../../../assets/images/qZone3.png";

const RightSidebar = () => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="mb-5 text-2xl font-bold">Login With</h3>
        <div className="space-y-2">
          <button className="btn btn-outline py-2 text-lg w-full">
            <AiOutlineGoogle></AiOutlineGoogle> Login with Google
          </button>
          <button className="btn btn-outline py-2 text-lg w-full">
            <AiOutlineGithub></AiOutlineGithub> Login with Github
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="mb-5 text-2xl font-bold">Find Us On</h3>
        <div>
          <button className="btn btn-outline text-left text-lg w-full rounded-t-lg rounded-none">
            <FaFacebookF></FaFacebookF> Facebook
          </button>
          <button className="btn btn-outline border-x border-y-0 rounded-none text-lg w-full">
            <BsTwitter></BsTwitter> Twitter
          </button>
          <button className="btn btn-outline text-lg w-full rounded-b-lg rounded-none">
            <BsInstagram></BsInstagram> Instagram
          </button>
        </div>
      </div>
      <div className="bg-[#F3F3F3] p-4 rounded-lg">
        <h3 className="mb-5 text-2xl font-bold">Q-Zone</h3>
        <img className="w-full mb-5" src={qZone1} alt="" />
        <img className="w-full mb-5" src={qZone2} alt="" />
        <img className="w-full " src={qZone3} alt="" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis repudiandae quo temporibus. Perspiciatis, animi cupiditate deserunt soluta vitae officiis.</p>
    </div>
  );
};

export default RightSidebar;
