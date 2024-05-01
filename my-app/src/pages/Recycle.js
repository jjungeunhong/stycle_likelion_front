import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Recycle() {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
        <div className="flex flex-row w-full items-start justify-start bg-main bg-cover bg-center min-h-screen pb-20">
            <div className="w-1/2 pl-[150px] pt-[20px] pb-[20px]">
                <div className="mt-[120px] xl:ml-[0px] ml-[80px] ">
                    <div className="font-montserrat font-extrabold text-6xl pl-[10px]">
                        <p className="">Ways to</p>
                        <p className="mt-2">Repurpose</p>
                        <div className="h-3 w-[380px] bg-primary"></div>
                    </div>
                    <div className="font-quattrocento font-bold text-2xl pl-[10px]">
                        <p>Turning old clothes</p>
                        <p>into new ones</p>
                    </div>
                    <p className="font-quattrocento font-bold text-lg mt-10">
                        Thrifting facts:
                    </p>
                    <p className="font-quattrocento font-bold text-xs mt-2 max-w-2xl bg-white shadow-lg p-5 rounded-lg">
                        <ul className="list-disc pl-5">
                            <li>California has the highest number of used merchandise stores in the country, with 1,753  or 9.4% of establishments.</li>
                            <li>33.7% of thrift stores in the U.S. are non-profit organizations.</li>
                            <li>Every year, 16 to 18% of consumers in the U.S. shop at thrift stores.</li>
                            <li>Purchasing a secondhand clothing item over a new one saves 8.41 pounds of carbon emissions, 16.48 kWh of energy, and 88.89 gallons of water.</li>
                            <li>11.3 million tons of textile waste end up in landfills yearly in the U.S., accounting for 7.7% of all landfill waste.</li>
                            <li>Of the 17.0 million tons of textile waste generated each year, only 14.7% is recycled.</li>
                            <li>The volume of discarded textiles in the U.S. grew by 28.8% from 2010 to 2018.</li>
                            <li>The traditional fashion industry accounts for 10% of global greenhouse gas emissions.</li>
                            <li>85% of shoppers view thrifting as good for the environment; 62% believe thrifting is a more sustainable solution to fast fashion.</li>
                            <li>Only 0.1% of all clothing items collected by take-back programs and charities are recycled.</li>
                            <li>One pair of jeans is estimated to use about 1,800 gallons of water in the manufacturing process and cotton growth</li>
                            <li>Resale shops have grown 7% a year for the past two years, with over 25,000 stores in the US.</li>
                            <li>18-24-year-olds are the most frequent thrift store shoppers, with 40% of them visiting thrift stores in a month.</li>
                            <li>Over 10.9 million tonnes of textile waste ended up in landfills in 2019.</li>
                            <li>The average American throws away 81 pounds of clothing per year.</li>
                            <li>The average American buys 70% more clothing today than they did 20 years ago.</li>
                        </ul>
                    </p>
                    <p className="font-quattrocento font-bold text-lg mt-10">
                        Upcycling facts:
                    </p>
                    <p className="font-quattrocento font-bold text-xs mt-2 max-w-2xl bg-white shadow-lg p-5 rounded-lg">
                        <ul className="list-disc pl-5">
                            <li>Almost 1 in 10 people in the UK hasn’t recycled or upcycled a single item in the past year</li>
                            <li>Approximately 100 million pounds of clothing is produced every year statewide.</li>
                            <li>Approximately 0.02 pounds of pesticides are used to produce one pound of new clothes, approximately 2 million pounds of insecticides washed into waterways or otherwise harm the environment.</li>
                            <li>Approximately 3-4 pounds of CO2 are saved for every 1 pound of clothing that is spared from disposal.</li>
                            <li>We can save 300-400 million tons of CO2 from entering the atmosphere for every 100 million tons collected annually. This is the equivalent of taking 26,000-35,000 cars off the road (According to the U.S. EPA, a passenger car emits about 11,450 pounds of CO2 a year on average).</li>
                            <li>Only about 9% of the 350 trillion tons of plastic the world manufactures a year is recycled.</li>
                            <li>Now globally, 2.12 billion tons of waste is dumped annually.</li>
                            <li>According to the U.S. Environmental Protection Agency (EPA), 292 million tons of municipal solid waste was generated in 2018. Of this total only 94 million tons was recycled, 25 million tons was composted, and another 17 million tons of food was managed with other methods. That still leaves a whopping 152 million tons of waste in the landfills generating greenhouse gases as they slowly break down, and increasing plastic pollution in the environment.</li>
                            <li>According to the EPA, in 2019 the industry sector produced 23% of carbon emissions in the processing of raw materials into a finished product.</li>
                            <li>Globally, about 85% of clothes ends up in landfills or burned.</li>
                            <li>An estimated 13 million tons of textile waste a year comes from the manufacturers themselves, as well as retailers with the fashion industry contributing roughly 10% of all global carbon emissions and with plastic fibers in the clothes contributing to microplastic pollution.</li>
                        </ul>
                    </p>
                    <p className="font-quattrocento font-bold text-lg mt-10">
                        Ways to upcycle:
                    </p>
                    <p className="font-quattrocento font-bold text-xs mt-2 max-w-2xl bg-white shadow-lg p-5 rounded-lg">
                        <ul className="list-disc pl-5">
                            <li>The 5R's and 1D: </li>
                            <li>Reduce, Reuse, Repurpose, Research, and Donate</li>
                            <li>Dye-it</li>
                            <li>Patched clothes</li>
                            <li>Adult clothes into children's</li>
                            <li>Repurpose into other items such as bags</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-end pr-[150px] pt-[150px] pb-[20px]">  
                <div className="mt-[120px] xl:ml-[0px] ml-[80px]">
                    <img src="assets/upcycled_bag.jpg" alt="upcycledBag" className="mt-4" style={{ width: '500px', height: 'auto' }}/>
                    <img src="assets/upcycled_shirt.jpg" alt="upcycledShirt" className="mt-4" style={{ width: '500px', height: 'auto' }}/>
                    <img src="assets/upcycled_skirt.jpg" alt="upcycledSkirt" className="mt-4" style={{ width: '500px', height: 'auto' }}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Recycle;
