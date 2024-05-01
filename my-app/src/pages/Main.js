import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-main bg-cover bg-center h-screen">
        <div className="font-montserrat font-extrabold text-main-title text-center text-8xl drop-shadow">
          <p>Recycling,</p>
          <p className="mt-1">
            with <span className="text-primary">style</span>
          </p>
        </div>
        <div className="mt-8 font-quattrocento font-semibold text-center text-5xl">
          <p>learn the sustainable &</p>
          <p className="mt-1">fashionable choices</p>
        </div>
        <div className="flex flex-row space-x-5 mt-10 font-gilroy">
          <button
            onClick={() => {
              navigate("/mission");
            }}
            className="bg-white hover:bg-gray-100 text-sm py-3 px-6 border border-gray-400 rounded shadow"
          >
            Learn More
          </button>
          <button
            onClick={() => {
              navigate("/donation");
            }}
            className="bg-black hover:bg-gray-100 text-white hover:text-black text-sm py-3 px-6 border border-gray-400 rounded shadow"
          >
            &rarr; Get Started
          </button>
        </div>
      </div>

      <div className="h-[50px] font-quattrocento text-center bg-primary"></div>

      <div>
        <div className="flex flex-row bg-menu bg-opacity-50">
          <div className="h-[909px] w-[334px] my-[100px] ml-[-116px] bg-nav rounded-3xl"></div>
          <div className="flex flex-col mt-[120px] xl:ml-[150px] ml-[80px]">
            <div className="flex flex-col align-center">
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
            <div className="flex flex-row mt-10">
              <div
                className="flex flex-col w-[357px] h-[540px] ml-[-200px] mr-10 bg-success rounded-3xl cursor-pointer"
                onClick={() => {
                  window.location.replace("/donation");
                }}
              >
                <img
                  src="assets/main-donation.png"
                  className="w-[250px] mt-3"
                ></img>
                <p className="ml-5 font-quatt text-5xl text-white font-bold">
                  donations
                </p>
                <p className="mt-3 ml-5 font-quatt text-white text-xl ">
                  Discover local recycling options:
                </p>
                <p className="ml-5 font-quatt text-white text-xl">
                  thrift stores and more.
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="flex flex-row w-[650px] h=[240px] bg-mypink rounded-3xl cursor-pointer"
                  onClick={() => {
                    window.location.replace("/recycle");
                  }}
                >
                  <img
                    src="assets/main-recycle.png"
                    className="w-[200px] m-7 "
                  ></img>
                  <div className="flex flex-col mt-[55px]">
                    <p className="ml-5 font-quatt text-5xl text-white font-bold">
                      recycle
                    </p>
                    <p className="mt-3 ml-5 font-quatt text-white text-xl ">
                      Explore innovative techniques to give
                    </p>
                    <p className="ml-5 font-quatt text-white text-xl">
                      your old garments new life and reduce
                    </p>
                    <p className="ml-5 font-quatt text-white text-xl">
                      enviornmental impact.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-[25px]">
                  <div className="w-[312px] h=[285px] mr-[20px] bg-primarydown rounded-3xl">
                    <img
                      src="assets/main-location.png"
                      className="w-[150px]"
                    ></img>
                    <p className="mt-[-10px] ml-5 font-quatt text-5xl text-white font-bold">
                      locations
                    </p>
                    <p className="mt-1 ml-5 font-quatt text-white text-xl ">
                      find the most sustainable
                    </p>
                    <p className="ml-5 mb-3 font-quatt text-white text-xl">
                      option closest to you.
                    </p>
                  </div>
                  <div
                    className="w-[312px] h=[285px] bg-secondary rounded-3xl cursor-pointer"
                    onClick={() => {
                      window.location.replace("/mission");
                    }}
                  >
                    <img
                      src="assets/main-mission.png"
                      className="w-[100px] m-6"
                    ></img>
                    <p className="mt-[-10px] ml-5 font-quatt text-5xl text-white font-bold">
                      our mission
                    </p>
                    <p className="mt-1 ml-5 font-quatt text-white text-xl ">
                      we plan to present solutions
                    </p>
                    <p className="ml-5 mb-3 font-quatt text-white text-xl">
                      and provide answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center bg-main-ppl bg-cover bg-center h-screen z-10">
          <div className="flex flex-col items-center justify-center w-[1000px] h-[750px] bg-white bg-opacity-50 rounded-3xl z-9">
            <p className="font-montserrat text-6xl font-extrabold">
              meet the team
            </p>
            <div className="h-3 w-[500px] bg-primary"></div>
            <p className="font-quattrocento text-2xl font-bold my-5">
              we find the solutions, and we create what is best for the users
            </p>
            <div className="flex flex-row mb-5">
              <div className="flex flex-col items-center mx-10">
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/jung-eun-hong/");
                  }}
                >
                  <div className="w-[200px] h-[200px] bg-success rounded-3xl"></div>
                  <img
                    src="assets/jungeun.png"
                    className="absolute bottom-0 object-fill"
                  ></img>
                </div>
                <p className="font-gilroy text-xl font-extrabold">
                  Jung Eun Hong
                </p>
                <p className="font-gilroy"> Product Manager / Developer</p>
              </div>
              <div className="flex flex-col items-center mx-10">
                <div className="relative">
                  <div className="w-[200px] h-[200px] bg-secondary rounded-3xl"></div>
                  <img
                    src="assets/chris.png"
                    className="absolute bottom-0 object-fill"
                  ></img>
                </div>
                <p className="font-gilroy text-xl font-extrabold">
                  Christopher Lee
                </p>
                <p className="font-gilroy">Developer</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center mx-10">
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/jiyouivylee/");
                  }}
                >
                  <div className="w-[200px] h-[200px] bg-mypink rounded-3xl"></div>
                  <img
                    src="assets/ivy.png"
                    className="absolute bottom-0 object-fill"
                  ></img>
                </div>
                <p className="font-gilroy text-xl font-extrabold">Ivy Lee</p>
                <p className="font-gilroy">UI UX Designer / Developer</p>
              </div>
              <div className="flex flex-col items-center mx-10">
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/jieun-lim-03b359294/"
                    );
                  }}
                >
                  <div className="w-[200px] h-[200px] bg-primary rounded-3xl"></div>
                  <img
                    src="assets/jieun.png"
                    className="absolute bottom-0 object-fill"
                  ></img>
                </div>
                <p className="font-gilroy text-xl font-extrabold">Jieun Lim</p>
                <p className="font-gilroy">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
