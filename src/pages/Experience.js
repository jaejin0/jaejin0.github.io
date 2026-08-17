import { Box, Card, CardContent, Container, Link, Stack, Typography } from '@mui/material';

import hpe from '../assets/HPE.png';
// import aimahead from '../assets/aimahead.jpeg';
// import endeavr from '../assets/endeavr.jpeg';
import reuIntern from '../assets/University_Of_Delaware.jpeg';
import aggieResearch from '../assets/Texas_A&M.svg';
import arkisys from '../assets/arkisys.jpeg';
// import texasAimbots from '../assets/Texas_Aimbots.jpg';
// import aggieCodingClub from '../assets/Aggie_Coding_Club.jpeg';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const endeavr = `${process.env.PUBLIC_URL || ''}/endeavr.jpeg`;
const texasAimbots = `${process.env.PUBLIC_URL || ''}/Texas_Aimbots.jpg`;
const aggieCodingClub = `${process.env.PUBLIC_URL || ''}/Aggie_Coding_Club.jpeg`;


const experiences = [
  {
    organization: 'Hewlett Packard Enterprise',
    role: 'Software Engineer — AI & Enterprise Systems',
    period: 'Intern: May 2025–May 2026 · Full-time: Jun 2026–Present',
    location: 'Spring, TX',
    link: 'https://www.hpe.com/us/en/home.html',
    image: hpe,
    tags: ['Oracle AI Database', 'Oracle Cloud Infrastructure', 'PL/SQL', 'Vector Search', 'Tool Calling'],
    bullets: [
      'Build production AI applications for operations teams to query enterprise data in natural language and generate on-demand insights.',
      'Implement text-to-SQL, RAG, and tool-calling workflows using Oracle AI Database and PL/SQL, integrating LLM and embedding APIs through Oracle Cloud Infrastructure (OCI) with role-based data-access constraints.',
      'Built a custom vector storage and similarity-search layer in Oracle 19c using PL/SQL, REST APIs, and embedding models.',
    ],
  },
  {
    organization: 'Texas A&M University',
    role: 'Graduate Researcher — Multi-Robot Planning & Coordination',
    period: 'Aug 2024–Present',
    location: 'College Station, TX',
    link: 'https://engineering.tamu.edu/cse/index.html',
    image: aggieResearch,
    tags: ['Graphs of Convex Sets', 'Robotarium', 'Multi-Agent Planning', 'Simulation', 'Optimization'],
    bullets: [
      'Formulated cyclic multi-robot rendezvous as constrained shortest-path planning on a Graph of Convex Sets in phase-time under range-limited communication.',
      'Built Python simulation and GCS planning infrastructure for multi-robot coordination and implemented graph sparsification to reduce planning complexity.',
      'Evaluated against consensus baselines on an 11-robot topology and validated planned trajectories on Robotarium hardware; paper accepted to IROS 2026.',
    ],
  },
  {
    organization: 'Texas A&M University',
    role: 'Research Assistant — NIH AIM-AHEAD Research',
    period: 'Aug 2025–Present',
    location: 'Remote',
    link: 'https://www.aim-ahead.net/',
    image: aggieResearch,
    tags: ['Python', 'SQL', 'EHR Data', 'Risk Modeling', 'Calibration', 'Fairness'],
    bullets: [
      'Built Python/SQL pipelines over the OCHIN 2023 EHR dataset to construct a 440,000+ patients T2D cohort for cardiovascular risk analysis.',
      'Evaluated AHA PREVENT risk equations using C-index, calibration, and subgroup fairness analyses across the clinical cohort.',
    ],
  },
  {
    organization: 'ENDEAVR Institute',
    role: 'Machine Learning Engineer Intern',
    period: 'Oct 2024–Feb 2025',
    location: 'College Station, TX',
    link: 'https://endeavr.city/',
    image: endeavr,
    tags: ['PyTorch', 'GAIL', 'PPO', 'Imitation Learning'],
    bullets: [
      'Implemented a PPO-based generator for a GAIL imitation-learning pipeline in PyTorch.',
      'Validated the imitation-learning workflow on Gymnasium environments through simulation-based policy experiments.',
    ],
  },
  {
    organization: 'University of Delaware',
    role: 'Autonomous Driving Research Intern',
    period: 'Jun 2023–Aug 2023',
    location: 'Newark, DE',
    link: 'https://mrsec.udel.edu/undergraduate-education-and-outreach/reu/',
    image: reuIntern,
    tags: ['Reinforcement Learning', 'PyTorch', 'DQN', 'DDPG', 'Autonomous Driving'],
    bullets: [
      'Modified a Gymnasium-based highway simulator and implemented DQN and DDPG agents for discrete and continuous vehicle control.',
      'Evaluated reward-weight trade-offs between energy efficiency and driving-performance metrics and presented results at a research symposium.',
    ],
  },
  {
    organization: 'Texas A&M University',
    role: 'Undergraduate Research Assistant — Big Data Systems',
    period: 'Sep 2022–May 2023',
    location: 'College Station, TX',
    link: 'https://aggieresearch1.wpengine.com/undergraduates/',
    image: aggieResearch,
    tags: ['Python', 'C++', 'Linux', 'Apache Spark', 'HDFS', 'Bash'],
    bullets: [
      'Configured Apache Spark and HDFS environments on Linux clusters and built Python/Bash tooling to profile runtime and memory behavior from garbage-collection logs.',
      'Modified Peregrine C++ source code to convert multi-label graph datasets into binary format for graph-processing workflows.',
    ],
  },
  {
    organization: 'Arkisys',
    role: 'SEC Directed Intern — Frontend Development',
    period: 'Jun 2022–Aug 2022',
    location: 'Remote',
    link: 'https://www.arkisys.com/',
    image: arkisys,
    tags: ['JavaScript', 'React'],
    bullets: [
      'Developed a frontend dashboard for aerospace startup Arkisys, enabling users to view, organize, and manage satellite information through a structured interface.'
    ],
  },
];

