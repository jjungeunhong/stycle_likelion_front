import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Main() {
    const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-main bg-cover bg-center h-screen">
        <div className="font-montserrat font-extrabold text-main-title text-center text-8xl drop-shadow">
          <p>Recycling,</p>
          <p className="mt-1">with <span className="text-primary">style</span></p>
        </div>
        <div className="mt-8 font-quattrocento font-semibold text-center text-5xl">
          <p>learn the sustainable &</p>
          <p className="mt-1">fashionable choices</p>
        </div>
        <div className="flex flex-row space-x-5 mt-10 font-gilroy">
            <button onClick={() => {navigate('/mission')}} className="bg-white hover:bg-gray-100 text-sm py-3 px-6 border border-gray-400 rounded shadow">Learn More</button>
            <button onClick={() => {navigate('/donation')}} className="bg-black hover:bg-gray-100 text-white hover:text-black text-sm py-3 px-6 border border-gray-400 rounded shadow">&rarr; Get Started</button>
        </div>
      </div>
      <div className="font-quattrocento text-center bg-primary">
        <h1 className="my-30">Break between the sections</h1>
      </div>
      <div>
        <div className="flex flex-row">
            <div className="h-[909px] w-[334px] mt-[100px] ml-[-116px] bg-nav rounded-3xl"></div>
            <div className="flex flex-col align-center mt-[120px] xl:ml-[150px] ml-[80px]">
                <div className="font-montserrat font-extrabold text-6xl">
                <p className="">platform for</p>
                <p className="mt-2">sustainable choices</p>
                <div className="h-3 w-[380px] bg-primary"></div>
                </div>
                <div className="font-quattrocento font-bold text-2xl">
                <p>answering the question that has been</p>
                <p>ambiguous to us - Where does the clothing head to?</p>
                </div>
            </div>
        </div>
        <div className="xl:w-[347px] xl:h=[540px] bg-success">
            <p>donations</p>
        </div>
        <div className="bg-mypink">
            <p>recycle</p>
        </div>
        <div className="bg-primary">
            <p>locations</p>
        </div>
        <div className="bg-secondary">
            <p>our mission</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
