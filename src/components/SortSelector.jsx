import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";

const SortSelector = ({ handleSortSelection }) => {
  return (
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
          defaultValue=""
        >
          <MenuItem value="">Popularity</MenuItem>
          <MenuItem value="year.asc">Year ▴</MenuItem>
          <MenuItem value="year.desc">Year ▾</MenuItem>
          <MenuItem value="rating.asc">Rating ▴</MenuItem>
          <MenuItem value="rating.desc">Rating ▾</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelector;
