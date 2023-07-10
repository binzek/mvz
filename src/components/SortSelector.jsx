// Library imports
import { Box, Typography } from "@mui/material";

// Local imports
import SelectorInput from "./SelectorInput";

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
      <SelectorInput
        displayEmpty={true}
        onChange={handleSortSelection}
        defaultValue=""
        defaultOption="Popularity"
        optionsList={[
          { key: "year.asc", value: "year.asc", content: "Year ▴" },
          { key: "year.desc", value: "year.desc", content: "Year ▾" },
          { key: "rating.asc", value: "rating.asc", content: "Rating ▴" },
          { key: "rating.desc", value: "rating.desc", content: "Rating ▾" },
        ]}
      />
    </Box>
  );
};

export default SortSelector;
