import { Box, Card, CardContent, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material';

import hpe from '../assets/hpe.jpeg';
import aimahead from '../assets/aimahead.jpeg';
import endeavr from '../assets/endeavr.jpeg';
import reuIntern from '../assets/reu_intern.jpeg';
import aggieResearch from '../assets/Aggie_Research_Program.jpeg';
import roboMasters from '../assets/Standard.jpeg';
import aggieCodingClub from '../assets/Aggie_Coding_Club.jpeg';

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
      'Built internal AI applications that let operations leaders query operational data in natural language and generate on-demand insights.',
      'Implemented text-to-SQL and tool-calling workflows with Oracle AI Database, PL/SQL packages, and business-rule guardrails.',
      'Built a custom vector store and similarity-search layer in Oracle 19c using PL/SQL, REST APIs, and embedding models.',
      'Developed Oracle APEX interfaces with persistent chat history, session management, and OCI-integrated AI workflows.',
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
    role: 'Autonomous Driving Research Intern',
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
    role: 'Machine Learning Research Intern',
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

const activities = [
  {
    organization: 'TAMU RoboMasters',
    role: 'Computer Vision Developer',
    period: 'Aug 2023–May 2024',
    image: roboMasters,
    tags: ['Python', 'OpenCV'],
    bullets: ['Implemented OpenCV-based target detection and contour extraction for RoboMaster University League competition robots.'],
  },
  {
    organization: 'Aggie Coding Club',
    role: 'Project Manager',
    period: 'Jan 2022–May 2022',
    image: aggieCodingClub,
    tags: ['React', 'JavaScript', 'Technical Leadership'],
    bullets: ['Led 20+ members in web-development workshops and coordinated React projects including personal websites and e-commerce interfaces.'],
  },
];

function ExperienceCard({ item }) {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={item.image}
            alt={`${item.organization} visual`}
            sx={{ width: '100%', height: '100%', minHeight: 210, objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1.5}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 750 }}>
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noreferrer" color="inherit" underline="hover">
                      {item.organization}
                    </Link>
                  ) : item.organization}
                </Typography>
                <Typography sx={{ mt: 0.5, fontWeight: 600 }}>{item.role}</Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' }, minWidth: 'fit-content' }}>
                <Typography color="text.secondary" variant="body2">{item.period}</Typography>
                {item.location && <Typography color="text.secondary" variant="body2">{item.location}</Typography>}
              </Box>
            </Stack>

            <Box component="ul" sx={{ pl: 2.5, my: 2.5, color: 'text.secondary' }}>
              {item.bullets.map((bullet) => (
                <Typography component="li" key={bullet} sx={{ mb: 1, lineHeight: 1.65 }}>
                  {bullet}
                </Typography>
              ))}
            </Box>
            <TagList items={item.tags} />
          </CardContent>
        </Grid>
      </Grid>
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
        {experiences.map((item) => <ExperienceCard key={`${item.organization}-${item.role}`} item={item} />)}
      </Stack>

      <Box sx={{ mt: 10 }}>
        <SectionHeading
          eyebrow="Leadership"
          title="Technical leadership and activities"
          description="Selected technical organizations where I contributed as a developer, project manager, and mentor."
        />
        <Stack spacing={3}>
          {activities.map((item) => <ExperienceCard key={`${item.organization}-${item.role}`} item={item} />)}
        </Stack>
      </Box>
    </Container>
  );
}

export default Experience;
