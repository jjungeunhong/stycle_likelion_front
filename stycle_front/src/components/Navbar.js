import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-2 flex flex-row items-center justify-between">
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer px-3 flex flex-col justify-center">
            <p
              onClick={() => {
                window.location.replace("/mission");
              }}
              className="font-gilroy text-menu px-10 text-lg font-normal hover:font-bold"
            >
              MISSION
            </p>
          </div>

          <div className="cursor-pointer px-3 flex flex-col justify-center">
            <p
              onClick={() => {
                window.location.replace("/donation");
              }}
              className="font-gilroy text-menu px-10 text-lg font-normal hover:font-bold"
            >
              DONATION
            </p>
          </div>

          <div className="cursor-pointer px-3 flex flex-col justify-center">
            <p
              onClick={() => {
                window.location.replace("/recycle");
              }}
              className="font-gilroy text-menu px-10 text-lg font-normal hover:font-bold"
            >
              REPURPOSE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
