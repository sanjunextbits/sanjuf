import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const FooterMenu = ({ state, actions }) => {
  const menuItems = state.source.get("footer");

  return (
    <MenuNav>
      <MenuMainUl>
        {menuItems.items.items.map((item, i) => {
          var Test = state.theme.isFooterToggle ? "footer-title-open" : "footer-title-close";
          return (
            <MenuItem key={item.ID}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <MenuTitle onClick={actions.theme.toggleFooter} className={Test}>{item.title}</MenuTitle>
              {item.child_items && (
                <Menu className={Test}>
                  {item.child_items.map((chilItem, i) => {
                    return (
                      <MenuItem key={chilItem.ID}>
                        <MenuSubLink link={"/" + chilItem.slug}>
                          {chilItem.title}
                        </MenuSubLink>
                      </MenuItem>
                    );
                  })}
                </Menu>
              )}
            </MenuItem>
          );
        })}
      </MenuMainUl>
    </MenuNav>
  );
};
export default connect(FooterMenu);

const MenuNav = styled.div``;

const MenuMainUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul``;

const MenuItem = styled.li``;

const MenuTitle = styled.span`
  font-weight: bold;
  display: block;
  margin: 0 0 20px 0;
`;

const MenuSubLink = styled(Link)``;
