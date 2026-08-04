import { Box, Typography } from '@mui/material';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Box sx={{ mb: 4 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em' }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h4" component="h1" sx={{ fontWeight: 750, mb: 1 }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.7 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeading;
