import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="my-3 flex">
      <button className="btn btn-secondary bg-red-600 text-white">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={120}>
        <Link to="/" className="mr-12">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to="/" className="mr-12">Match Highlights: Germany vs Spain as...</Link>

        <Link to="/" className="mr-12">Match Highlights: Germany vs Spain as...</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
