import { useEffect } from "react";
import { useState } from "react";
import { MapMarker, Map } from 'react-kakao-maps-sdk'
const { kakao } = window;
const ReserveMap = (props) => {
    const [state, setState] = useState({
        // 초기위치 
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        // 지도위치 변경시 panto ( 부드럽게 이동 )사용 
        isPanto: true,
        zoomable:false
    })
    const moveMap = () => {
        const geocoder = new kakao.maps.services.Geocoder();
        let callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const newAddress = result[0]
                setState({
                    center: { lat: newAddress.y, lng: newAddress.x }
                })
            } 
        };
        geocoder.addressSearch(`${props.address}`, callback);
    }
    useEffect(() => {
        moveMap()
    }, []) 
    return (
        <Map
            center={state.center}
            isPanto={state.isPanto}
            zoomable={state.Zoomable} 
            level={3}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            {!state.isLoading && (
                <MapMarker position={state.center}>
                    <div style={{ padding: "5px", color: "#000" }}>
                        {state.errMsg ? state.errMsg : `${props.name}`}
                    </div>
                </MapMarker>
            )}
        </Map>
    );
}
export default ReserveMap
