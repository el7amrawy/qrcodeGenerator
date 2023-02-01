import logo from "../../assets/images/logo_150.png";

const NavBar = () => {
  return (
    <nav className="p-4 shadow font-sans flex">
      <div className="flex items-center">
        <a href="./">
          <img src={logo} className="w-12" />
        </a>
        <div className="ml-3">
          <div className=" text-2xl capitalize font-extrabold text-gray-600">
            QR Code Generator
          </div>
          <h1 className=" text-xs uppercase text-blue-900 font-bold">
            Create your QR Code
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
