// Library imports
import { useEffect, useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";

// Local imports
import { fetchMovies } from "./api";
import MoviesList from "./components/MoviesList";
import HeaderBar from "./components/HeaderBar";
import {
  extractMoviesData,
  filterMovies,
  sortMovies,
  getReleaseYears,
} from "./utils";

// Global theme
const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
});

const App = () => {
  // State for all movies
  const [movies, setMovies] = useState([]);
  // State for extracted movies
  const [extractedMovies, setExtractedMovies] = useState([]);
  // State for release year filter
  const [filterOptions, setFilterOptions] = useState([0, 0]);
  // State for filtered movies
  const [filteredMovies, setFilteredMovies] = useState([]);
  // State for sort option
  const [sortOption, setSortOption] = useState("");
  // State for sorted movies
  const [sortedMovies, setSortedMovies] = useState([]);
  // State for all present release years
  const [releaseYears, setReleaseYears] = useState([]);

  // Execute when App mounts
  useEffect(() => {
    // Get movies from API and temporarily logging it
    fetchMovies().then((res) => {
      console.log(res);
      setMovies([...movies, ...res.data.results]);
    });
  }, []);

  // Call extract function when movies array get populated
  useEffect(() => {
    setExtractedMovies(extractMoviesData(movies));
  }, [movies]);

  useEffect(() => {
    setFilteredMovies(filterMovies(filterOptions, extractedMovies));
  }, [extractedMovies, filterOptions]);

  // Call sort function when movies coming initially and everytime sort option changes
  useEffect(() => {
    setSortedMovies(sortMovies(sortOption, filteredMovies));
  }, [filteredMovies, sortOption]);

  // Call get release years function when extracted movies changes
  useEffect(() => {
    setReleaseYears(getReleaseYears(extractedMovies));
  }, [extractedMovies]);

  return (
    <ThemeProvider theme={theme}>
      <HeaderBar
        setSortOption={setSortOption}
        releaseYears={releaseYears}
        setFilterOptions={setFilterOptions}
      />
      <Container>
        <MoviesList movies={sortedMovies} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
