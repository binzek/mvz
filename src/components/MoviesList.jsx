// Library imports
import { Grid, Typography } from "@mui/material";

// Local imports
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <Grid container spacing={2} py={3}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} xl={3}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              releaseYear={movie.releaseYear || 0}
            />
          </Grid>
        ))
      ) : (
        <Typography
          variant="h4"
          fontWeight={700}
          color="#f3f3f3"
          mx="auto"
          mt={5}
        >
          No Movies Found!
        </Typography>
      )}
    </Grid>
  );
};

export default MoviesList;
