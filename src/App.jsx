// Library imports
import { useEffect } from "react";

// Local imports
import { fetchMovies } from "./utils";

const App = () => {
  // Execute when App mounts
  useEffect(() => {
    // Get movies from API and temporarily logging it
    fetchMovies().then((res) => console.log(res));
  }, []);

  return <div>App</div>;
};

export default App;
