import { Box, Typography } from '@mui/material';
import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description, component = 'h2' }) {
  return (
    <Reveal>
      <Box sx={{ mb: 4 }}>
        {eyebrow && (
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 750, letterSpacing: '0.13em' }}
          >
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h4" component={component} sx={{ mb: 1 }}>
          {title}
        </Typography>
        {description && (
          <Typography color="text.secondary" sx={{ maxWidth: 780, lineHeight: 1.75 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Reveal>
  );
}

export default SectionHeading;
