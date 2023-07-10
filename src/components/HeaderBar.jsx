// Library imports
import {
  AppBar,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import "@fontsource-variable/playfair-display";

const HeaderBar = ({ setSortOption, releaseYears, setFilterOptions }) => {
  // Function to handle sort selection
  const handleSortSelection = (event) => {
    setSortOption(event.target.value);
  };

  // Function to handle release year filter
  const handleYearFilterSelection = (event) => {
    setFilterOptions((prevState) => [event.target.value, prevState[1]]);
  };
  // Function to handle rating filter
  const handleRatingFilterSelection = (event) => {
    setFilterOptions((prevState) => [prevState[0], event.target.value]);
  };

  return (
    <Box>
      <AppBar position="static">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          bgcolor="#29435c"
          py={1}
          color="#f3f3f3"
          sx={{ userSelect: "none" }}
        >
          <MovieIcon fontSize="large" />
          <Typography
            variant="h2"
            fontSize={28}
            fontFamily="'Playfair Display Variable', sans-serif"
            fontWeight={800}
          >
            MVZ
          </Typography>
        </Box>
      </AppBar>
      <AppBar position="static" sx={{ bgcolor: "#29435c", pb: 2, pt: 1 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { sm: "space-between" },
            gap: 2,
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ md: "center" }}
            gap={1}
          >
            <Typography variant="body2" fontWeight={500} color="#d1d4c9">
              Filter By:
            </Typography>
            <Box display="flex" justifyContent="space-between" gap={1}>
              <FormControl sx={{ flex: 1, minWidth: { sm: 130 } }} size="small">
                <InputLabel sx={{ color: "#f3f3f3", fontSize: 14 }}>
                  Release Year
                </InputLabel>
                <Select
                  label="Release Year"
                  sx={{
                    fontSize: 14,
                    color: "#f3f3f3",
                  }}
                  onChange={handleYearFilterSelection}
                >
                  <MenuItem value={0}>Any</MenuItem>
                  {releaseYears.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: 1, minWidth: { sm: 130 } }} size="small">
                <InputLabel sx={{ color: "#f3f3f3", fontSize: 14 }}>
                  Rating
                </InputLabel>
                <Select
                  label="Rating"
                  sx={{ fontSize: 14, color: "#f3f3f3" }}
                  onChange={handleRatingFilterSelection}
                >
                  <MenuItem value={0}>Any</MenuItem>
                  {Array.from(Array(9).keys()).map((num) => (
                    <MenuItem value={num + 1}>
                      {num + 1} &#9733; & above
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ md: "center" }}
            gap={1}
          >
            <Typography variant="body2" fontWeight={500} color="#d1d4c9">
              Sort By:
            </Typography>
            <FormControl size="small" sx={{ minWidth: { sm: 130 } }}>
              <Select
                displayEmpty
                sx={{ fontSize: 14, color: "#f3f3f3" }}
                onChange={handleSortSelection}
              >
                <MenuItem>Default</MenuItem>
                <MenuItem value="year.asc">Year ▴</MenuItem>
                <MenuItem value="year.desc">Year ▾</MenuItem>
                <MenuItem value="rating.asc">Rating ▴</MenuItem>
                <MenuItem value="rating.desc">Rating ▾</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
