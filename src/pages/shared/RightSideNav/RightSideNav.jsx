import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import amazing from "../../../assets/bg.png";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-2 font-bold">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full text-black">
          <FcGoogle className="text-2xl"></FcGoogle>Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-2xl"></FaGithub>Login With Github
        </button>
      </div>

      <div className="space-y-2 mt-10">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <div className="border p-3 space-y-3">
          <h2 className="flex items-center text-xl">
            <BsFacebook className="mr-2 text-[#706F6F]"></BsFacebook>
            <Link to="https://www.facebook.com/" target="_blank">
              Facebook
            </Link>
          </h2>
          <hr className="w-full" />
          <h2 className="flex items-center text-xl">
            <AiFillTwitterCircle className="mr-2 text-[#706F6F]"></AiFillTwitterCircle>
            <Link to="https://twitter.com/" target="_blank">
              Twitter
            </Link>
          </h2>
          <hr className="w-full" />
          <h2 className="flex items-center text-xl">
            <BsInstagram className="mr-2 text-[#706F6F]"></BsInstagram>
            <Link to="https://www.instagram.com/" target="_blank">
              Instagram
            </Link>
          </h2>
        </div>
      </div>

      {/* Q-Zone  */}
      <div className="bg-gray-100 mt-5 p-4">
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>

      <div
        className="hero my-5"
        style={{
          backgroundImage: `url(${amazing})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-white text-center">
          <div className="py-16">
            <h1 className="mb-5 text-3xl font-bold">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="bg-[#D72050] text-xl px-5 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
