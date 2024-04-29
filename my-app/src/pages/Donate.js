import Header from '../components/Header';
import 'leaflet/dist/leaflet.css';
import './donate.css';
import { Icon } from 'leaflet';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

function Donate() {
    const markers = [
        {
        geocode: [33.65121119168223, -117.84499505852567],
        popUp: "Mesa Court Anteatery"
        }
    ];
    const customIcon = new Icon({
        //iconUrl:"/Users/jieunlim/Downloads/placeholder.png",
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
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow'>Clothing Bins Near Me</button>
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow'>What to Give</button>
                        <button className='bg-gray-100 hover:bg-gray-300 text-black hover:text-black text-sm py-2 px-6 rounded shadow'>Thrift Store Near me</button>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center py-8'>
                    <p className='text-xl'>Find the Clothing Bins Near You</p>
                </div>
                <div className="flex justify-center">
                    <MapContainer center={[33.64719903307155, -117.84471095280352]} zoom={16} style={{ height: '70vh', width: '70%' }}>
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
    );
}

export default Donate;