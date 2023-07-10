// Library imports
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/open-sans";

const MovieCard = ({ title, description, imageUrl, rating, releaseYear }) => {
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
          imageUrl
            ? `https://image.tmdb.org/t/p/w500${imageUrl}`
            : "https://placehold.co/500x281?text=Image Not Found"
        }
      />
      <CardContent>
        <Box>
          <Typography
            variant="h6"
            fontFamily="'Playfair Display Variable', sans-serif"
            fontWeight={800}
            lineHeight={1.3}
          >
            {title === "" || !title ? "Title Not Available" : title}
          </Typography>
          <Typography
            variant="overline"
            color="#d1d4c9"
            fontWeight={300}
            lineHeight={1}
          >
            {releaseYear === 0
              ? "Release Year Not Available"
              : `Released in ${releaseYear}`}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} my={1}>
          {rating === 0 || !rating ? (
            <Typography variant="caption" fontWeight={700} color="#d1d4c9">
              Rating Not Available
            </Typography>
          ) : (
            <>
              <Rating
                readOnly
                value={rating}
                precision={0.1}
                max={10}
                size="small"
              />
              <Typography variant="caption" fontWeight={700} color="#d1d4c9">
                {rating}/10
              </Typography>
            </>
          )}
        </Box>
        <Typography variant="body2">
          {description === "" || !description
            ? "Description Not Available"
            : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
