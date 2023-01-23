import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
} from '@mui/material';

import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

// Helpers
import { getAge } from '../../helpers/date';

// Custom list component
const ListText = (props) => (
  <ListItem disablePadding sx={{
    display: 'list-item',
    listStyleType: 'disc',
  }}>
    <ListItemText primary={props.children} />
  </ListItem>
)

const Home = (props) => {
  // Get candidate's current age
  const currentAge = getAge("1994/09/17");

  return (
    <Container>

      <Box mb={10}>
        <Box
          textTransform='uppercase'
          fontWeight={'bold'}
          sx={{ fontSize: 'h4.fontSize' }}
        >
          Willian Machado Botacin
        </Box>
        <Box color='gray'>Web/Mobile Programmer (Full-stack)</Box>
        <Box color='gray'>{currentAge} years old · (+55) 28 99984-3822</Box>
        <Box color='gray' mb={2}>willianmbotacin@outlook.com</Box>

        <Link
          underline="none"
          href='https://github.com/willianmbotacin'
          target='_blank'
          rel='noreferrer'
          sx={{ display: 'inline-block', mr: 3 }}
        >
          <GitHubIcon sx={{ mr: 1, position: 'absolute' }} />
          <Box ml={4}>GitHub</Box>
        </Link>
        <Link
          underline="none"
          href='https://br.linkedin.com/in/willian-machado-botacin-03a89419a?trk=public_profile_samename_profile_profile-result-card_result-card_full-click'
          target='_blank'
          rel='noreferrer'
          sx={{ display: 'inline-block' }}
        >
          <LinkedInIcon sx={{ mr: 1, position: 'absolute' }} />
          <Box ml={4}>Linkedin</Box>
        </Link>

        <Box mt={5}>
          I aim to develop projects for professional and personal growth, in addition to contributing to the development of the company. I aim to take advantage of my technical and professional experience to bring to the company, and learn from it, the best solutions in the position of my responsibility.
        </Box>

      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Skills */}
      <Box
        mb={2}
      >
        <Box
          textTransform='uppercase'
          fontWeight={'bold'}
          sx={{ fontSize: 'h4.fontSize' }}
          mb={3}
        >
          Skills
        </Box>
        <Box
          textTransform='uppercase'
          color='gray'
          fontWeight={500}
          sx={{ fontSize: 'h6.fontSize' }}
        >
          Languages
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>English: B2 level.</ListText>
          <ListText>Spanish: Basic.</ListText>
          <ListText>Brazilian Portuguese: Native speaker.</ListText>
        </List>

        <Box
          textTransform='uppercase'
          color='gray'
          fontWeight={500}
          sx={{ fontSize: 'h6.fontSize' }}
        >
          Programming Languages and Tools
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>Proggramming Languages: PHP, Javascript, AWS.</ListText>
          <ListText>HTML Languages: HTML5, CSS3, JSON, CSS, SASS, JSX.</ListText>
          <ListText>APIs: Rest and RestFull Microservices.</ListText>
          <ListText>Rest Client Platforms: Insomnia, Postman.</ListText>
          <ListText>Database: MongoDB, Elasticsearch, MySQL, SQLserver, SQL, Oracle.</ListText>
          <ListText>JS Frameworks: ReactJS, React Native, NodeJS, jQuery.</ListText>
          <ListText>PHP Frameworks: Laravel.</ListText>
          <ListText>Versioning: Git Hub, GitLab.</ListText>
          <ListText>Webserver Applications: Apache (CPanel/WHM).</ListText>
          <ListText>Cloud services: AWS S3, IBM Cloud (Watson, DevOps, Discovery Pipeline, Container Registry, etc).</ListText>
          <ListText>Others: Landbot (chatbot creation).</ListText>
        </List>

        <Box
          textTransform='uppercase'
          color='gray'
          fontWeight={500}
          sx={{ fontSize: 'h6.fontSize' }}
        >
          Design
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>Web Design: Photoshop, Corel Draw, Flash, Adobe XD.</ListText>
          <ListText>Autodesk: Maya 3D.</ListText>
        </List>

        <Box
          textTransform='uppercase'
          color='gray'
          fontWeight={500}
          sx={{ fontSize: 'h6.fontSize' }}
        >
          Machine Learning
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>Artificial inteligence: IBM Watson API integration.</ListText>
        </List>

        <Box
          textTransform='uppercase'
          color='gray'
          fontWeight={500}
          sx={{ fontSize: 'h6.fontSize' }}
        >
          Others
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>Microsoft: Windows, Word, Excel (Avançado), PowerPoint.</ListText>
          <ListText>Linux: Ubuntu, CentOS.</ListText>
          <ListText>Brazilian Driver's License - CNH.</ListText>
        </List>
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Competencies */}
      <Box
        mb={2}
      >
        <Box
          textTransform='uppercase'
          fontWeight={'bold'}
          sx={{ fontSize: 'h4.fontSize' }}
          mb={3}
        >
          Competencies
        </Box>
        <List sx={{ color: 'gray', pl: 5 }}>
          <ListText>Web site and web platforms development.</ListText>
          <ListText>Rest API development.</ListText>
          <ListText>Mobile development.</ListText>
          <ListText>Database management.</ListText>
          <ListText>FTP server deployment and management.</ListText>
          <ListText>Infrastructure server deployment and management.</ListText>
          <ListText>Used to prototyping and brainstorming tools such as Figma, Adobe XD and Miro.</ListText>
        </List>
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Experience */}
      <Box
        mb={2}
      >
        <Box
          textTransform='uppercase'
          fontWeight={'bold'}
          sx={{ fontSize: 'h4.fontSize' }}
          mb={3}
        >
          Experience
        </Box>
        <Box mb={5}>
          <Box
            textTransform='uppercase'
            fontWeight={'bold'}
            sx={{ fontSize: 'h5.fontSize' }}
          >
            Full Stack Developer
          </Box>
          <Box color='gray'>
            <Box
              textTransform='uppercase'
              fontWeight={500}
              sx={{ fontSize: 'h6.fontSize' }}
            >
              Aira Investimentos
            </Box>
            <Box
              fontWeight={500}
              mb={3}
              sx={{ fontSize: '.8rem' }}
            >
              (Since May 2021)
            </Box>

            Front-end and back-end web and mobile applications developer.
            <List sx={{ pl: 5 }}>
              <ListText>Mobile chatbot app development using React Native integrated with Landbot.</ListText>
              <ListText>Administrative panel development (automation of calculations and dashboards for investment analysis).</ListText>
              <ListText>Services management such as: Netlify e Databases.</ListText>
              <ListText>Development using Microservice system.</ListText>
              <ListText>Programming: Javascript, React JSX, NativeBase.</ListText>
              <ListText>Frameworks: ReactJS, React Native e NodeJS.</ListText>
              <ListText>Integrations: Landbot, Vindi, Banco Central, Yahoo finance, IBGE and Anbima.</ListText>
            </List>
          </Box>
        </Box>

        <Box mb={5}>
          <Box
            textTransform='uppercase'
            fontWeight={'bold'}
            sx={{ fontSize: 'h5.fontSize' }}
          >
            Full Stack Developer
          </Box>
          <Box color='gray'>
            <Box
              textTransform='uppercase'
              fontWeight={500}
              sx={{ fontSize: 'h6.fontSize' }}
            >
              SCS Engenharia
            </Box>
            <Box
              fontWeight={500}
              mb={3}
              sx={{ fontSize: '.8rem' }}
            >
              (January 2021 - May 2022)
            </Box>

            Front-end and back-end web and mobile applications developer.
            <List sx={{ pl: 5 }}>
              <ListText>Virtual assistant development using the IBM Watson artificial inteligence API.</ListText>
              <ListText>IBM Cloud services management such as: Clusters, Databases and Kubernetes.</ListText>
              <ListText>Development using Microservice system.</ListText>
              <ListText>Programming: Javascript, React JSX, SCSS and Chakra.</ListText>
              <ListText>Frameworks: ReactJS, React Native and NodeJS.</ListText>
              <ListText>Integrations: Wirecard, IBM Cloud Services and PhoneMyBot.</ListText>
            </List>
          </Box>
        </Box>

        <Box mb={5}>
          <Box
            textTransform='uppercase'
            fontWeight={'bold'}
            sx={{ fontSize: 'h5.fontSize' }}
          >
            Full Stack Developer
          </Box>
          <Box color='gray'>
            <Box
              textTransform='uppercase'
              fontWeight={500}
              sx={{ fontSize: 'h6.fontSize' }}
            >
              NaturaleLabs and Instituto Primus
            </Box>
            <Box
              fontWeight={500}
              mb={3}
              sx={{ fontSize: '.8rem' }}
            >
              (March 2018 - January 2021)
            </Box>

            Front-end and back-end systems web developer.
            <List sx={{ pl: 5 }}>
              <ListText>Development of the company's Management System.</ListText>
              <ListText>Online course platform development.</ListText>
              <ListText>Development using Microservice system.</ListText>
              <ListText>Proggramming: PHP 7, Jquery, Javascript, HTML 5, CSS 3, Bootstratp 4.</ListText>
              <ListText>Frameworks: Laravel 6.</ListText>
              <ListText>Integrations: Facebook, Monetizze, Vimeo, Pagcorp, Vindi, LeadLovers, AWS S3.</ListText>
            </List>
          </Box>
        </Box>

        <Box mb={5}>
          <Box
            textTransform='uppercase'
            fontWeight={'bold'}
            sx={{ fontSize: 'h5.fontSize' }}
          >
            System Deployer
          </Box>
          <Box color='gray'>
            <Box
              textTransform='uppercase'
              fontWeight={500}
              sx={{ fontSize: 'h6.fontSize' }}
            >
              Grupo Plantec
            </Box>
            <Box
              fontWeight={500}
              mb={3}
              sx={{ fontSize: '.8rem' }}
            >
              (June 2016 - February 2018)
            </Box>

            <Box>
              Deployer and analyst of the Sankhya Gestão de Negócios ERP System, on the company Agroplantec and other companies from Plantec's group.
            </Box>
            <List sx={{ pl: 5 }}>
              <ListText>ERP Sankhya deploy in all sectors of the campany.</ListText>
              <ListText>Company's all processes analyst.</ListText>
              <ListText>System organizer, scheduler and validator of meetings and consultancies.</ListText>
              <ListText>Trainer of key users of each sector of the company for the use of the ERP system.</ListText>
              <ListText>Deployed Modules: Purchases, Sales, Prices, Inventory Control, Personnel, Tax, Accounting, Finance, Payments / Receipts, Distribution, Billing, Commissioning.</ListText>
              <ListText>Report automatization using iReport.</ListText>
              <ListText>Database analyst (Oracle Sql).</ListText>
              <ListText>Linux server management (CentOS).</ListText>
              <ListText>Integration with biometric fingerprint employee time clock machine system.</ListText>
              <ListText>IT: maintenance and purchase of computers, printers, local networks and computing items for the company.</ListText>
              <ListText>Responsible for the tax sector.</ListText>
            </List>
          </Box>
        </Box>

        <Box mb={5}>
          <Box
            textTransform='uppercase'
            fontWeight={'bold'}
            sx={{ fontSize: 'h5.fontSize' }}
          >
            Computer Instructor
          </Box>
          <Box color='gray'>
            <Box
              textTransform='uppercase'
              fontWeight={500}
              sx={{ fontSize: 'h6.fontSize' }}
            >
              Mix Cursos
            </Box>
            <Box
              fontWeight={500}
              mb={3}
              sx={{ fontSize: '.8rem' }}
            >
              (December 2011 - March 2016)
            </Box>

            <Box>
              Computer instructor, maintenance of computers and local networks.
            </Box>
            <List sx={{ pl: 5 }}>
              <ListText>Instructor of computer courses (basic, intermediate and advanced level).</ListText>
              <ListText>Administrative Course Monitor.</ListText>
              <ListText>Windows server management.</ListText>
              <ListText>Maintenance of computers, local networks and company IT items.</ListText>
            </List>
          </Box>
        </Box>

      </Box>

    </Container >
  )
}

export default Home;