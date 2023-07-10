// Function to get year only from a date
const getYearOnly = (date) => new Date(date).getFullYear();

// Function for getting only essential datas from fetched result
export const getMovies = (fetchedMovies) => {
  let moviesList = [];

  // Map through all fetched movies and get essential datas to moviesList
  fetchedMovies.map((fetchedMovie) => {
    moviesList = [
      ...moviesList,
      {
        id: fetchedMovie.id,
        title: fetchedMovie.title,
        description: fetchedMovie.overview,
        imageUrl: fetchedMovie.backdrop_path,
        rating: fetchedMovie.vote_average,
        releaseYear: getYearOnly(fetchedMovie.release_date),
      },
    ];
  });

  return moviesList;
};

// Function for getting all present release years
export const getPresentReleaseYears = (movies) => {
  let presentReleaseYearsList = [];

  // Map through all movies and add non-duplicate years to list
  movies.map(
    (movie) =>
      (presentReleaseYearsList = [
        ...new Set([...presentReleaseYearsList, movie.releaseYear].sort()),
      ])
  );

  return presentReleaseYearsList;
};

// Function to filter movies
export const filterMovies = (movies, filterOptions) => {
  let filteredMoviesList = [];

  // If no year given, check only rating. Else check both year and rating
  if (filterOptions[0] === 0) {
    filteredMoviesList = [...movies].filter(
      (movie) => movie.rating >= filterOptions[1]
    );
  } else {
    filteredMoviesList = [...movies].filter(
      (movie) =>
        movie.releaseYear === filterOptions[0] &&
        movie.rating >= filterOptions[1]
    );
  }

  return filteredMoviesList;
};

// Function to sort filtered movies
export const sortMovies = (filteredMovies, sortOption) => {
  let sortedMoviesList = [];

  // Sort filtered movies as give sort option. If no sort option, pass all filtered movies
  if (sortOption === "year.asc") {
    sortedMoviesList = [...filteredMovies].sort(
      (a, b) => a.releaseYear - b.releaseYear
    );
  } else if (sortOption === "year.desc") {
    sortedMoviesList = [...filteredMovies].sort(
      (a, b) => b.releaseYear - a.releaseYear
    );
  } else if (sortOption === "rating.asc") {
    sortedMoviesList = [...filteredMovies].sort((a, b) => a.rating - b.rating);
  } else if (sortOption === "rating.desc") {
    sortedMoviesList = [...filteredMovies].sort((a, b) => b.rating - a.rating);
  } else {
    sortedMoviesList = filteredMovies;
  }

  return sortedMoviesList;
};
