// Library imports
import { useEffect, useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";

// Local imports
import { fetchMovies } from "./api";
import MoviesList from "./components/MoviesList";
import HeaderBar from "./components/HeaderBar";
import {
  getMovies,
  getPresentReleaseYears,
  filterMovies,
  sortMovies,
} from "./utils";

// Global theme
const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
});

const App = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filterOptions, setFilterOptions] = useState([0, 0]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);
  const [presentReleaseYears, setPresentReleaseYears] = useState([]);

  // Fetch movies from API when app mounts
  useEffect(() => {
    fetchMovies().then((res) => {
      setFetchedMovies([...res.data.results]);
    });
  }, []);

  // Get necessary movie details only after fetching movies
  useEffect(() => {
    setMovies(getMovies(fetchedMovies));
  }, [fetchedMovies]);

  // Get all present release years after getting movies
  useEffect(() => {
    setPresentReleaseYears(getPresentReleaseYears(movies));
  }, [movies]);

  // Filter movies after getting movies, also when filterOption changes
  useEffect(() => {
    setFilteredMovies(filterMovies(movies, filterOptions));
  }, [movies, filterOptions]);

  // Sort movies after filtering movies, also when sortOption changes
  useEffect(() => {
    setSortedMovies(sortMovies(filteredMovies, sortOption));
  }, [filteredMovies, sortOption]);

  return (
    <ThemeProvider theme={theme}>
      <HeaderBar
        releaseYears={presentReleaseYears}
        setFilterOptions={setFilterOptions}
        setSortOption={setSortOption}
      />
      <Container>
        <MoviesList movies={sortedMovies} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
