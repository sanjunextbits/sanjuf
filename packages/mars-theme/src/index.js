import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

const StyleguideHandler = {
  name: "styleguide",
  priority: 10,
  pattern: "/styleguide/",
  func: ({ route, state }) => {
    Object.assign(state.source.data[route],{
      type: "page",
      isStyleguide: true
    })  
  }
}

const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: ":id",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;
    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "/menus/v1/menus/" + id,
      params: {
        menus: id,
        per_page: 100, // To make sure you fetch all the elements
      },
    });
    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items,
      isMenu: true,
    });
  },
}

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      colors: {
        primary: "#00C1DE",
        primaryHover: "#0090A6",
        primaryActive: "#00606F",
        green: "#00B4A8",
        greenHover: "#00877E",
        greenActive: "#005A54",
        lime: "#B9D989",
        limeHover: "#8AA266",
        limeActive: "#5C6C44",
        blue: "#009BD2",
        blueHover: "#00749D",
        blueActive: "#004D69",
        purple: "#B76398",
        purpleHover: "#894A72",
        purpleActive: "#5B314C",
        red: "#F05364",
        redHover: "#B43E4B",
        redActive: "#782932",
        yellow: "#FAAA57",
        yellowHover: "#BB7F41",
        yellowActive: "#7D552B",
        donate: "#FF5F79",
        donateHover: "#ED526B",
        donateActive: "#D05064",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#F4F4F4",
        themeBlack: "#424242",
        textColor: "#424242",
        headerBg: "#FFFFFF",
        bodyBg: "#FFFFFF",
        footerBg: "#F4F4F4",
        footerBottomBg: "#EBEBEB",
        footer_social_icon_bg: "#FFFFFF"
      },
      menu: [],
      isMobileMenuOpen: false,
      isSearchOpen: false,
      isFooterToggle: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      toggleSearch: ({ state }) => {
        state.theme.isSearchOpen = !state.theme.isSearchOpen;
      },
      closeSearch: ({ state }) => {
        state.theme.isSearchOpen = false;
      },
      toggleFooter: ({ state }) => {
        state.theme.isFooterToggle = !state.theme.isFooterToggle;
      },
      closeFooter: ({ state }) => {
        state.theme.isFooterToggle = false;
      },
      init: ({ libraries }) => {              
        libraries.source.handlers.push(StyleguideHandler);
        libraries.source.handlers.push(menuHandler);
      },
	  beforeSSR: ({ actions }) => async () => {
        await actions.source.fetch("primary");
        await actions.source.fetch("footer");
        await actions.source.fetch("social");
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default marsTheme;
