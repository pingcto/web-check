import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, NavigateOptions } from 'react-router-dom';

import Heading from 'components/Form/Heading';
import Input from 'components/Form/Input'
import Button from 'components/Form/Button';
import { StyledCard } from 'components/Form/Card';
import Footer from 'components/misc/Footer';
import FancyBackground from 'components/misc/FancyBackground';

import docs from 'utils/docs';
import colors from 'styles/colors';
import { determineAddressType } from 'utils/address-type-checker';

const HomeContainer = styled.section`
  // Keep the same styles
`;

const UserInputMain = styled.form`
  // Keep the same styles
`;

const ErrorMessage = styled.p`
  // Keep the same styles
`;

const SiteFeaturesWrapper = styled(StyledCard)`
  // Keep the same styles
`;

const Home = (): JSX.Element => {
  // Keep the same states and functions

  return (
    <HomeContainer>
      <FancyBackground />
      <UserInputMain onSubmit={formSubmitEvent}>
        <Heading as="h1" size="xLarge" align="center" color={colors.primary}>
          {/* Replace the img source and alt text */}
          <img width="64" src="/new-icon.png" alt="New Icon" />
          Web Check
        </Heading>
        {/* Keep the same Input and ErrorMessage components */}
        <Button styles="width: calc(100% - 1rem);" size="large" onClick={submit}>Analyze!</Button>
      </UserInputMain>
      <SiteFeaturesWrapper>
        <div className="features">
          <Heading as="h2" size="small" color={colors.primary}>Supported Checks</Heading>
          <ul>
            {docs.map((doc, index) => (<li key={index}>{doc.title}</li>))}
            {/* Remove the GitHub link */}
          </ul>
        </div>
        {/* Remove the links div */}
      </SiteFeaturesWrapper>
      <Footer isFixed={true} />
    </HomeContainer>
  );
}

export default Home;
