// Library imports
import { Box, Typography } from "@mui/material";

// Local imports
import SelectorInput from "./SelectorInput";

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
        <SelectorInput
          label="Release Year"
          onChange={handleYearFilterSelection}
          defaultValue={0}
          defaultOption="Any"
          optionsList={presentReleaseYears.map((year) => ({
            key: year,
            value: year,
            content: year,
          }))}
        />
        <SelectorInput
          label="Rating"
          onChange={handleRatingFilterSelection}
          defaultValue={0}
          defaultOption="Any"
          optionsList={Array.from(Array(9).keys()).map((num) => ({
            key: num + 1,
            value: num + 1,
            content: `${num + 1} ★ & above`,
          }))}
        />
      </Box>
    </Box>
  );
};

export default FilterSelector;
