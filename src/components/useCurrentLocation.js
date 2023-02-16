import { useGeolocated } from "react-geolocated";

const useCurrentLocation = () => {
    const {
        coords,
        getPosition,
        isGeolocationAvailable, 
        isGeolocationEnabled,
        positionError,
    } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });
    console.log("here");

    return(
        <div>
            <h2>Home Page</h2>
            <div>
                {
                    !isGeolocationAvailable ? (
                        <div>Your browser doesn't support Geolocation!</div>
                    ) : !isGeolocationEnabled ? (
                        <div>Geolocation is not enabled!</div>
                    ) : coords ? (
                        <div>
                            You are at{" "}
                            <span className="coordinate">
                                {coords.latitude}
                            </span>
                            ,{" "}
                            <span className="coordinate">
                                {coords.longitude}
                            </span>
                            .
                        </div>
                    ) : (
                        <div>Getting location data.</div>
                    )
                }
                
                {
                    !!positionError && (
                        <div>
                            <br />
                            Position Error:
                            <pre>{JSON.stringify(positionError)}</pre>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default useCurrentLocation;