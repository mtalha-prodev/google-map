import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlaceDetail } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClick, setChildClick] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlaceDetail(bounds).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }}>
        <Grid xs={12} md={4}>
          <List places={places} isLoading={isLoading} childClick={childClick} />
        </Grid>
        <Grid xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
