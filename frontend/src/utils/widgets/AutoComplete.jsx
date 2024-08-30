/* eslint-disable react/prop-types */

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({ options, label, width = 300, ...props }) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width, margin: '0.5rem 0',backgroundColor: "white" }} 
      renderInput={(params) => <TextField {...params} label={label} />}
      {...props}
    />
  );
}