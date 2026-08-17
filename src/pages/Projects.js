import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';

import robotarium from '../assets/robotarium.jpeg';
import jalam_trading_bot from '../assets/JAL_AM_Trading_Bot.jpg';
import ros2 from '../assets/ros2.png';
import highwaySim from '../assets/highwaysim.png';

import natureNet from '../assets/NatureNet.jpeg';
import maesPointsReward from '../assets/maes_points_reward_system.jpeg';
// import kungFuTea from '../assets/kung_fu_tea.jpg';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const projectGroups = [
  {
    title: 'Robotics, Simulation, & ML Systems',
    description: 'Systems and research projects in autonomy simulation, multi-agent planning, and sequential decision-making.',
    projects: [
      {
        title: 'AutonomyForge',
        period: 'Aug 2026–Present',
        image: null, // Replace with an imported screenshot or GIF when you have a visual ready.
        // link: 'YOUR_AUTONOMYFORGE_REPOSITORY_URL',
        tags: ['C++20', 'CMake', 'Multi-Agent Planning', 'Simulation'],
        summary: 'C++20 multi-agent simulation and evaluation framework for reproducible autonomy experiments.',
        bullets: [
          'Designing and building a C++20 multi-agent simulation and planning framework for deterministic autonomy experiments, with modular interfaces for scenarios, planners, simulation, and evaluation.',
        ],
      },
      {
          title: 'Multi-Robot Cyclic Rendezvous Trajectory Planning',
          period: 'Aug 2025–March 2026',
          image: robotarium,
          // link: 'YOUR_RENDEZVOUS_COMMUNICATION_SIM'
          tags: ['Python', 'Graph of Convex Sets', 'Robotarium', 'Multi-Agent Planning', 'Trajectory Planning','Simulation', 'Optimization'],
          summary: 'IROS 2026 research on communication-aware planning for multi-robot systems with cyclic rendezvous constraints.',
          bullets: [
            'Formulated cyclic multi-robot rendezvous as constrained shortest-path planning in phase–time space.',
            'Built simulation and planning infrastructure, evaluated coordination strategies on an 11-robot topology, and validated trajectories on Robotarium hardware.',
          ],
      },
      {
        title: 'Bitcoin Trading Simulator',
        period: 'Nov 2024–Feb 2025',
        image: jalam_trading_bot,
        tags: ['Python', 'PyTorch', 'NumPy', 'MDP', 'Reinforcement Learning'],
        summary: 'An MDP-based market simulation environment for reinforcement-learning experiments in sequential decision-making.',
        bullets: [
          'Designed an MDP environment with configurable observations, actions, transaction mechanics, and reward functions.',
          'Trained and evaluated reinforcement-learning agents on historical Bitcoin market data.',
        ],
      },
      {
        title: 'Graduate Robotics Coursework — ROS 2',
        period: 'Aug 2024–Dec 2024',
        image: ros2,
        tags: ['Python', 'ROS 2', 'PRM', 'Dijkstra', 'Particle Filter', 'Robot Navigation', 'Simulation'],
        summary: 'Team-based projects implementing classical robotics algorithms for planning, localization, perception, and navigation in ROS 2.',
        bullets: [
          'Implemented PRM-based robot navigation with obstacle-aware roadmap construction, Dijkstra shortest-path search, and velocity control to reach user-defined goals.',
          'Built particle-filter localization using motion, compass, and floor-sensor observations, with resampling, pose estimation, and RViz visualization.',

        ],
      },
      {
        title: 'Autonomous Driving RL Simulation',
        period: 'Jun 2023–Aug 2023',
        image: highwaySim,
        tags: ['Python', 'PyTorch', 'Gymnasium', 'Reinforcement Learning', 'DQN', 'DDPG'],
        summary: 'Reinforcement-learning experiments for vehicle control in a simulated highway environment.',
        bullets: [
          'Modified a Gymnasium-based highway simulator and implemented DQN and DDPG agents for discrete and continuous vehicle control.',
          'Evaluated reward-weight tradeoffs between energy efficiency and driving-performance objectives.',
          'Developed LiDAR processing and tracking nodes using ROS 2 publishers/subscribers, and integrated project workflows with ROS 2 launch files and bag playback.',
        ],
      },
    ],
  },
  {
    title: 'Applied AI & Software Systems',
    description: 'End-to-end software projects spanning applied ML, backend systems, databases, deployment, and product development.',
    projects: [
      {
        title: 'NatureNet',
        period: 'Jan 2024–May 2024',
        image: natureNet,
        link: 'https://drive.google.com/file/d/1sy7SBjxcC6cigLgP87VX8SLH8FAio2MV/view?usp=sharing',
        linkLabel: 'View demo',
        tags: ['Python', 'YOLOv8', 'RoboFlow', 'Flask', 'React', 'Express'],
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
        // link: 'https://maes-rewards-6faf74a71462.herokuapp.com/',
        linkLabel: 'Restricted demo',
        tags: ['Ruby on Rails', 'PostgreSQL', 'Heroku', 'CI/CD'],
        summary: 'A deployed rewards platform for a Texas A&M student organization.',
        bullets: [
          'Built and deployed the application with a PostgreSQL backend using Ruby on Rails and Heroku.',
          'Contributed across requirements, design, implementation, testing, deployment, and user training within an Agile team.',
        ],
      },
      // {
      //   title: 'Kung Fu Tea POS Prototype',
      //   period: 'Aug 2023–Dec 2023',
      //   image: kungFuTea,
      //   tags: ['Vue.js', 'Express.js', 'JavaScript', 'Heroku'],
      //   summary: 'A mock point-of-sale web application developed as an Agile team project.',
      //   bullets: [
      //     'Built a Vue.js frontend and Express.js backend with third-party API integrations.',
      //     'Served as project manager while contributing to prototype design and implementation.',
      //   ],
      // },
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
        title="Selected systems and ML projects"
        description="Projects across autonomy simulation, sequential decision-making, applied machine learning, and software platforms."
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
