import { Avatar, Box, Button, Card, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import jaejin from '../assets/jaejin.jpeg';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

import jaejinPersonal1 from '../assets/jaejin1.jpeg';
import jaejinPersonal2 from '../assets/jaejin3.jpeg';
import jaejinPersonal3 from '../assets/jaejin9.jpeg';

const resumeHref = `${process.env.PUBLIC_URL || ''}/Jaejin_Cha_Resume.pdf`;

const focusAreas = [
  {
    title: 'ML Systems & Infrastructure',
    text: 'Production ML-backed software, data systems, model and workflow integration, scalable evaluation, and reliable backend services.',
  },
  {
    title: 'Simulation & Evaluation',
    text: 'Reproducible simulation, reinforcement and imitation learning, planner benchmarking, performance analysis, and autonomous-driving experiments.',
  },
  {
    title: 'Planning & Autonomous Systems',
    text: 'Multi-agent planning, Graphs of Convex Sets, sequential decision-making, communication-aware coordination, and autonomy software.',
  },
];

const featuredWork = [
  {
    title: 'AutonomyForge',
    text: 'An in-progress C++20 multi-agent planning and simulation framework for reproducible autonomy experiments, benchmarking, and evaluation.',
    to: '/portfolio/projects',
  },
  {
    title: 'IROS 2026 — Multi-Robot Trajectory Planning',
    text: 'Communication-aware planning in phase-time using Graphs of Convex Sets, with simulation studies and Robotarium hardware validation.',
    to: '/portfolio/experience',
  },
  {
    title: 'Production ML & Data Systems at HPE',
    text: 'Production AI and data workflows spanning database-backed applications, tool use, vector search, APIs, and enterprise data systems.',
    to: '/portfolio/experience',
  },
];

const skills = {
  Languages: ['Python', 'C++', 'SQL'],
  'Systems & Data': ['Linux', 'Docker', 'Git', 'REST APIs', 'Apache Spark', 'HDFS', 'Oracle Database', 'PostgreSQL', 'OCI'],
  'ML & Autonomy': ['PyTorch', 'Gymnasium', 'Reinforcement Learning', 'Imitation Learning', 'Graphs of Convex Sets', 'Multi-Agent Planning'],
  'Applied AI': ['Tool Calling', 'Text-to-SQL', 'RAG', 'Vector Search'],
};

const personalPhotos = [
  {
    src: jaejinPersonal1,
    alt: 'Team dinner or casual group event',
    caption: 'Spending time with teammates beyond formal project work.',
  },
  {
    src: jaejinPersonal2,
    alt: 'Participating in a robotics or engineering activity',
    caption: 'Sharing research and learning from engineers and researchers in the field.',
  },
  {
    src: jaejinPersonal3,
    alt: 'Sports, fitness, or martial arts',
    caption: 'Staying active and building discipline through regular training.',
  },
];

function AboutMe() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={7}>
          <Reveal>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 780, letterSpacing: '0.14em' }}
            >
              ML Systems • Simulation • Planning
            </Typography>
            <Typography variant="h3" component="h1" sx={{ mt: 1.5, mb: 3 }}>
              I build software systems for intelligent decision-making, simulation, and machine learning.
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.08rem', lineHeight: 1.82, maxWidth: 760 }}>
              I am an M.S. Computer Science student at Texas A&amp;M University, graduating in December 2026,
              and a Software Engineer at HPE. My work spans production AI and data systems, autonomous-driving
              simulation, reinforcement and imitation learning, and IROS 2026 research in multi-robot trajectory planning.
              I am especially interested in ML systems, sequential decision-making, planning, and simulation for intelligent and autonomous systems.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button component={RouterLink} to="/experience" variant="contained" size="large">
                View Experience
              </Button>
              <Button component={RouterLink} to="/projects" variant="outlined" size="large">
                View Projects
              </Button>
              <Button component="a" href={resumeHref} target="_blank" rel="noreferrer" size="large">
                View Resume
              </Button>
            </Stack>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={5}>
          <Reveal delay={120}>
            <Card
              sx={{
                p: 3.5,
                textAlign: 'center',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(233,240,251,0.72))',
              }}
            >
              <Avatar
                alt="Jaejin Cha"
                src={jaejin}
                sx={{ width: 220, height: 220, maxWidth: '70vw', maxHeight: '70vw', mx: 'auto', mb: 3 }}
              />
              <Typography variant="h5">Jaejin Cha</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                Software Engineer · M.S. Computer Science Student
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mt: 2 }}>
                Texas A&amp;M University · Hewlett Packard Enterprise
              </Typography>
            </Card>
          </Reveal>
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Focus"
          title="What I work on"
          description="My work sits at the intersection of strong software engineering, machine learning systems, and computational methods for simulation and autonomous decision-making."
        />
        <Grid container spacing={2.5}>
          {focusAreas.map((area, index) => (
            <Grid item xs={12} md={4} key={area.title}>
              <Reveal delay={index * 90} sx={{ height: '100%' }}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 1.25 }}>
                    {area.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.72 }}>
                    {area.text}
                  </Typography>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Evidence across systems and research"
          description="Representative work connecting production software engineering, autonomy research, and systems-oriented project development."
        />
        <Grid container spacing={2.5}>
          {featuredWork.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Reveal delay={index * 90} sx={{ height: '100%' }}>
                <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.25, mb: 2.5, lineHeight: 1.7, flexGrow: 1 }}>
                    {item.text}
                  </Typography>
                  {/* <Button component={RouterLink} to={item.to} sx={{ alignSelf: 'flex-start', px: 0 }}>
                    Explore
                  </Button> */}
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: { xs: 10, md: 14 } }}>
        <SectionHeading
          eyebrow="Toolkit"
          title="Technical skills"
          description="Technologies and methods I have used in professional work, research, or substantial software projects."
        />
        <Grid container spacing={2.5}>
          {Object.entries(skills).map(([group, items], index) => (
            <Grid item xs={12} sm={6} key={group}>
              <Reveal delay={(index % 2) * 80} sx={{ height: '100%' }}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {group}
                  </Typography>
                  <TagList items={items} />
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Reveal>
        <Box
          component="section"
          sx={{
            mt: { xs: 8, md: 10 },
          }}
        >
          <SectionHeading
            eyebrow="Beyond Engineering"
            title="A little more about me"
            description="Outside of engineering, I enjoy exploring new places, staying active, and spending time with friends and technical communities. These experiences reinforce how much I value curiosity, teamwork, and continuous learning."
          />

          <Grid container spacing={2.5}>
            {personalPhotos.map((photo, index) => (
              <Grid item xs={12} sm={4} key={photo.src}>
                <Reveal delay={index * 90}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      overflow: 'hidden',
                      borderRadius: 3,
                      transition:
                        'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: 3,
                        borderColor: 'primary.light',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: { xs: 260, sm: 210, md: 230 },
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />

                    <Box sx={{ p: 2 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                        }}
                      >
                        {photo.caption}
                      </Typography>
                    </Box>
                  </Card>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Reveal>

      <Box sx={{ mt: { xs: 10, md: 14 } }}>
        <SectionHeading eyebrow="Contact" title="Let’s connect" />
        <Reveal>
          <Card sx={{ p: 3.5 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} justifyContent="space-between">
              <Box>
                <Typography variant="h6">Open to December 2026 new-grad opportunities</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                  Software engineering, ML systems and infrastructure, simulation and evaluation, autonomy software, and planning-focused roles.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Link href="mailto:jaejin0109@gmail.com" underline="hover">jaejin0109@gmail.com</Link>
                <Link href="https://github.com/jaejin0" target="_blank" rel="noreferrer" underline="hover">github.com/jaejin0</Link>
              </Stack>
            </Stack>
          </Card>
        </Reveal>
      </Box>
    </Container>
  );
}

export default AboutMe;
