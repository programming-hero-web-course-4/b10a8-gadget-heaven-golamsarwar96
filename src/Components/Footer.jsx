const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white text-base-content p-10 flex justify-center items-center flex-col mt-20">
        <div>
          <nav className="text-center">
            <h6 className="text-4xl font-bold mb-3">Gadget Heaven</h6>
            <p className="">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </nav>
        </div>
        <div className="flex md:gap-52 gap-8">
          <nav className="text-center flex flex-col gap-2">
            <h6 className="text-black text-lg mb-2 font-bold">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav className="text-center flex flex-col gap-2">
            <h6 className="text-black text-lg mb-2 font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
          </nav>
          <nav className="text-center flex flex-col gap-2">
            <h6 className="text-black text-lg mb-2 font-bold">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
