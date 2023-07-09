// Library imports
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/open-sans";

const MovieCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#29435c",
        color: "#f3f3f3",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={
          `https://image.tmdb.org/t/p/w500${imageUrl}` ||
          "https://placehold.co/500x300?text=Image Not Found"
        }
      />
      <CardContent>
        <Typography
          variant="h6"
          fontFamily="'Playfair Display Variable', sans-serif"
          fontWeight={800}
          gutterBottom
        >
          {title || "Title Not Available"}
        </Typography>
        <Typography
          variant="body2"
          fontFamily="'Open Sans Variable', sans-serif"
        >
          {description || "Description not available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
