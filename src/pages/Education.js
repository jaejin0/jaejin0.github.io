import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import tamu from '../assets/tamu_image.jpeg';
import gradImage from '../assets/graduation_Alma_Mater.jpeg';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Texas A&M University',
    period: 'Aug 2024–Dec 2026',
    image: tamu,
    summary: 'Thesis in multi-robot systems focused on communication-aware planning and rendezvous under cyclic paths.',
    details: [
      'Advisor: Dylan Shell',
      'Research areas: multi-robot communication, graph-based planning, coordination, and autonomous systems',
      'Paper accepted to IROS 2026',
    ],
    coursework: ['AI Robotics', 'Intelligent Agents', 'Multi-Agent Reinforcement Learning', 'Machine Learning', 'Computational Optimization'],
  },
  {
    degree: 'Bachelor of Science in Computer Science, Minor in Mathematics',
    institution: 'Texas A&M University',
    period: 'Aug 2020–Aug 2024',
    image: gradImage,
    summary: 'Coursework and project experience across software engineering, machine learning, databases, systems, and mathematics.',
    details: [
      'Computer vision developer with TAMU RoboMasters',
      'Project manager with Aggie Coding Club',
      'Research experience in autonomous driving and big data systems',
    ],
    coursework: ['Software Engineering', 'Machine Learning', 'Artificial Intelligence', 'Algorithms', 'Computer Systems', 'Database Systems'],
  },
];

function Education() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <SectionHeading
        eyebrow="Education"
        title="Texas A&M University"
        description="Graduate research in multi-robot systems supported by a broad computer science and mathematics foundation."
      />

      <Stack spacing={3}>
        {education.map((item) => (
          <Card key={item.degree} sx={{ overflow: 'hidden' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.institution}
                  sx={{ width: '100%', height: '100%', minHeight: 240, objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={12} md={8} sx={{ p: { xs: 2.5, md: 4 } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 750 }}>{item.degree}</Typography>
                    <Typography sx={{ mt: 0.5, fontWeight: 600 }}>{item.institution}</Typography>
                  </Box>
                  <Typography color="text.secondary" variant="body2">{item.period}</Typography>
                </Stack>

                <Typography color="text.secondary" sx={{ mt: 2.5, lineHeight: 1.7 }}>
                  {item.summary}
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                  {item.details.map((detail) => (
                    <Typography component="li" key={detail} sx={{ mb: 0.75, lineHeight: 1.6 }}>
                      {detail}
                    </Typography>
                  ))}
                </Box>

                <Accordion disableGutters elevation={0} sx={{ mt: 2, border: '1px solid rgba(20, 32, 51, 0.08)' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 650 }}>Selected coursework</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TagList items={item.coursework} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default Education;
