import React from "react";
import { connect, styled } from "frontity";
import ScreenReaderText from "../styles/screen-reader";
import Link from "../link";
import Facebook from "../images/Facebook.svg";
import Twitter from "../images/Twitter.svg";
import Linkedin from "../images/Linkedin.svg";
import Youtube from "../images/Youtube.svg";
import Instagram from "../images/Instagram.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const SocialMenu = ({ state }) => {
  const menuItems = state.source.get("social");
  const { footer_social_icon_bg } = state.theme.colors;
  return (
    <Menu>
      <MenuTitle>{menuItems.items.name}</MenuTitle>
      <SocialItems>
        {menuItems.items.items.map((item, i) => {
          return (
            <MenuItem key={item.ID} bg={footer_social_icon_bg}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <MenuLink className={item.title} link={item.url}>
                <SkipLink>{item.title}</SkipLink>
              </MenuLink>
            </MenuItem>
          );
        })}
      </SocialItems>
    </Menu>
  );
};
export default connect(SocialMenu);

const Menu = styled.div``;

const SocialItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MenuTitle = styled.h3``;

const SkipLink = styled(ScreenReaderText)``;

const MenuItem = styled.div`
  background-color: ${(props) => props.bg};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 15px;
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const MenuLink = styled(Link)`
  &[href*="facebook"] {
    background-image: url(${Facebook});
  }
  &[href*="twitter"] {
    background-image: url(${Twitter});
  }
  &[href*="linkedin"] {
    background-image: url(${Linkedin});
  }
  &[href*="youtube"] {
    background-image: url(${Youtube});
  }
  &[href*="instagram"] {
    background-image: url(${Instagram});
  }
`;
