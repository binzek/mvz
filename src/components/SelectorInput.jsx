// Library imports
import { FormControl, Select, MenuItem } from "@mui/material";

const SelectorInput = ({
  onChange,
  defaultValue,
  defaultOption,
  optionsList,
}) => {
  return (
    <FormControl sx={{ flex: 1, minWidth: { sm: 130 } }} size="small">
      <Select
        displayEmpty
        sx={{
          fontSize: 14,
          color: "#f3f3f3",
        }}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <MenuItem value={defaultValue}>{defaultOption}</MenuItem>
        {optionsList.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorInput;
