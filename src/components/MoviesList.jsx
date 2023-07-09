// Library imports
import { Grid } from "@mui/material";

// Local imports
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} xl={3}>
          <MovieCard
            title={movie.title}
            description={movie.overview}
            imageUrl={movie.backdrop_path}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
