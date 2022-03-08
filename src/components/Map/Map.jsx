import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Rating } from "@material-ui/lab";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClick,
}) => {
  const classes = useStyles();

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2RBRiG78ttjujKangKyfDU5ALqezSjks" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClick(child)}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlined fontSize="large" color="primary" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography gutterBottom variant="subtitle2">
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place?.photo
                      ? place?.photo?.images.large.url
                      : "https://media-cdn.tripadvisor.com/media/photo-s/20/a0/a8/51/bally-bally-coffee-daska.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
