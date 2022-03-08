import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";

import { LocationOnOutlined, Phone } from "@mui/icons-material";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place?.photo
            ? place?.photo?.images.large.url
            : "https://media-cdn.tripadvisor.com/media/photo-s/20/a0/a8/51/bally-bally-coffee-daska.jpg"
        }
        title={place?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place?.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place?.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            Out of {place?.num_reviews} Reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            className={classes.subtitle}
            color="textSecondary"
          >
            <LocationOnOutlined /> {place?.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            className={classes.subtitle}
            color="textSecondary"
          >
            <Phone /> {place?.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.web_url, "_blank")}
          >
            trivel advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
