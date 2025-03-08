// Library imports
import { useEffect, useState } from "react";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  Link,
} from "@mui/material";

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
        presentReleaseYears={presentReleaseYears}
        setFilterOptions={setFilterOptions}
        setSortOption={setSortOption}
      />
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MoviesList movies={sortedMovies} />
        <Typography variant="overline" color="#d1d4c9">
          &copy; 2025 - Developed By{" "}
          <Link
            href="https://www.binzek.com/"
            target="_blank"
            rel="noopener"
            color="#d1d4c9"
            fontWeight={600}
          >
            Abdul Wajid
          </Link>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
