import Header from '../components/Header';
import 'leaflet/dist/leaflet.css';
import './donate.css';
import { Icon } from 'leaflet';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';

function Donate() {
    const ref = useRef(null);
    const handleclick = () => {
        ref.current?.scrollIntoView({behavior:'smooth'})
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
            <div>
                <div className="flex flex-col items-center justify-center bg-grey bg-cover bg-center h-screen">
                    <div className='flex flex-row items-center justify-center'>
                        <h1 className='text-2xl font-extrabold text-nav'>Drop, Shop, and Renew</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p>Spin the cycle of giving</p>
                    </div>
                    <div className="flex flex-row items-center space-x-5 py-7 px-10">
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow' onClick={handleclick}>Clothing Bins Near Me</button>
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow'>What to Give</button>
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow'>Thrift Store Near me</button>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-center py-8' ref={ref}>
                    <p className='text-xl'>Find the Clothing Bins Near You</p>
                </div>

                <div className="flex justify-center">
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
                <div className='flex h-screen items-center justify-center'>
                    {/* <div className='flex flex-row items-center justify-center'>
                        <h1 className='text-black font-extrabold text-2xl'>Donation Guidelines</h1>
                    </div> */}
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
            </div>
    );
}

export default Donate;