import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MenuArrowIcon from "../images/menu-arrow.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Navigation = ({ state }) => {
  const menuItems = state.source.get("primary");
  const { theme_black } = state.theme.colors;
  return (
    <NavWrapper>
      <MenuNav>
        <Menu color={theme_black}>
          {menuItems.items.items.map((item, i) => {
            return (
              <MenuItem
                key={item.ID}
                className={item.child_items ? "has-child" : "no-child"}
              >
                {/* If link url is the current page, add `aria-current` for a11y */}
                <MenuLink link={"/" + item.slug}>{item.title}</MenuLink>
                {item.child_items && (
                  <Menu className={item.slug}>
                    <MenuArrow className="arrow"></MenuArrow>
                    {item.child_items.map((chilItem, i) => {
                      return (
                        <MenuItem key={chilItem.ID}>
                          <MenuLink link={"/" + chilItem.slug}>
                            {chilItem.title}
                          </MenuLink>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                )}
              </MenuItem>
            );
          })}
        </Menu>
      </MenuNav>
    </NavWrapper>
  );
};
export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const MenuArrow = styled.span`
  display: block;
  background-image: url(${MenuArrowIcon});
  width: 35px;
  height: 27px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: -27px;
  background-position: top center;
  background-size: calc(100% + 8px);
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  color: ${(props) => props.color};

  > li:not(:last-child) {
    margin-right: 40px;

    &.has-child {
      margin-right: calc(40px - 16px);
    }
  }

  a {
    color: ${(props) => props.color};
  }
`;

const MenuItem = styled.li`
  font-size: 18px;
  line-height: 23px;
  position: relative;
  margin: 0;
  padding: 40px 0;

  a {
    font-family: "Larsseit";
    font-weight: bold;
    letter-spacing: 0.2px;
  }

  &:hover ul {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
    transition: opacity 0.15s linear;
  }

  &.has-child {
    padding-right: 16px;

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      right: 0;
      top: 47px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 10px solid #00c1de;
    }
  }

  ul {
    min-width: 240px;
    padding: 8px;
    background: #ffffff;
    display: block;
    opacity: 0;
    visibility: hidden;
    top: 100%;
    left: 50%;
    position: absolute;
    transition: opacity 0.15s linear;
    transform: translateY(0.6rem);
    z-index: 1;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);

    li {
      margin: 0 !important;
      z-index: 1;
      background: #ffffff;
      padding: 7px 0;

      &:not(:last-child) {
        margin-bottom: 6px !important;
      }

      &:hover,
      &:focus {
        background: rgba(0, 193, 222, 0.03);
        color: #00c1de;
      }
    }

    a {
      background: transparent;
      border: none;
      color: inherit;
      display: block;
      transition: background-color 0.15s linear;
    }
  }
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
`;