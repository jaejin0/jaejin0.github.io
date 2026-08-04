import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';

import natureNet from '../assets/NatureNet.jpeg';
import maesPointsReward from '../assets/maes_points_reward_system.jpeg';
import kungFuTea from '../assets/kung_fu_tea.jpeg';

import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const projects = [
  {
    title: 'RL Library',
    period: 'Oct 2024–Present',
    image: natureNet,
    link: 'https://github.com/jaejin0/rl-library',
    tags: ['Python', 'PyTorch', 'PyGame', 'NumPy'],
    summary: 'A learning-oriented library of reinforcement-learning algorithms and Markov decision process environments.',
    bullets: [
      'Implemented reusable abstractions for agents, environments, policies, and training loops.',
      'Used the project to study reinforcement learning and multi-agent reinforcement learning through direct implementation.',
    ],
  },
  {
    title: 'NatureNet',
    period: 'Jan 2024–May 2024',
    image: natureNet,
    link: 'https://drive.google.com/file/d/1sy7SBjxcC6cigLgP87VX8SLH8FAio2MV/view?usp=sharing',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'React', 'Express'],
    summary: 'A full-stack wildlife detection and alerting system for dangerous-animal sightings.',
    bullets: [
      'Trained a custom computer-vision model and exposed inference through a Flask API.',
      'Built SMS/email notification workflows and a React/Express interface for user settings.',
    ],
  },
  {
    title: 'MAES Points Reward System',
    period: 'Jan 2024–May 2024',
    image: maesPointsReward,
    link: 'https://maes-rewards-6faf74a71462.herokuapp.com/',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Heroku', 'CI/CD'],
    summary: 'A deployed rewards platform for a Texas A&M student organization.',
    bullets: [
      'Built and deployed the application with a PostgreSQL backend using Ruby on Rails and Heroku.',
      'Contributed across requirements, design, implementation, testing, deployment, and user training within an Agile team.',
    ],
  },
  {
    title: 'Kung Fu Tea POS Prototype',
    period: 'Aug 2023–Dec 2023',
    image: kungFuTea,
    tags: ['Vue.js', 'Express.js', 'JavaScript', 'Heroku'],
    summary: 'A mock point-of-sale web application developed as an Agile team project.',
    bullets: [
      'Built a Vue.js frontend and Express.js backend with third-party API integrations.',
      'Served as project manager while contributing to prototype design and implementation.',
    ],
  },
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <SectionHeading
        eyebrow="Projects"
        title="Selected software and AI projects"
        description="Projects that demonstrate applied machine learning, full-stack delivery, databases, deployment, and technical leadership."
      />

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card sx={{ height: '100%', overflow: 'hidden' }}>
              <Box
                component="img"
                src={project.image}
                alt={`${project.title} screenshot`}
                sx={{ width: '100%', height: 210, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="flex-start">
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 750 }}>{project.title}</Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>{project.period}</Typography>
                  </Box>
                  {project.link && (
                    <Button component={Link} href={project.link} target="_blank" rel="noreferrer" size="small">
                      View
                    </Button>
                  )}
                </Stack>

                <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                  {project.summary}
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                  {project.bullets.map((bullet) => (
                    <Typography component="li" key={bullet} sx={{ mb: 0.75, lineHeight: 1.6 }}>
                      {bullet}
                    </Typography>
                  ))}
                </Box>
                <TagList items={project.tags} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
