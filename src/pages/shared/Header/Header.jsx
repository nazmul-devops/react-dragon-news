import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="mb-2 mx-auto" src={logo} alt="" />
        <h3 className="text-lg my-2 text-[#706F6F]">
          Journalism Without Fear or Favour
        </h3>

        <h2 className="text-xl font-medium text-[#706F6F]">
          {moment().format("dddd, MMMM D, YYYY")}
        </h2>
      </div>
    </div>
  );
};

export default Header;
