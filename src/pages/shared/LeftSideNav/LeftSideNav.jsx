import { useEffect, useState } from "react";
import newsImage1 from "../../../assets/editorsInsight1.png";
import newsImage2 from "../../../assets/editorsInsight2.png";
import newsImage3 from "../../../assets/editorsInsight3.png";
import moment from "moment";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-6 font-semibold ml-2">All Category</h2>
      {categories.map(category => (
        <Link
          to={`/category/${category.id}`}
          key={category.id}
          className="block pl-12 text-[#9F9F9F] font-medium py-4 mb-2 w-full hover:bg-[#E7E7E7] rounded hover:text-black"
        >
          {category.name}
        </Link>
      ))}

      <div className="mt-5">
        <div className="space-y-3">
          <img className="rounded-lg" src={newsImage1} alt="" />
          <h2 className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between items-center text-[#9F9F9F]">
            <p>Sports</p>
            <p className="flex items-center">
              <AiFillCalendar className="text-xl mr-2"></AiFillCalendar>
              {moment().format("MMM D, YYYY")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="space-y-3">
          <img className="rounded-lg" src={newsImage2} alt="" />
          <h2 className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between items-center">
            <p>Sports</p>
            <p className="flex items-center text-[#9F9F9F]">
              <AiFillCalendar className="text-xl mr-2"></AiFillCalendar>
              {moment().format("MMM D, YYYY")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="space-y-3">
          <img className="rounded-lg" src={newsImage3} alt="" />
          <h2 className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between items-center">
            <p>Sports</p>
            <p className="flex items-center text-[#9F9F9F]">
              <AiFillCalendar className="text-xl mr-2"></AiFillCalendar>
              {moment().format("MMM D, YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
