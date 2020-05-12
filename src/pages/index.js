import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/containers/Layout';
import SEO from '../components/utils/Seo';
import BasicProfile from '../components/elements/BasicProfile';
import Container from '../components/containers/Container';
import { Section, SectionTitle, SectionDescription } from '../components/elements/Section';
import HighlightedSkills from '../components/elements/HighlightedSkills';
import ProjectCard from '../components/elements/ProjectCard';
import Footer from '../components/elements/Footer';

const query = graphql`
  query {
    guiddeCover: file(relativePath: { eq: "card-guidde.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    amigofonoCover: file(relativePath: { eq: "card-amigofono.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <Layout>
        <SEO
          title="Full-stack software engineer"
          keywords={['full-stack', 'software engineer', 'developer', 'javascript', 'react', 'rails', 'full-stack']}
        />

        <Header>
          <BasicProfile />
        </Header>

        <ColumnsContainer>
          <LeftColumn>
            <Section>
              <SectionTitle>About</SectionTitle>
              <SectionDescription>
                I'm an experienced software engineer with a degree in computer science, working
                with back-end and front-end development. In the past years, I've worked for the government,
                agencies and small businesses to help them communicate, engage and make more sales.
              </SectionDescription>
              <SectionDescription>
                As a business owner myself, I do have first-hand experience on the importance of writing clean,
                maintainable and reusable code for the long run of every product.
              </SectionDescription>
            </Section>

            <Section>
              <SectionTitle>Location</SectionTitle>
              <LocationInfo>
                <LocationIcon viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" />
                </LocationIcon>

                <SectionDescription>Remote (Currently at GMT-3)</SectionDescription>
              </LocationInfo>
            </Section>
          </LeftColumn>

          <RightColumn>
            <Section>
              <SectionTitle>Skills</SectionTitle>
              <HighlightedSkills />
            </Section>
          </RightColumn>
        </ColumnsContainer>

        <ProjectsList>
          <SectionTitle>Selected Projects</SectionTitle>

          <ProjectCard
            name="Guidde"
            description="
              Guidde makes it easier for customers to get the help they need in one or two clicks.
              Through its widget, customers can have context-based article suggestions, get access
              to the whole knowledgebase, and send a message if they need it. The analytics panel for
              users shows an overview of the customers' interactions with the support content, helping them
              to understand what are the main pain points with their product."
            tags={['Rails', 'React', 'GraphQL', 'PostgresSQL']}
            image={data.guiddeCover.childImageSharp.fluid}
            url="https://guidde.io"
          />

          <ProjectCard
            name="Amigofono"
            description="
              Focused on helping speech therapists and their patients to work together and
              achieve better and sustainable results faster, Amigofono provides an app for
              patients where they can be reminded when an how they need to perform their
              therapy activities. For therapists, its all-in-one platform helps professionals
              to track the evolution of each patient, deal with appointments management,
              secure files and exams storage, invoicing and billing."
            tags={['Rails', 'NodeJS', 'React', 'React Native', 'GraphQL', 'MariaDB']}
            image={data.amigofonoCover.childImageSharp.fluid}
            url="https://amigofono.com.br"
          />
        </ProjectsList>

        <Footer />
      </Layout>
    )}
  />
);

const Header = styled.div`
  padding: 70px 0 140px;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);

  p { margin-bottom: 0 }
`;

const LocationIcon = styled.svg`
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

const ColumnsContainer = styled(Container)`
  margin-bottom: 80px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftColumn = styled.div`
  @media (min-width: 768px) {
    max-width: 540px;
  }
`;

const RightColumn = styled.div`
  @media (min-width: 768px) {
    margin-left: 50px;
    width: 280px;
  }
`;

const ProjectsList = styled(Container)``;

export default IndexPage;
