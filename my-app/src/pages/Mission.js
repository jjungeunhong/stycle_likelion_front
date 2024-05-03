import Header from "../components/Header";

function Mission() {
  return (
    <div>
      <div className="bg-mission bg-cover bg-center bg-repeat-y mt-[50px]">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="assets/mission-under.png"
              className="w-[350px] mt-[100px] opacity-50"
            ></img>
            <p className="font-quatt font-bold text-2xl tracking-widest absolute top-[100px] left-[80px]">
              our mission
            </p>
            <p className="mt-2 font-montserrat font-extrabold text-8xl absolute top-[150px] left-[-180px]">
              Sustainability
            </p>
            <p className="w-[730px] mt-2 font-montserrat font-extrabold text-8xl absolute top-[250px] left-[-150px]">
              made easier
            </p>
            <p className="w-[1000px] mt-2 font-quatt font-bold text-4xl absolute top-[400px] left-[-250px]">
              "Sustainable Fashion is not a{" "}
              <span className="text-mypink">trend</span>, it's a{" "}
              <span className="text-mypink">responsibility</span>"
            </p>
            <p className="mt-2 font-quatt text-2xl absolute top-[445px]">
              - Livia Firth, Founder of Eco Age
            </p>
          </div>
          <div className="flex flex-row w-[600px] h-[45px] mt-[150px] bg-gray-700 rounded-full">
            <a href="#know" class="bg-gray-700 hover:bg-white text-menu hover:text-gray-700 font-quattrocento font-bold py-[10px] px-[60px] rounded-full">
                Did you know?
            </a>
            <a href="#probelm" class="bg-gray-700 hover:bg-white text-menu hover:text-gray-700 font-quattrocento font-bold py-[10px] px-[60px] rounded-full">
                Problems
            </a>
            <a href="#solution" class="bg-gray-700 hover:bg-white text-menu hover:text-gray-700 font-quattrocento font-bold py-[10px] px-[60px] rounded-full">
                Solution
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div id="know"><img src="assets/mission-letter.png" className="mt-[50px] ml-[30px]"></img></div>
            <img src="assets/clothes_mt.png" className="w-[1450px] mt-[-155px]"></img>
          </div>

          <div className="w-screen h-[500px] bg-matcha flex flex-col items-center">
            <p className="mt-[100px] font-quatt font-bold text-6xl">One fashion brand uploads</p>
            <p className="mt-[20px] font-quatt font-bold text-6xl">1,000 new styles daily and</p>
            <p className="mt-[20px] font-quatt font-bold text-6xl">50,000 new garments are</p>
            <p className="mt-[20px] font-quatt font-bold text-6xl">created every day.</p>
          </div>

          <div className="w-screen h-[550px] bg-charcoal flex flex-row">
            <div className="flex flex-col ml-[170px]">
                <p className="mt-[120px] font-quatt text-white font-bold text-5xl"><span className="text-matcha">92 million tons</span> of</p>
                <p className="mt-[10px] font-quatt text-white font-bold text-5xl">clothing end up in</p>
                <p className="mt-[10px] font-quatt text-white font-bold text-5xl">landfills every year,</p>
                <p className="mt-[10px] font-quatt text-white font-bold text-5xl">which is equivalent to </p>
                <p className="mt-[10px] font-quatt text-white font-bold text-5xl">one truckload every </p>
                <p className="mt-[10px] font-quatt text-white font-bold text-5xl">second! </p>
            </div>
            <div><img src="assets/mission-clothes.png" className="w-[450px] mt-[50px] ml-[100px]"></img></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
