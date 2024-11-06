import error404 from "/assets/404.png";
const ErrorPage = () => {
  return (
    <div className="flex items-center content-center mt-40 flex-col">
      <img className="w-[600px] mx-auto" src={error404} alt="" />
      <p className="text-4xl font-semibold">Page Not Found</p>
    </div>
  );
};

export default ErrorPage;
