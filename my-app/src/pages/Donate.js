import Header from '../components/Header';
import 'leaflet/dist/leaflet.css';
import './donate.css';
import { Icon } from 'leaflet';
import SearchBox from './searchbox';
import { Link } from 'react-router-dom';

import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

import { useRef } from 'react';

function Donate() {
    const mapview = useRef(null);
    const partners = useRef(null);
    const guideline = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };
    const markers_mesa = [
        {
        geocode: [33.65121119168223, -117.84499505852567],
        popUp: "Mesa Court Bin 1"
        },
        {
            geocode: [33.653186676502074, -117.84400174389245],
            popUp: "Mesa Court Bin 2"
        }];
    const markers_campus = [
        {
            geocode: [33.6453109606942, -117.84673092405637],
            popUp: "Campus Village Bin 1"
        },
        {
            geocode: [33.644406607922306, -117.84820668719996],
            popUp: "Campus Village Bin 2"
        }];
    const markers_middle = [
        {
            geocode: [33.64495447140219, -117.83710589714643],
            popUp: "Middle Earth Housing Bin"
        }];
    const markers_vernano = [
        {
            geocode: [33.64629984154211, -117.83400660182508],
            popUp: "Vernano Place Bin 1"
        },
        {
            geocode: [33.64517846318187, -117.83343894684668],
            popUp: "Vernano Place Bin 2"
        },
        {
            geocode: [33.646797943164664, -117.83204586992692],
            popUp: "Vernano Place Bin 3"
        },
        {
            geocode: [33.64342044396888, -117.8329418049864],
            popUp: "Vernano Place Bin 4"
            
        },
        {
            geocode: [33.64412316654421, -117.83135954264542],
            popUp: "Vernano Place Bin 5"
        }];
    const markers_arroyo = [
        {
            geocode: [33.64757946104147, -117.82721917486434],
            popUp: "Arroyo Vista Bin 1"
        },
        {
            geocode: [33.64709152296659, -117.82599710914334],
            popUp: "Arroyo Vista Bin 2"
        },
        {
            geocode: [33.645920520722875, -117.82751374017333],
            popUp: "Arroyo Vista Bin 3"
        }
        ];
    const blueIcon = new Icon({
        iconUrl: require("./img/rm-blue-marker.png"),
        iconSize: [38,40]
    })
    const greenIcon = new Icon({
        iconUrl: require("./img/rm-green-marker.png"),
        iconSize: [38,40]
    })
    const orangeIcon = new Icon({
        iconUrl: require("./img/rm-orange-marker.png"),
        iconSize: [38,40]
    })
    const pinkIcon = new Icon({
        iconUrl: require("./img/rm-pink-marker.png"),
        iconSize: [38,40]
    })
    const yellowIcon = new Icon({
        iconUrl: require("./img/rm-yellow-marker.png"),
        iconSize: [38,40]
    })

    return (
            <div className='bg-donation-bg bg-cover bg-center'>
                <div className="flex flex-col items-center justify-center bg-cover bg-center h-screen">
                    <img className='w-[88px] h-[88px] mb-7 mt-14' src='./assets/donation-mark.png' alt='donation-mark'></img>
                    <div className='flex flex-col items-center justify-center gap-y-3'>
                        <h1 className='text-6xl font-montserrat font-extrabold text-nav'>Drop, Shop, and Renew</h1>
                    </div>
                    <div className='flex flex-col items-center text-xl justify-center py-2'>
                        <p className='text-3xl font-quattrocento font-semibold'>Find Options to Donate Goods</p>
                    </div>
                    <div className="flex flex-row items-center space-x-10 py-20 px-10 ">
                    <div onClick={() => scrollToSection(guideline)} className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-30% to-transparent to-85% hover:bg-donation-block'>
                    <img className='w-[108px] h-[108px]' src='./assets/pink_circle.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>What to Give</p1>
                        </div>
                        <div onClick={() => scrollToSection(partners)} className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-10% to-transparent to-90% hover:bg-donation-block'>
                            <img className='w-[108px] h-[108px]' src='./assets/lightblue_cirlce.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>Meet Our Partners</p1>
                        </div>
                        <div onClick={() => scrollToSection(mapview)} className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-45% to-transparent to-90% hover:bg-donation-block'>
                            <img className='w-[108px] h-[108px]' src='./assets/green_circle.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>Clothing Bins Near Me</p1>
                        </div>
                    </div>
                </div>

                <div className='h-[167px] bg-[#3D3D2F] flex flex-col items-center pt-7 gap-y-4'>
                        <h1 className='text-white text-[25.5px] font-montserrat'>search for more topics</h1>
                        <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[466px] h-[48.6px] rounded-md'>
                            <p1 className='text-[22.95px] text-gray-400'>search</p1>
                        </div>
                    </div>

                <div ref={guideline} className='flex flex-col h-screen'>
                    <div className='flex flex-col justify-center items-center py-10'>
                        <h1 className='text-nav font-quatt text-5xl font-extrabold'>Donation Guidelines</h1>
                        <p className='font-quattrocento text-xl'>Find out about guidelines that you should follow when donating clothing</p>
                    </div>
                    <div className='flex flex-col justify-center items-baseline pl-40 pt-6'>
                        <div className='flex flex-col justify-center items-baseline'>
                            <p className='text-[20px] text-black font-quattrocento font-semibold'>Women's Clothing</p>
                            <div className='bg-white rounded-lg text-black text-[16px] px-1'>categories</div>
                        </div>

                        <div className='grid items-center grid-cols-6 gap-7 pt-8'>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FFF6FC] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/top-croped.png' alt='top'></img>
                                <p className='text-[#BF71A6] text-[22px]'>Tops</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#D6F5F0] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/dress.png' alt='top'></img>
                                <p className='text-[#23A199] text-[22px]'>Dresses</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#D5E8FD] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/pants.png' alt='top'></img>
                                <p className='text-[#463B6D] text-[22px]'>Bottoms</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#D5EBCC] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/accessories.png' alt='top'></img>
                                <p className='text-[#5AA33F] text-[22px]'>Accessories</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FCDBDB] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/women-shoes.png' alt='top'></img>
                                <p className='text-[#AB2E2B] text-[22px]'>Shoes</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FFDFC7] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/women-bag.png' alt='top'></img>
                                <p className='text-[#553D31] text-[22px]'>Bags</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-baseline pt-10'>
                            <p className='text-[20px] text-black font-quattrocento font-semibold'>Men's Clothing</p>
                            <div className='bg-white rounded-lg text-black text-[16px] px-1'>categories</div>
                        </div>

                        <div className='grid items-center grid-cols-4 gap-7 pt-8'>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#EAF5FF] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px] pl-2' src='./assets/men-top.png' alt='top'></img>
                                <p className='text-[#1D4686] text-[22px]'>Tops</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FDF4E3] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/men-bottoms.png' alt='top'></img>
                                <p className='text-[#B85F03] text-[22px]'>Bottoms</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FFFCFC] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px] pl-3' src='./assets/sport.png' alt='top'></img>
                                <p className='text-[#898989] text-[22px]'>Sports</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[152px] h-[152px] bg-[#FFF4E6] rounded-2xl space-y-0 shadow-md'>
                                <img className='h-[100px]' src='./assets/others.png' alt='top'></img>
                                <p className='text-[#99856F] text-[22px]'>Other</p>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div ref={partners} className='bg-[#3D3D2F] h-[388px] flex flex-col items-center'>
                    <div className='flex flex-col items-center pt-10 pb-10'>
                        <h1 className='text-white text-5xl font-quattrocento font-extrabold pb-1'>Meet Our Partners</h1>
                        <p className='text-white font-quattrocento text-xl'>These partners help create UCI a better environment</p>
                    </div>
                    <div className='flex flex-row justify-center items-center pt-5 space-x-20'>
                            <a href={'https://www.goodwill.org/'}>
                                <img className='w-[350px]'src='./assets/goodwill.png' alt='goowill' a href = 'https://www.goodwill.org/' >
                                </img>
                            </a>
                            <a href={'https://owcteam.com/'}>
                            <img className='w-[300px]'src='./assets/oneworld.png' alt='oneworld'></img>
                            </a>
                            <a href={'https://basicneeds.uci.edu/'}>
                                <img className='w-[300px]'src='./assets/basicneeds.png' alt='basicneeds'></img>
                            </a>
                            
                    </div>
                </div>


                <div ref={mapview} className='h-screen'>
                    <div className='flex flex-col items-center justify-center py-8'>
                        <p className='text-5xl font-quatt font-extrabold pb-2'>Clothing Bins at UCI</p>
                        <p className='text-lg font-quattrocento'>Find locations to drop off your pre-loved pieces of clothing</p>
                    </div>

                    <div className="flex space-x-8 flex-row justify-center">
                        <MapContainer center={[33.64709604957145, -117.83781926918356]} zoom={16} style={{ height: '70vh', width: '70%' }}>
                            <TileLayer
                            attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                            />
                           
                            {markers_campus.map((marker) =>(
                                <Marker position={marker.geocode} icon={blueIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                                
                            ))},
                            {markers_middle.map((marker) =>(
                                <Marker position={marker.geocode} icon={greenIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                                
                            ))},
                            {markers_vernano.map((marker) =>(
                                <Marker position={marker.geocode} icon={yellowIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                                
                            ))},
                            {markers_mesa.map((marker) =>(
                                <Marker position={marker.geocode} icon={pinkIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                                
                            ))},
                            {markers_arroyo.map((marker) =>(
                                <Marker position={marker.geocode} icon={orangeIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                                
                            ))}
                        </MapContainer>
                        <div className='flex flex-col w-[305px] bg-white rounded-xl'>
                            <p1 className='pt-5 text-center pb-5 font-gilroy'>View Locations</p1>
                            <div className='w-[305px] h-[1px] bg-gray-200'></div>

                            <div className='flex flex-col items-start space-y-1'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <img className='h-[30px] w-[25px]'src='./assets/rm-blue-marker.png'></img>
                                    <p1 className='pt-5 text-center pb-5 font-gilroy'>Campus Village</p1>
                                </div>
                                <div className='w-[305px] h-[1px] bg-gray-200'></div>
                                <div className='flex flex-row items-center space-x-2'>
                                    <img className='h-[30px] w-[25px]'src='./assets/rm-green-marker.png'></img>
                                    <p1 className='pt-5 text-center pb-5 font-gilroy'>Middle Earth</p1>
                                </div>
                                <div className='w-[305px] h-[1px] bg-gray-200'></div>
                                <div className='flex flex-row items-center space-x-2'>
                                    <img className='h-[30px] w-[25px]'src='./assets/rm-orange-marker.png'></img>
                                    <p1 className='pt-5 text-center pb-5 font-gilroy'>Arroyo Vista</p1>
                                </div>
                                <div className='w-[305px] h-[1px] bg-gray-200'></div>
                                <div className='flex flex-row items-center space-x-2'>
                                    <img className='h-[30px] w-[25px]'src='./assets/rm-yellow-marker.png'></img>
                                    <p1 className='pt-5 text-center pb-5 font-gilroy'>Verano Place</p1>
                                </div>
                                <div className='w-[305px] h-[1px] bg-gray-200'></div>
                                <div className='flex flex-row items-center space-x-2'>
                                    <img className='h-[30px] w-[25px]'src='./assets/rm-pink-marker.png'></img>
                                    <p1 className='pt-5 text-center pb-5 font-gilroy'>Mesa Court</p1>
                                </div>
                                <div className='w-[305px] h-[1px] bg-gray-200'></div>
                                <div className='w-[305px]'><SearchBox/></div>
                            </div>
                        </div>
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

export default Donate;