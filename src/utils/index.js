// Function to get only release year from release date
export const getReleaseYear = (date) => {
  let releaseDate = new Date(date);
  let releaseYear = releaseDate.getFullYear();

  return releaseYear;
};

// Function to extract only essential data from fetched result
export const extractMoviesData = (movies) => {
  let extractedMoviesData = [];

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

  return extractedMoviesData;
};

// Function to filter movies
export const filterMovies = (filterOptions, extractedMovies) => {
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

  return filteredResult;
};

// Function to sort movies
export const sortMovies = (sortOption, filteredMovies) => {
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
    sortedMoviesArray = [...filteredMovies].sort((a, b) => a.rating - b.rating);
  } else if (sortOption === "rating.desc") {
    sortedMoviesArray = [...filteredMovies].sort((a, b) => b.rating - a.rating);
  } else {
    sortedMoviesArray = filteredMovies;
  }

  return sortedMoviesArray;
};

// Function to get all release years
export const getReleaseYears = (extractedMovies) => {
  let releaseYearsArray = [];

  extractedMovies.map(
    (movie) =>
      (releaseYearsArray = [
        ...new Set([...releaseYearsArray, movie.releaseYear].sort()),
      ])
  );

  return releaseYearsArray;
};
