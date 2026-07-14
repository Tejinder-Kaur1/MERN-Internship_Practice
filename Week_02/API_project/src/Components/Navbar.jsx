const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-purple-300 ">
          <ul className=" flex text-xl mb-0 p-0">
            <li>
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"
                alt="Pink Flower in Pot"
                className="h-15 w-15 m-1  "
              />
            </li>
            <div className=" flex justify-end  items-center gap-5 m-2  w-screen ">
              <li>
                <a className="text-white no-underline!" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline!">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="  text-white! no-underline!">
                  About US
                </a>
              </li>
              <li>
                <a href="#" className="  text-white! no-underline!">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="  text-white! no-underline!">
                  Feedback
                </a>
              </li>{" "}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
