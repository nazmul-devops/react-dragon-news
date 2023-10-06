import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="mb-2" src={logo} alt="" />
      </div>

      <h3 className="text-lg my-2 text-center text-[#706F6F]">
        Journalism Without Fear or Favour
      </h3>

      <h2 className="text-xl text-center font-medium text-[#706F6F]">
        {moment().format("dddd, MMMM D, YYYY")}
      </h2>
    </div>
  );
};

export default Header;
