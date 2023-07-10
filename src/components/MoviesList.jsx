// Library imports
import { Grid } from "@mui/material";

// Local imports
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  // Function to extract released year from released date
  const getReleaseYear = (date) => {
    let releaseDate = new Date(date);
    let releaseYear = releaseDate.getFullYear();

    return releaseYear;
  };

  return (
    <Grid container spacing={2} py={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} xl={3}>
          <MovieCard
            title={movie.title}
            description={movie.overview}
            imageUrl={movie.backdrop_path}
            rating={movie.vote_average}
            releaseYear={
              movie.release_date ? getReleaseYear(movie.release_date) : 0
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
