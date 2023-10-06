import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] md:flex text-center">
      <button className="btn bg-[#D72050] text-white text-xl font-medium rounded-none m-4">Breaking News</button>
      <Marquee pauseOnHover={true} speed={120} className="text-[#403F3F] text-lg font-semibold">
        <Link className="mr-5" to="/">Match Highlights: Germany vs Spain... </Link>
        <Link className="mr-5" to="/">Shekh Hasina Visited Bay of Bengal... </Link>
        <Link className="mr-5" to="/">Match Highlights: Germany vs Spain... </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
