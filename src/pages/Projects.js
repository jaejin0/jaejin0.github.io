import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';

import natureNet from '../assets/NatureNet.jpeg';
import maesPointsReward from '../assets/maes_points_reward_system.jpeg';
import kungFuTea from '../assets/kung_fu_tea.jpeg';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const projectGroups = [
  {
    title: 'AI / ML and Robotics',
    description: 'Projects focused on learning systems, sequential decision-making, and computer vision.',
    projects: [
      {
        title: 'JAL-AM Trading Simulator',
        period: '2024–2025',
        image: null,
        tags: ['Python', 'PyTorch', 'NumPy', 'MDP', 'Multi-Agent Learning'],
        summary: 'A market-simulation environment for reinforcement-learning and agent-modeling experiments.',
        bullets: [
          'Formulated the simulator as a Markov decision process with explicit observations, actions, and reward design.',
          'Implemented Joint-Action Learning with Agent Modeling for sequential decision-making experiments.',
        ],
      },
      {
        title: 'NatureNet',
        period: 'Jan 2024–May 2024',
        image: natureNet,
        link: 'https://drive.google.com/file/d/1sy7SBjxcC6cigLgP87VX8SLH8FAio2MV/view?usp=sharing',
        linkLabel: 'View demo',
        tags: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'React', 'Express'],
        summary: 'A full-stack wildlife detection and alerting system for dangerous-animal sightings.',
        bullets: [
          'Trained a custom computer-vision model and exposed inference through a Flask API.',
          'Built SMS/email notification workflows and a React/Express interface for user settings.',
        ],
      },
    ],
  },
  {
    title: 'Software Systems and Platforms',
    description: 'Projects demonstrating full-stack delivery, relational databases, deployment, and technical leadership.',
    projects: [
      {
        title: 'MAES Points Reward System',
        period: 'Jan 2024–May 2024',
        image: maesPointsReward,
        link: 'https://maes-rewards-6faf74a71462.herokuapp.com/',
        linkLabel: 'Restricted demo',
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
    ],
  },
];

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <Box
        component="img"
        src={project.image}
        alt={`${project.title} project screenshot`}
        loading="lazy"
        sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
      />
    );
  }

  return (
    <Box
      role="img"
      aria-label={`${project.title} project visual placeholder`}
      sx={{
        width: '100%',
        aspectRatio: '16 / 9',
        display: 'grid',
        placeItems: 'center',
        p: 3,
        textAlign: 'center',
        color: 'primary.dark',
        background:
          'linear-gradient(135deg, rgba(40,83,154,0.16), rgba(15,118,110,0.10)), radial-gradient(circle at 78% 20%, rgba(255,255,255,0.82), transparent 35%)',
      }}
    >
      <Typography variant="h5">{project.title}</Typography>
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden' }}>
      <ProjectVisual project={project} />
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="flex-start">
          <Box>
            <Typography variant="h5">{project.title}</Typography>
            <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
              {project.period}
            </Typography>
          </Box>
          {project.link && (
            <Button
              component={Link}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              size="small"
            >
              {project.linkLabel || 'View'}
            </Button>
          )}
        </Stack>

        <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.72 }}>
          {project.summary}
        </Typography>

        <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
          {project.bullets.map((bullet) => (
            <Typography component="li" key={bullet} sx={{ mb: 0.75, lineHeight: 1.62 }}>
              {bullet}
            </Typography>
          ))}
        </Box>
        <TagList items={project.tags} />
      </CardContent>
    </Card>
  );
}

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <SectionHeading
        eyebrow="Projects"
        title="Selected software and AI projects"
        description="Projects demonstrating applied machine learning, full-stack delivery, databases, deployment, and team leadership."
      />

      <Stack spacing={9}>
        {projectGroups.map((group) => (
          <Box key={group.title}>
            <Reveal>
              <Typography variant="h5" component="h2">{group.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75, mb: 3, maxWidth: 760, lineHeight: 1.7 }}>
                {group.description}
              </Typography>
            </Reveal>
            <Grid container spacing={3}>
              {group.projects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.title}>
                  <Reveal delay={index * 90} sx={{ height: '100%' }}>
                    <ProjectCard project={project} />
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default Projects;
