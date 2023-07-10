// Library imports
import { AppBar, Box, Container } from "@mui/material";

// Local imports
import NavBar from "./NavBar";
import FilterSelector from "./FilterSelector";
import SortSelector from "./SortSelector";

const HeaderBar = ({
  presentReleaseYears,
  setFilterOptions,
  setSortOption,
}) => {
  // Listen for year filter selection and pass as first element of filterOptions
  const handleYearFilterSelection = (event) => {
    setFilterOptions((prevState) => [event.target.value, prevState[1]]);
  };

  // Listen for year filter selection and pass as second element of filterOptions
  const handleRatingFilterSelection = (event) => {
    setFilterOptions((prevState) => [prevState[0], event.target.value]);
  };

  // Listen for sort selection and pass as sortOption
  const handleSortSelection = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box>
      <NavBar />
      <AppBar
        position="static"
        sx={{ bgcolor: "#29435c", py: 2, boxShadow: "none" }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { sm: "space-between" },
            gap: 2,
          }}
        >
          <FilterSelector
            presentReleaseYears={presentReleaseYears}
            handleYearFilterSelection={handleYearFilterSelection}
            handleRatingFilterSelection={handleRatingFilterSelection}
          />
          <SortSelector handleSortSelection={handleSortSelection} />
        </Container>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
