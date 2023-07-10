import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterSelector = ({
  presentReleaseYears,
  handleYearFilterSelection,
  handleRatingFilterSelection,
}) => {
  return (
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
            {presentReleaseYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
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
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1} &#9733; & above
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FilterSelector;
