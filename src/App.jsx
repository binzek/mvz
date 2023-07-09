// Library imports
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

// Local imports
import { fetchMovies } from "./utils";
import MoviesList from "./components/MoviesList";

const App = () => {
  // State for all movies
  const [movies, setMovies] = useState([]);

  // Execute when App mounts
  useEffect(() => {
    // Get movies from API and temporarily logging it
    fetchMovies().then((res) => {
      console.log(res);
      setMovies([...movies, ...res.data.results]);
    });
  }, []);

  return (
    <Container>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default App;
