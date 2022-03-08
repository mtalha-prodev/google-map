import { useState, useEffect, createRef } from "react";
import useStyles from "./styles";
import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { CircularProgress } from "@mui/material";

const List = ({ places, isLoading, childClick }) => {
  const classes = useStyles();
  const [type, setType] = useState("resturents");
  const [rating, setRating] = useState("");
  const [elRafs, setElRafs] = useState([]);

  useEffect(() => {
    setElRafs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Resturents,Hotels & Atraction around you
      </Typography>
      {isLoading ? (
        <div className={classes.isLoading}>
          <CircularProgress size={"5rem"} />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel> Types </InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="resturents">Resturents</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attsrations">Attrations</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel> Rating </InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="0">all</MenuItem>
              <MenuItem value="3.0">above 3</MenuItem>
              <MenuItem value="3.5">above 3.5</MenuItem>
              <MenuItem value="4.0">above 4</MenuItem>
              <MenuItem value="4.5">above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid refs={elRafs[i]} item key={i} xs={12}>
                <PlaceDetails
                  selected={Number(childClick) === i}
                  refProp={elRafs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
