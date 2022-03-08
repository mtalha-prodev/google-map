import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaceDetail = async (bounds) => {
  const { ne, sw } = bounds;
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "d5ff9975c6msh76d15e490d3fa4ap151fc0jsn79a5dbad6024",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
