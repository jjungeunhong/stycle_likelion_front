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
            <div className='bg-donation-bg'>
                <div className="flex flex-col items-center justify-center bg-cover bg-center h-screen">
                    <img className='w-[88px] h-[88px] mb-7 mt-10' src='./assets/donation-mark.png' alt='donation-mark'></img>
                    <div className='flex flex-col items-center justify-center gap-y-3'>
                        <h1 className='text-5xl font-montserrat font-extrabold text-nav'>Drop, Shop, and Renew</h1>
                    </div>
                    <div className='flex flex-col items-center text-xl justify-center py-2'>
                        <p className='font-Quattrocento Sans font-bold text-xl'>Find Options to Donate Goods</p>
                    </div>
                    <div className="flex flex-row items-center space-x-5 py-20 px-10 ">
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-md shadow-lg bg-gradient-to-b from-donation-block from-10% to-transparent to-90%' onClick={handleclick}>
                            <img className='w-[108px] h-[108px]' src='./assets/pink_circle.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>Clothing Bins Near Me</p1>
                        </div>
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-md shadow-lg bg-gradient-to-b from-donation-block from-25% to-transparent to-80%'>
                            <img className='w-[108px] h-[108px]' src='./assets/lightblue_cirlce.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>What to Give</p1>
                        </div>
                        <div className='w-[253px] h-[293px] flex flex-col items-center py-10 px-6 rounded-md shadow-lg bg-gradient-to-b from-donation-block from-40% to-transparent to-90%'>
                            <img className='w-[108px] h-[108px]' src='./assets/green_circle.png' alt='pink circle'></img>
                            <p1 className='py-5 text-[32px] leading-[35.46px] font-extrabold text-center font-quattrocento'>Find a Dropoff Location</p1>
                        </div>
                    </div>
                </div>


                <div className='flex flex-row items-center justify-center py-8 '>
                    <p className='text-3xl font-quattrocento font-extrabold'>Find the Clothing Bins Near You</p>
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


                <div className='flex flex-col h-screen items-center justify-center'>
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
                </div>

                <div className='py-10 flex flex-row font-montserrat items justify-center text-3xl'>
                    <p className='text-nav font-quattrocento font-extrabold'>Non-Acceptable items</p>
                </div>

                <div className='flex h-90 items-center justify-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-2'>

                    <div className='w-60 relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-md'>
                        <div className='group items-center justify-center'>
                            <img className='h-40 w-full object-cover' src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-510693044-1550590816.jpg' alt='appliance'></img>
                            <div className='h-40 absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[200%] group-hover:translate-y-0 transition-all bg-black/50 group-hover: opacity-100%'>
                                <p className='absolute text-sm text-center text-white mb-3'>Including bed pillows, garage door openers, garbage disposals, sinks, toilets, doors, windows, wall cabinets, etc</p>
                            </div>
                        </div>
                        <div className='flex w-full flex-col items-center justify-center px-9 text-center'>
                            <h1 className='text-xl font-bold text-black mb-9'>Household Items</h1>
                        </div>
                        </div>

                        <div className='w-60 group relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-md'>
                            <div className='flex items-center justify-center'>
                                <img className='h-40 w-full object-cover' src='https://images.pexels.com/photos/18068307/pexels-photo-18068307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='appliance'></img>
                                <div className='h-40 absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[200%] group-hover:translate-y-0 transition-all bg-black/50 group-hover: opacity-100%'>
                                    <p className='absolute text-sm text-center text-white mb-3'>Including Swimming pools, spas, jacuzzis, swing sets, gliders, porch swings or sandboxes</p>
                                </div>
                            </div>
                            <div className='flex w-full flex-col items-center justify-center px-9 text-center'>
                                <h1 className='text-xl font-bold text-black mb-9'>Outdoor Equipment</h1>
                            </div>
                        </div>

                        <div className='w-60 group relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-md'>
                            <div className='flex items-center justify-center'>
                                <img className='h-40 w-full object-cover' src='https://images.pexels.com/photos/67540/matches-matchstick-flammable-wood-67540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='appliance'></img>
                                <div className='h-40 absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[200%] group-hover:translate-y-0 transition-all bg-black/50 group-hover: opacity-100%'>
                                    <p className='absolute text-sm text-center text-white mb-3'>Including Paint, insecticides, flammable chemicals, firearms or ammunition</p>
                                </div>
                            </div>
                            <div className='flex w-full flex-col items-center justify-center px-9 text-center'>
                                <h1 className='text-xl font-bold text-black mb-9'>Hazardous Waste</h1>
                            </div>
                        </div>

                        <div className='w-60 group relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-md'>
                            <div className='flex items-center justify-center'>
                                <img className='h-40 w-full object-cover' src='https://images.pexels.com/photos/6624213/pexels-photo-6624213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='appliance'></img>
                                <div className='h-40 absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[200%] group-hover:translate-y-0 transition-all bg-black/50 group-hover: opacity-100%'>
                                    <p className='absolute text-sm text-center text-white mb-3'>Including Broken, soiled or damaged furniture; cribs, carriages, strollers, highchairs, bassinets, car seats, wardrobes or office furniture</p>
                                </div>
                            </div>
                            <div className='flex w-full flex-col items-center justify-center px-9 text-center'>
                                <h1 className='text-xl font-bold text-black mb-9'>Select Furniture and Baby Items</h1>
                            </div>
                        </div>

                        <div className='w-60 group relative items-center justify-center overflow-hidden cursor-pointer shadow-lg rounded-md'>
                            <div className='flex items-center justify-center'>
                                <img className='h-40 w-full object-cover' src='https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='appliance'></img>
                                <div className='h-40 absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[200%] group-hover:translate-y-0 transition-all bg-black/50 group-hover: opacity-100%'>
                                    <p className='absolute text-sm text-center text-white mb-3'>Partitions, cubicles, room dividers, commercial or industrial equipment, building materials or unframed glass</p>
                                </div>
                            </div>
                            <div className='flex w-full flex-col items-center justify-center px-9 text-center'>
                                <h1 className='text-xl font-bold text-black mb-9'>Building Materials</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Donate;