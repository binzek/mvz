// Library imports
import { useEffect, useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";

// Local imports
import { fetchMovies } from "./utils";
import MoviesList from "./components/MoviesList";
import HeaderBar from "./components/HeaderBar";

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

  // Function to extract only essential data from fetched result
  const extractMoviesData = () => {
    let extractedMoviesData = [];

    // Function to get only release year from release date
    const getReleaseYear = (date) => {
      let releaseDate = new Date(date);
      let releaseYear = releaseDate.getFullYear();

      return releaseYear;
    };

    // Map through all movies and extract essential datas to new object
    movies.map((movie) => {
      extractedMoviesData = [
        ...extractedMoviesData,
        {
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          imageUrl: movie.backdrop_path,
          rating: movie.vote_average,
          releaseYear: getReleaseYear(movie.release_date),
        },
      ];
    });

    setExtractedMovies(extractedMoviesData);
  };

  // Function to filter by release year
  const filterMovies = () => {
    let filteredResult = [];

    if (filterOptions[0] === 0) {
      filteredResult = [...extractedMovies].filter(
        (movie) => movie.rating >= filterOptions[1]
      );
    } else {
      filteredResult = [...extractedMovies].filter(
        (movie) =>
          movie.releaseYear === filterOptions[0] &&
          movie.rating >= filterOptions[1]
      );
    }

    setFilteredMovies(filteredResult);
  };

  // Function to sort movies
  const sortMovies = () => {
    let sortedMoviesArray = [];

    // Sort based on sort option
    if (sortOption === "year.asc") {
      sortedMoviesArray = [...filteredMovies].sort(
        (a, b) => a.releaseYear - b.releaseYear
      );
    } else if (sortOption === "year.desc") {
      sortedMoviesArray = [...filteredMovies].sort(
        (a, b) => b.releaseYear - a.releaseYear
      );
    } else if (sortOption === "rating.asc") {
      sortedMoviesArray = [...filteredMovies].sort(
        (a, b) => a.rating - b.rating
      );
    } else if (sortOption === "rating.desc") {
      sortedMoviesArray = [...filteredMovies].sort(
        (a, b) => b.rating - a.rating
      );
    } else {
      sortedMoviesArray = filteredMovies;
    }

    setSortedMovies(sortedMoviesArray);
  };

  // Function to get all release years
  const getReleaseYears = () => {
    extractedMovies.map((movie) =>
      setReleaseYears((prevState) => [
        ...new Set([...prevState, movie.releaseYear].sort()),
      ])
    );
  };

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
    extractMoviesData();
  }, [movies]);

  useEffect(() => {
    filterMovies();
  }, [extractedMovies, filterOptions]);

  // Call sort function when movies coming initially and everytime sort option changes
  useEffect(() => {
    sortMovies();
  }, [filteredMovies, sortOption]);

  // Call get release years function when extracted movies changes
  useEffect(() => {
    getReleaseYears();
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
