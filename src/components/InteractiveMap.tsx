import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet + Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Gold Icon for Project Location
const projectIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="w-8 h-8 bg-supreme-gold rounded-full border-4 border-white shadow-xl flex items-center justify-center animate-pulse">
            <div class="w-2 h-2 bg-supreme-black rounded-full"></div>
          </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
});

// Custom Icon for Landmarks
const landmarkIcon = L.divIcon({
    className: 'landmark-div-icon',
    html: `<div class="w-4 h-4 bg-supreme-black rounded-full border-2 border-supreme-gold shadow-md"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

interface Landmark {
    name: string;
    coords: [number, number];
    category: 'Education' | 'IT' | 'Transit' | 'Healthcare' | 'Shopping';
    distance: string;
}

const landmarks: Landmark[] = [
    { name: 'Hinjewadi IT Park', coords: [18.5913, 73.7389], category: 'IT', distance: '15 Mins' },
    { name: 'Lotus Business School', coords: [18.6366, 73.7548], category: 'Education', distance: '5 Mins' },
    { name: 'Indira College', coords: [18.6180, 73.7460], category: 'Education', distance: '8 Mins' },
    { name: 'Akurdi Railway Station', coords: [18.6495, 73.7788], category: 'Transit', distance: '10 Mins' },
    { name: 'Phoenix Mall', coords: [18.5990, 73.7680], category: 'Shopping', distance: '15 Mins' },
    { name: 'Aditya Birla Hospital', coords: [18.6210, 73.7800], category: 'Healthcare', distance: '15 Mins' },
    { name: 'Expressway Bypass', coords: [18.6400, 73.7300], category: 'Transit', distance: '5 Mins' },
];

const projectCoords: [number, number] = [18.6327, 73.7431];

// Auto-zoomer component
function MapResizer() {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }, [map]);
    return null;
}

const InteractiveMap = () => {
    return (
        <div className="w-full h-full relative group">
            <MapContainer
                center={projectCoords}
                zoom={14}
                scrollWheelZoom={false}
                className="h-full w-full grayscale-[0.8] contrast-[1.1] hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                zoomControl={false}
            >
                {/* Premium Dark/Muted Tile Layer from CartoDB */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                
                <MapResizer />

                {/* Main Project Marker */}
                <Marker position={projectCoords} icon={projectIcon}>
                    <Popup className="custom-popup">
                        <div className="text-center py-2">
                            <h4 className="font-serif text-supreme-gold text-lg mb-1">Supreme Rivana</h4>
                            <p className="font-sans text-xs text-white/70 uppercase tracking-widest">Skyline Waterfront Homes</p>
                        </div>
                    </Popup>
                </Marker>

                {/* Landmark Markers */}
                {landmarks.map((l, idx) => (
                    <Marker key={idx} position={l.coords} icon={landmarkIcon}>
                        <Popup>
                            <div className="py-1">
                                <p className="font-serif text-supreme-gold text-base whitespace-nowrap">{l.name}</p>
                                <div className="flex justify-between items-center mt-2 gap-4">
                                    <span className="text-[10px] uppercase tracking-widest text-white/50">{l.category}</span>
                                    <span className="text-[10px] font-bold text-supreme-gold">{l.distance}</span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Hint Overlay */}
            <div className="absolute bottom-4 right-4 bg-supreme-black/80 backdrop-blur-md px-4 py-2 border border-supreme-gold/30 pointer-events-none z-[1000] opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-supreme-gold uppercase tracking-[0.2em]">Interactive Map &bull; Click Markers</p>
            </div>
        </div>
    );
};

export default InteractiveMap;
