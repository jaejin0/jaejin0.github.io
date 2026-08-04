import { Box, Chip } from '@mui/material';

function TagList({ items = [] }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          variant="outlined"
          sx={{ bgcolor: 'background.paper' }}
        />
      ))}
    </Box>
  );
}

export default TagList;