const publications = [
  {
    authors: 'Jaejin Cha, Dylan Shell',
    title: 'Planning and Execution for Multi-Robot Cyclic Rendezvous via Graphs of Convex Sets',
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)',
    status: 'Accepted',
    year: '2026',
    description:
      'Introduced a role-based coordination method and planned courier trajectories in phase-time using Graphs of Convex Sets under range-limited communication; evaluated in simulation and on Robotarium hardware.',
    link: '',
  },
  {
    authors: 'Jaejin Cha',
    title: 'Rendezvous-Based Multi-Robot Communication Under Cyclic Paths',
    venue: "M.S. Thesis, Texas A&M University",
    status: 'Defended',
    year: '2026',
    description:
      'Studied communication-aware coordination and rendezvous planning for multi-robot systems operating on cyclic paths under limited communication.',
    link: '',
  },
];

const activities = [
  {
    organization: 'Texas Aimbots',
    role: 'Computer Vision Developer',
    period: 'Aug 2023–May 2024',
    image: texasAimbots,
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    bullets: [
      'Implemented OpenCV-based target detection and contour extraction for RoboMaster University League competition robots.',
    ],
  },
  {
    organization: 'Aggie Coding Club',
    role: 'Project Manager',
    period: 'Jan 2022–May 2022',
    image: aggieCodingClub,
    tags: ['React', 'JavaScript', 'Technical Leadership'],
    bullets: [
      'Led 20+ members in web-development workshops and coordinated React projects including personal websites and e-commerce interfaces.',
    ],
  },
];

function ExperienceCard({ item }) {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ xs: 'flex-start', sm: 'flex-start' }}>
          {item.image && (
            <Box
              sx={{
                width: 76,
                height: 76,
                flex: '0 0 auto',
                borderRadius: 2.5,
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                p: 1,
                display: 'grid',
                placeItems: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={`${item.organization} logo or activity image`}
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
          )}

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5}>
              <Box>
                <Typography variant="h5">
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noreferrer" color="inherit" underline="hover">
                      {item.organization}
                    </Link>
                  ) : (
                    item.organization
                  )}
                </Typography>
                <Typography sx={{ mt: 0.5, fontWeight: 650 }}>{item.role}</Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' }, minWidth: 'fit-content' }}>
                <Typography color="text.secondary" variant="body2">{item.period}</Typography>
                {item.location && <Typography color="text.secondary" variant="body2">{item.location}</Typography>}
              </Box>
            </Stack>

            <Box component="ul" sx={{ pl: 2.5, my: 2.25, color: 'text.secondary' }}>
              {item.bullets.map((bullet) => (
                <Typography component="li" key={bullet} sx={{ mb: 0.9, lineHeight: 1.68 }}>
                  {bullet}
                </Typography>
              ))}
            </Box>
            <TagList items={item.tags} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function PublicationCard({ publication }) {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 2.5, md: 3.25 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5}>
          <Box>
            <Typography color="text.secondary" variant="body2">
              {publication.authors}
            </Typography>
            <Typography variant="h6" sx={{ mt: 0.6, lineHeight: 1.4 }}>
              {publication.link ? (
                <Link href={publication.link} target="_blank" rel="noreferrer" color="inherit" underline="hover">
                  {publication.title}
                </Link>
              ) : (
                publication.title
              )}
            </Typography>
            <Typography color="primary.main" variant="body2" sx={{ mt: 0.75, fontWeight: 700 }}>
              {publication.venue} · {publication.status}
            </Typography>
          </Box>
          <Typography color="text.secondary" variant="body2">{publication.year}</Typography>
        </Stack>
        <Typography color="text.secondary" sx={{ mt: 1.6, lineHeight: 1.7 }}>
          {publication.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Experience() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <SectionHeading
        eyebrow="Experience"
        title="Industry and research experience"
        description="Production software, multi-robot planning, autonomous-driving ML, and distributed data systems."
      />
      <Stack spacing={3}>
        {experiences.map((item, index) => (
          <Reveal key={`${item.organization}-${item.role}`} delay={(index % 3) * 70}>
            <ExperienceCard item={item} />
          </Reveal>
        ))}
      </Stack>

      <Box sx={{ mt: 10 }}>
        <SectionHeading
          eyebrow="Research"
          title="Research and publications"
          description="IROS 2026 work on constrained spatiotemporal planning, range-limited communication, simulation, and Robotarium validation."
        />
        <Stack spacing={2.5}>
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 90}>
              <PublicationCard publication={publication} />
            </Reveal>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 10 }}>
        <SectionHeading
          eyebrow="Leadership"
          title="Technical leadership and activities"
          description="Selected organizations where I contributed as a developer, project manager, and mentor."
        />
        <Stack spacing={3}>
          {activities.map((item, index) => (
            <Reveal key={`${item.organization}-${item.role}`} delay={index * 90}>
              <ExperienceCard item={item} />
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default Experience;
