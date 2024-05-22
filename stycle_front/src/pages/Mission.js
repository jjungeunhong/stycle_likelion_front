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
            <p className="font-quatt font-bold text-2xl tracking-widest absolute top-[100px] left-[105px]">
              our mission
            </p>
            <p className="mt-2 font-montserrat font-extrabold text-8xl absolute top-[150px] left-[30px]">
              Easier
            </p>
            <p className="w-[1000px] mt-2 font-montserrat font-extrabold text-8xl absolute top-[250px] left-[-170px]">
              Sustainability
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
            <a href="#problem" class="bg-gray-700 hover:bg-white text-menu hover:text-gray-700 font-quattrocento font-bold py-[10px] px-[60px] rounded-full">
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

          <div id="problem" className="flex flex-col w-screen items-center bg-success z-5">
            <div className="relative mt-[30px]">
              <p className="font-montserrat text-white text-[200px] font-bold drop-shadow-lg z-4">MICRO</p>
              <img src="assets/mission-micro.png" className="absolute h-[550px] top-0 left-[200px] z-3"></img>
              <p className="absolute font-montserrat text-white text-[200px] top-[200px] left-[-50px] font-bold drop-shadow-lg z-1">PLASTIC   </p>
            </div>
            <div className="flex flex-col mt-[160px] items-center">
              <p className="mt-[5px] font-quatt text-white text-2xl">Our clothes are made of plastic and this plastic comes from synthetic textiles</p>
              <p className="mt-[5px] font-quatt text-white text-2xl">like polyester. The release of microplastic is the highest when new clothes</p>
              <p className="mt-[5px] font-quatt text-white text-2xl">are washed for the first time. An average 6 kg load of laundry releases more</p>
              <p className="mt-[5px] font-quatt text-white text-2xl">than 700,000 miscroscopic plastic fibers into wastewater. As garments are </p>
              <p className="mt-[5px] font-quatt text-white text-2xl">used for a short time and replaced quickly, fast fashion accounts for the</p>
              <p className="mt-[5px] mb-[50px] font-quatt text-white text-2xl">high release of microplastic.</p>
            </div>
          </div>

          <div id="solution" className="flex flex-col bg-mission2 w-screen items-center">
            <div className="flex flex-row items-center justify-center w-[1000px] h-[500px] mt-[100px] bg-white bg-opacity-50 drop-shadow-md rounded-3xl">
              <div className="flex flex-col mr-9">
                <p className="font-montserrat text-8xl font-bold">We will</p>
                <p className="font-montserrat text-8xl font-bold">be your</p>
                <p className="mt-2 font-montserrat text-8xl font-bold">solution</p>
                <p className="mt-5 font-quatt text-2xl">Locate your nearest thrift shops</p>
                <p className="font-quatt text-2xl">and find ways to recycle.</p>
              </div>
              <img src="assets/mission-map.png" className="w-[300px] ml-9"></img>
            </div>

            <p className="mt-[100px] font-quattrocento font-extrabold text-5xl drop-shadow-lg">MAKE CHANGE</p>
            <p className="mt-2 font-quattrocento font-extrabold text-5xl drop-shadow-lg">FOR THE WORLD</p>
            <p className="mt-3 font-quatt font-bold text-3xl">Find your most sustainable options</p>
            <button onClick={() => {
              window.location.replace("/donation");;
            }} className="mt-3 mb-[100px] bg-success text-sm hover:font-extrabold py-3 px-6 rounded shadow">&rarr; Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
