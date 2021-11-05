import { Box, TextField } from "@mui/material";

export default function AnagramFinder() {
  return <div className='AnagramFinder'>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'left',
      }}
    >
      <TextField label="Enter source word here" variant="standard" className="AnagramInput" sx={{
        maxWidth: 400,
        width: '100%',
        margin: 2
      }}></TextField>
    </Box>
  </div>
}