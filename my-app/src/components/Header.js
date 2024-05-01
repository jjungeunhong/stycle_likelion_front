import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Header() {
  return (
    <nav className="w-full fixed top-0 left-0 py-3 border-b bg-nav z-10">
      <div className="max-auto px-6">
        <div className="grid-col-3 flex justify-between items-center">
          <div className="flex flex-row">
            <img src="assets/icon.png" className="h-[20px] mr-2 pt-1.5"></img>
            <button
              onClick={() => {
                window.location.replace("/");
              }}
              className="font-main-title font-semibold text-menu text-xl"
            >
              stycle
            </button>
          </div>
          <div className="flex space-x-6">
            <Navbar />
          </div>

          <div className="flex space-x-6">
            <MenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
