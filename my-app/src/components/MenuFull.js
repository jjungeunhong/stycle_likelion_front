import Main from "../pages/Main";
import Donate from "../pages/Donate";
import Mission from "../pages/Mission";
import Recycle from "../pages/Recycle";
import { useNavigate } from "react-router-dom";

const MenuFull = () => {
  return (
    <div>
      <button onClick={Main}>
        <span>HOME</span>
      </button>
      <button onClick={Donate}>
        <span>MISSION</span>
      </button>
      <button onClick={Mission}>
        <span>DONATION</span>
      </button>
      <button onClick={Recycle}>
        <span>REPURPOSE</span>
      </button>
    </div>
  );
};

export default MenuFull;
