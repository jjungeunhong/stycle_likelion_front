import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Recycle() {
    const navigate = useNavigate();
    const thriftingFactsRef = useRef(null);
    const upcyclingFactsRef = useRef(null);
    const waysToUpcycleRef = useRef(null);

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="flex flex-col w-full">
            <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center pt-32" style={{ backgroundImage: "url('assets/background.png')" }}>
                <Header />
                <div className="text-center justify-center items-center px-4 pt-20">
                    <img src="assets/metalStar.png" alt="Metal star" className="mx-auto mb-5" style={{ width: 'auto', height: '70px' }} />
                    <h1 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className="font-extrabold text-6xl">Ways to</h1>
                    <h1 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className="font-extrabold text-6xl">Repurpose</h1>
                    <p className="font-quattrocento font-bold text-3xl mt-4">Turning old clothes into new ones</p>
                    <div className="flex flex-row justify-center space-x-5 py-10">
                        <div className="flex space-x-2">
                            <button className="bg-gray-100 text-black text-md px-4 py-1 rounded-full shadow-lg" onClick={() => scrollToRef(thriftingFactsRef)}>Thrifting</button>
                            <button className="bg-gray-100 text-black text-md px-4 py-1 rounded-full shadow-lg" onClick={() => scrollToRef(upcyclingFactsRef)}>Upcycling</button>
                            <button className="bg-gray-100 text-black text-md px-4 py-1 rounded-full shadow-lg" onClick={() => scrollToRef(waysToUpcycleRef)}>Ways to Upcycle</button>
                        </div>
                    </div>
                    <div className="relative mt-10 mx-auto w-100 mb-20">
                        <div className="absolute inset-0 bg-white shadow-lg rounded-lg opacity-50"></div>
                        <div className="relative p-8 flex flex-col justify-center items-start">
                            <div className="flex items-center">
                                <img src="assets/sockIcon.png" alt="Sock icon" className="w-12 h-12 mb-4 mr-4" />
                                <div>
                                    <h2 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className="font-extrabold text-4xl mb-2">thrift</h2>
                                    <p className="font-quattrocento text-xl text-gray-600">/THrift/</p>
                                </div>
                            </div>
                            <p className="font-quattrocento font-extrabold text-lg text-gray-400 mt-2">noun</p>
                            <p className="font-quattrocento font-extrabold text-lg mt-2">1. the quality of using money and other resources carefully and not wastefully.</p>
                            <p className="font-quattrocento font-extrabold text-lg text-pink-500 mt-4">Similar:</p>
                            <div className="flex space-x-2 mt-2">
                                <img src="assets/emptyLabel.png" alt="Label" className="w-20 h-8" />
                                <img src="assets/emptyLabel.png" alt="Label" className="w-20 h-8" />
                                <img src="assets/emptyLabel.png" alt="Label" className="w-20 h-8" />
                                <img src="assets/emptyLabel.png" alt="Label" className="w-20 h-8" />
                                <img src="assets/emptyLabel.png" alt="Label" className="w-20 h-8" />
                            </div>
                            <p className="font-quattrocento font-extrabold text-lg mt-4">learn more:</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 text-center text-white" style={{ backgroundColor: "#3D3D2F" }}>
                <p className="font-quattrocento font-bold text-5xl">Discover Thrift Stores</p>
                <p className="font-quattrocento text-lg">Find the local thrifting areas near UCI and share your <br/> thrifting experiences with other peers!</p>
                <div className="flex justify-center mt-5 space-x-4">
                    <img src="assets/LearnMoreButton.png" alt="Learn More" className="h-12" />
                    <img src="assets/GetStartedButton.png" alt="Get Started" className="h-12" />
                </div>
            </div>

            <div className="bg-cover bg-center py-48 text-center" style={{ backgroundImage: "url('assets/background.png')" }}>
                <h2 className="font-quattrocento font-bold text-5xl mb-10">About Thrifting Culture</h2>
                <div className="flex flex-col items-center space-y-8">
                    <div className="bg-black w-2/6 h-96 rounded-lg"></div>
                    <div className="bg-black w-2/6 h-96 rounded-lg"></div>
                </div>
            </div>

            <div className="relative py-40 text-center text-white" style={{ backgroundColor: "#3D3D2F" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="assets/footer.png" alt="Footer Information" className="w-3/4 h-5/6 object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Recycle;