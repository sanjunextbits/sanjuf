import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import LinkButton from "./styles/link-button";

const Link = ({
  state,
  actions,
  link,
  className,
  bg,
  color,
  bgHover,
  colorHover,
  colorVisited,
  bgActive,
  colorActive,
  children,
  rel,
  "aria-current": ariaCurrent,
  onClick: onClickProp,
}) => {
  // Check if the link is an external or internal link
  const isExternal = link.startsWith("http");

  // Prefetch the link's content when it mounts and autoPreFetch is set to `true`
  useEffect(() => {
    if (!isExternal) {
      if (state.theme.autoPreFetch === "all") actions.source.fetch(link);
    }
  }, []);

  const onClick = (event) => {
    // Do nothing if it's an external link
    if (isExternal) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }

    if (onClickProp) {
      onClickProp(event);
    }
  };

  return (
    <LinkButtonTag
      // ref={ref}
      href={link}
      onClick={onClick}
      className={className}
      bg={bg}
      color={color}
      bgHover={bgHover}
      colorHover={colorHover}
      colorVisited={colorVisited}
      bgActive={bgActive}
      colorActive={colorActive}
      aria-current={ariaCurrent}
      rel={isExternal ? "noopener noreferrer" : rel}
      onMouseEnter={() => {
        // Prefetch the link's content when the user hovers on the link
        if (state.theme.autoPreFetch === "hover" && !isExternal)
          actions.source.fetch(link);
      }}
    >
      {children}
    </LinkButtonTag>
  );
};

export default connect(Link);

const LinkButtonTag = styled(LinkButton)``;