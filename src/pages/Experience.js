import { Box, Card, CardContent, Container, Link, Stack, Typography } from '@mui/material';

import hpe from '../assets/HPE.png';
import aimahead from '../assets/aimahead.jpeg';
import endeavr from '../assets/endeavr.jpeg';
import reuIntern from '../assets/University_Of_Delaware.jpeg';
import aggieResearch from '../assets/Texas_A&M.svg';
import texasAimbots from '../assets/Texas_Aimbots.jpg';
import aggieCodingClub from '../assets/Aggie_Coding_Club.jpeg';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TagList from '../components/TagList';

const experiences = [
  {
    organization: 'Hewlett Packard Enterprise',
    role: 'Software Engineer — AI Applications and Enterprise Systems',
    period: 'Intern: May 2025–May 2026 · Full-time: Jun 2026–Present',
    location: 'Spring, TX',
    link: 'https://www.hpe.com/us/en/home.html',
    image: hpe,
    tags: ['Oracle APEX', 'PL/SQL', 'OCI', 'RAG', 'Text-to-SQL', 'REST APIs'],
    bullets: [
      'Built internal AI applications enabling operations leaders to query operational data in natural language and generate on-demand insights.',
      'Implemented text-to-SQL and tool-calling workflows with Oracle AI Database, PL/SQL packages, and business-rule guardrails.',
      'Built a custom vector store and similarity-search layer in Oracle 19c using PL/SQL, REST APIs, and embedding models.',
      'Developed Oracle APEX interfaces with persistent chat history, session management, and OCI-integrated AI workflows.',
      'Prototyped MCP-based tool integration for internal agent workflows.',
    ],
  },
  {
    organization: 'NIH AIM-AHEAD Collaborative Research',
    role: 'Research Assistant — Texas A&M, University of Washington, and Emory University',
    period: 'Feb 2025–May 2026',
    location: 'Remote',
    link: 'https://www.aim-ahead.net/',
    image: aimahead,
    tags: ['Python', 'SQL', 'EHR Data', 'Survival Modeling', 'Fairness Evaluation'],
    bullets: [
      'Built cardiovascular EHR data pipelines for cohort construction, feature engineering, longitudinal preparation, and survival modeling.',
      'Evaluated survival models using calibration, performance metrics, and subgroup fairness analysis on real-world clinical data.',
    ],
  },
  {
    organization: 'ENDEAVR Institute',
    role: 'AI Engineer Intern',
    period: 'Oct 2024–Feb 2025',
    location: 'College Station, TX',
    link: 'https://endeavr.city/',
    image: endeavr,
    tags: ['Python', 'PyTorch', 'GAIL', 'PPO', 'Simulation'],
    bullets: [
      'Developed autonomous-driving imitation-learning components using GAIL and PPO, including generator-side implementation and simulation-oriented training workflows.',
    ],
  },
  {
    organization: 'University of Delaware',
    role: 'Autonomous Driving Research Intern',
    period: 'Jun 2023–Aug 2023',
    location: 'Newark, DE',
    link: 'https://mrsec.udel.edu/undergraduate-education-and-outreach/reu/',
    image: reuIntern,
    tags: ['Python', 'PyTorch', 'DQN', 'DDPG', 'Autonomous Driving'],
    bullets: [
      'Implemented DQN and DDPG models in an autonomous-driving simulator for trajectory control and energy-efficiency experiments.',
    ],
  },
  {
    organization: 'Texas A&M University',
    role: 'Undergraduate Research Assistant — Big Data Systems',
    period: 'Aug 2022–May 2023',
    location: 'College Station, TX',
    link: 'https://aggieresearch1.wpengine.com/undergraduates/',
    image: aggieResearch,
    tags: ['Linux', 'Apache Spark', 'HDFS', 'Bash'],
    bullets: [
      'Investigated Apache Spark memory behavior on Linux clusters and integrated Spark workloads with HDFS for performance experiments.',
      'Modified a graph-mining workflow to convert multi-label graph data into a binary representation.',
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
      'Developed graph-based planning and execution methods for communication-aware coordination among robots following cyclic paths.',
    link: '',
  },
  {
    authors: 'Jaejin Cha',
    title: 'Rendezvous-Based Multi-Robot Communication Under Cyclic Paths',
    venue: "M.S. Thesis, Texas A&M University",
    status: 'Defended',
    year: '2026',
    description:
      'Studied rendezvous-based communication and coordination for robots operating along cyclic paths under limited communication.',
    link: '',
  },
];

const activities = [
  {
    organization: 'Texas Aimbots',
    role: 'Computer Vision Developer',
    period: 'Aug 2023–May 2024',
    image: texasAimbots,
    tags: ['Python', 'OpenCV'],
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
        description="Work spanning enterprise AI systems, health data modeling, autonomous-driving research, and distributed data systems."
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
          description="My graduate research focuses on communication-aware planning and coordination in multi-robot systems."
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
