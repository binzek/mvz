// Library imports
import { useEffect, useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";

// Local imports
import { fetchMovies } from "./utils";
import MoviesList from "./components/MoviesList";

// Global theme
const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
});

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
    <ThemeProvider theme={theme}>
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
