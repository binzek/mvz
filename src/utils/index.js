// Library imports
import axios from "axios";

// TMDB API base URL
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

// Function to fetch movies from given API
export const fetchMovies = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: 1,
        without_genres: 28,
        with_watch_monetization_types: "flatrate",
      },
    });

    // Return the fetched data
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
