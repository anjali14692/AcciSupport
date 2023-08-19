import {useEffect, useState} from "react";
import axios from "axios";
function Location() {
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocationJs();
  }, []);


  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  }

  return (
    <div className="App">
      <h1>Current Location of User</h1>
      <p>Latitude: {currLocationJs.latitude}</p>
      <p>Longitude: {currLocationJs.longitude}</p>
    </div>
  );
}

export default Location;
