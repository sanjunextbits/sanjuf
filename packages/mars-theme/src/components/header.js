import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";
import SectionContainer from "./styles/section-container";
import SkipLink from "./styles/skip-link";
import { Logo } from "./icons";
import Navigation from "./navigation/navigation";
import Donate from "./links/donate";
import Search from "./search/search";

const Header = ({ state }) => {
  const { headerBg } = state.theme.colors;

  return (
    <PageHeader bg={headerBg} id="site-header">
      <HeaderInner>
        <TitleWrapper>
          {/* Heading and Description of the site */}
          <TitleGroup>
            <StyledLink link="/">
              <SkipLink>{state.frontity.title}</SkipLink>
              <Logo />
            </StyledLink>
          </TitleGroup>
        </TitleWrapper>
        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          <Navigation />
          {/* Desktop search button */}
          <HeaderRight>
            <Search />
            <Donate />
          </HeaderRight>
        </HeaderNavigationWrapper>
          <Description>{state.frontity.description}</Description>
          <MobileMenu />
      </HeaderInner>
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const PageHeader = styled.header`
  z-index: 1;
  background: ${(props) => props.bg};
  position: relative;
  padding-top: 50px;
  padding-bottom: 60px;
`;

const HeaderInner = styled(SectionContainer)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 28px;
    max-width: 50%;
    padding: 0;
    text-align: left;
    min-width: 102px;
  }
`;

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  line-height: 0.8;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`