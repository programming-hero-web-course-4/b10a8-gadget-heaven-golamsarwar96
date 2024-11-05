import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-purple-600 text-white min-h-[500px] relative mb-32 md:mb-64 lg:mb-[450px]">
      <div className="hero-content text-center mt-3">
        <div className="">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="md:w-2/3 mx-auto py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn bg-white rounded-3xl px-7 text-purple-700"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute lg:left-52 md:left mt-5 border-2 p-5 rounded-3xl">
        <img
          className="lg:h-[563px] rounded-3xl"
          src="/assets/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
