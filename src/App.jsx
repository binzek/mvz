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
  // State for sort option
  const [sortOption, setSortOption] = useState("");
  // State for sorted movies
  const [sortedMovies, setSortedMovies] = useState([]);

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

  // Function to sort movies
  const sortMovies = () => {
    let sortedMoviesArray = [];

    // Sort based on sort option
    if (sortOption === "year.asc") {
      sortedMoviesArray = [...extractedMovies].sort(
        (a, b) => a.releaseYear - b.releaseYear
      );
    } else if (sortOption === "year.desc") {
      sortedMoviesArray = [...extractedMovies].sort(
        (a, b) => b.releaseYear - a.releaseYear
      );
    } else if (sortOption === "rating.asc") {
      sortedMoviesArray = [...extractedMovies].sort(
        (a, b) => a.rating - b.rating
      );
    } else if (sortOption === "rating.desc") {
      sortedMoviesArray = [...extractedMovies].sort(
        (a, b) => b.rating - a.rating
      );
    } else {
      sortedMoviesArray = extractedMovies;
    }

    setSortedMovies(sortedMoviesArray);
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

  // Call sort function when movies coming initially and everytime sort option changes
  useEffect(() => {
    sortMovies();
  }, [extractedMovies, sortOption]);

  return (
    <ThemeProvider theme={theme}>
      <HeaderBar setSortOption={setSortOption} />
      <Container>
        <MoviesList movies={sortedMovies} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
