// import { GoogleMapReact, withScriptjs, withGoogleMap } from 'google-map-react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/Marker';

const location = {
    address: 'CrafTina',
    // address: 'bul. "Vasil Levski" 50, 1142 Sofia Center, Sofia, Bulgaria',
    lat: 42.687097,
    lng: 23.326933,
}

// const Marker = (props: any) => {
//     const { color, name, id } = props;
//     return (
//         <div className="marker"
//             style={{ backgroundColor: color, cursor: 'pointer' }}
//             title={name}
//         />
//     );
// };

const AnyReactComponent = ({ text }) => (<div className="marker"
    style={{ backgroundColor: "black", cursor: 'pointer' }}>{text}
</div>);

// function initMap() {
//     return (<GoogleMap
//         defaultZoom={10}
//         defaultCenter={{ lat: 42.686927, lng: 23.326271 }}
//     >

//     </GoogleMap>);
// }

// const WrappedMap = withScriptjs(withGoogleMap(initMap))

const MapComponent = () => {
    return (
        <div style={{ height: '27vmax', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDGoVmsur_gTjvPf_qn5lEOE_r3C6vVc0I' }}
                defaultCenter={location}
                defaultZoom={13}
            >
                <Marker
                    lat={location.lat}
                    lng={location.lng}
                    name={location.address}
                />
            </GoogleMapReact>
        </div>

    );
}

export default MapComponent;

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDGoVmsur_gTjvPf_qn5lEOE_r3C6vVc0I'
//   })(MapContainer);