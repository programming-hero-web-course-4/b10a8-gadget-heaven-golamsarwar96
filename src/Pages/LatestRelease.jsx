import { useNavigate } from "react-router-dom";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";
import { Helmet } from "react-helmet";

const LatestRelease = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven - Latest Release</title>
      </Helmet>
      <div className="bg-purple-600 text-white min-h-[250px]">
        <div className="text-center">
          <div className="">
            <h1 className="lg:text-3xl md:text-2xl pt-10 text-xl font-extrabold">
              Latest Release
            </h1>
            <p className="text-sm mt-5">
              Every Week we provide you 3 most hyped products of the week. So
              that you can be up to date with the latest trends.{" "}
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="btn bg-purple-600 text-white rounded-3xl px-5 py-2 mt-8"
          >
            Home
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold text-purple-500 mb-8">
          Top 3 Picks This Week
        </h1>
      </div>
      <Slider></Slider>
      <Newsletter></Newsletter>
    </div>
  );
};

export default LatestRelease;
