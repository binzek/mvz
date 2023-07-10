// Library imports
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectorInput = ({
  label,
  displayEmpty,
  onChange,
  defaultValue,
  defaultOption,
  optionsList,
}) => {
  return (
    <FormControl sx={{ flex: 1, minWidth: { sm: 130 } }} size="small">
      <InputLabel sx={{ color: "#f3f3f3", fontSize: 14 }}>{label}</InputLabel>
      <Select
        displayEmpty={displayEmpty}
        label={label}
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
