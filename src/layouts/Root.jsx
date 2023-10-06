import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5 font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
