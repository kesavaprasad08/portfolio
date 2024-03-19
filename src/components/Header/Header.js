const Header = () => {
  let isOpen = false;

  const toggleHandler = () => {
    // const button = document.getElementById('toggleBtn');
    const dropdown = document.getElementById("drpDwn");
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="fixed w-screen items-end    ">
      <div className="bg-navGreen p-3 flex justify-between w-full lg:pl-16 border-b border-slate-700">
        <p>
          <span className="text-white">KESAVA </span>{" "}
          <span className="text-green-500"> PRASAD</span>
        </p>
        <ul className="hidden lg:flex pr-20 text-white">
          <li className="ml-5 hover:text-green-500">
            <a href="#">Home </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#">About </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#">Skills </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#">Portfolio </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#">Contact </a>
          </li>
        </ul>
        <button className="lg:hidden text-white" id="toggleBtn" onClick={toggleHandler}>
          ☰<i className="fa fa-caret-down"></i>
        </button>
      </div>
      <ul
        className=" sticky lg:hidden w-full bg-navGreen flex flex-col items-center text-white p-2"
        id="drpDwn"
      >
        <li className="ml-3 hover:text-green-500 w-full text-center p-1">
          <a href="#">Home </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#">About </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#">Skills </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#">Portfolio </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#">Contact </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
