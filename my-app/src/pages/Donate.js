import Header from '../components/Header';
import 'leaflet/dist/leaflet.css';
import './donate.css';
import { Icon } from 'leaflet';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

import { useRef } from 'react';

function Donate() {
    const ref = useRef(null);
    const handleclick = () => {
        ref.current?.scrollIntoView({behavior:'smooth', block: "end"})
    }
    const markers = [
        {
        geocode: [33.65121119168223, -117.84499505852567],
        popUp: "Mesa Court Bin 1"
        },
        {
            geocode: [33.653186676502074, -117.84400174389245],
            popUp: "Mesa Court Bin 2"
        },
        {
            geocode: [33.6453109606942, -117.84673092405637],
            popUp: "Campus Village Bin 1"
        },
        {
            geocode: [33.644406607922306, -117.84820668719996],
            popUp: "Campus Village Bin 2"
        },
        {
            geocode: [33.64495447140219, -117.83710589714643],
            popUp: "Middle Earth Housing Bin"
        },
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
        },
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
    const customIcon = new Icon({
        iconUrl: require("./img/pin.png"),
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
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-10% to-transparent to-90% hover:bg-donation-block'>
                            <img className='w-[108px] h-[108px]' src='./assets/pink_circle.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>Find a Dropoff Location</p1>
                        </div>
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-30% to-transparent to-85% hover:bg-donation-block'>
                            <img className='w-[108px] h-[108px]' src='./assets/lightblue_cirlce.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>What to Give</p1>
                        </div>
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-2xl shadow-lg bg-gradient-to-b from-donation-block from-45% to-transparent to-90% hover:bg-donation-block' onClick={handleclick}>
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

                <div className='flex flex-col h-screen'>
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

                <div className='bg-[#3D3D2F] h-[388px] flex flex-col items-center'>
                    <div className='flex flex-col items-center pt-10 pb-10'>
                        <h1 className='text-white text-5xl font-quattrocento font-extrabold pb-1'>Meet Our Partners</h1>
                        <p className='text-white font-quattrocento text-xl'>These partners help create UCI a better environment</p>
                    </div>
                    <div className='flex flex-row justify-center items-center pt-5 space-x-20'>
                            <img className='w-[350px]'src='./assets/goodwill.png' alt='goowill' ></img>
                            <img className='w-[300px]'src='./assets/oneworld.png' alt='goowill'></img>
                            <img className='w-[300px]'src='./assets/basicneeds.png' alt='goowill'></img>
                    </div>
                </div>


                <div className='h-screen'>
                    <div className='flex flex-col items-center justify-center py-8'>
                        <p className='text-5xl font-quatt font-extrabold pb-2'>Clothing Bins at UCI</p>
                        <p className='text-lg font-quattrocento'>Find locations to drop off your pre-loved pieces of clothing</p>
                    </div>

                    <div className="flex justify-center" ref={ref}>
                        <MapContainer center={[33.64709604957145, -117.83781926918356]} zoom={16} style={{ height: '70vh', width: '70%' }}>
                            <TileLayer
                            attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                            />
                            {markers.map((marker) =>(
                                <Marker position={marker.geocode} icon={customIcon}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

                {/* <div className='flex flex-col h-screen items-center justify-center'>
                    <div className='flex py-10'>
                        <p className='text-nav font-quattrocento text-3xl font-extrabold'>Donation Guidelines</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                            <div className='h-96 w-72'>
                                <img className='h-full w-full object-cover' src='https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='clothes'></img>
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                                    <h1 className='text-3xl font-bold text-white mb-9'>Clothes</h1>
                                    <p className='text-lg text-white mb-3'>All seasons of clothing, including shoes, handbags and accessories</p>
                                </div>
                        </div>

                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                            <div className='h-96 w-72'>
                                <img className='h-full w-full object-cover' src='https://media.istockphoto.com/id/586162072/photo/various-kitchen-utensils.jpg?s=1024x1024&w=is&k=20&c=IzdCrs1KIKgYNS7TntHug3OVV97XnYPewVf1vFU_ZWg=' alt='shoes'></img>
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                                    <h1 className='text-3xl font-bold text-white mb-9'>Houseware</h1>
                                    <p className='text-lg text-white mb-3'>Including cookware, dishes, silverware, glassware, artwork and picture frames, blankets, books, etc.</p>
                                </div>
                        </div>

                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                            <div className='h-96 w-72'>
                                <img className='h-full w-full object-cover' src='https://images.pexels.com/photos/1450907/pexels-photo-1450907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='appliance'></img>
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                                    <h1 className='text-3xl font-bold text-white mb-9'>Small Appliance</h1>
                                    <p className='text-lg text-white mb-3'>Including toasters, coffee pots, electric frying pans, irons, mixers, blenders and microwaves</p>
                                </div>
                        </div>

                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer'>
                            <div className='h-96 w-72'>
                                <img className='h-full w-full object-cover' src='https://media.istockphoto.com/id/1400570369/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.jpg?s=1024x1024&w=is&k=20&c=BA3dOCaiXxcfSVVhPwqjLA0jLJ000HfqORNpH_KV_V0=' alt='appliance'></img>
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                                    <h1 className='text-3xl font-bold text-white mb-9'>Electronics</h1>
                                    <p className='text-lg text-white mb-3'>Including toasters, coffee pots, electric frying pans, irons, mixers, blenders and microwaves</p>
                                </div>
                        </div>
                    </div>
                </div> */}
                
            </div>
    );
}

export default Donate;