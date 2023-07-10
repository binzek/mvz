// Library imports
import { Grid } from "@mui/material";

// Local imports
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <Grid container spacing={2} py={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} xl={3}>
          <MovieCard
            title={movie.title}
            description={movie.description}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
            releaseYear={movie.releaseYear || 0}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
