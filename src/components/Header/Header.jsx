import moment from "moment/moment";

const Header = () => {
   return (
      <div className=" text-center mt-12 mb-7">
         <h1 className="old-mt text-4xl md:text-6xl mb-5">The Dragon News</h1> 
         <h2 className="text-[#706F6F] text-lg mb-2">Journalism Without Fear or Favour</h2>
         <p className="text-xl font-medium"><span className="font-bold text-[#403F3F]">{moment().format('dddd,')}</span> <span className="text-[#706F6F]">{moment().format('MMMM D YYYY')}</span></p>
      </div>
   );
};

export default Header;