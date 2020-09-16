import React from "react";
import { styled, connect } from "frontity";
import FooterImages from "./images/footer-images.png";
import ScreenReaderText from "./styles/screen-reader";
import SectionContainer from "./styles/section-container";
import FooterMenu from "./navigation/footer";
import SocialMenu from "./navigation/social-menu";
import HubspotForm from 'react-hubspot-form'

const Footer = ({ state }) => {
    const currentYear = new Date().getFullYear();
    const { footerBg } = state.theme.colors;
    const { footerBottomBg } = state.theme.colors;
    const { theme_black } = state.theme.colors;

    return (
        <SiteFooter bg={footerBg} color={theme_black} role="contentinfo">
            <SiteFooterInner>
                <FooterTop>
                    <FooterLeft>
                        <FooterGetUpdates>
                            <h3>Get Updates</h3>
                            <HubspotForm
                                portalId='2550774'
                                formId='7d1eb285-bffe-456e-83bf-89c1a4af16f7'
                                loading={<div>Loading...</div>}
                            />
                        </FooterGetUpdates>
                        <FooterMenus>
                            <FooterMenu />
                        </FooterMenus>
                    </FooterLeft>
                    <FooterRight>
                        <SocialMenu />
                        <div className="footer-address">
                            <span>JDC</span>
                            <br />
                            P.O. Box 4124,
                            <br />
                            New York, NY 10163, USA.
                            <br />
                            +1.212.687.6200
                        </div>
                        <div className="footer-images">
                            <img src={FooterImages} alt="Footer Images" />
                        </div>
                    </FooterRight>
                </FooterTop>
            </SiteFooterInner>

            <SiteFooterBottom bg={footerBottomBg} role="contentinfo">
                <SiteFooterBottomInner>
                    <Credits>
                        <Copyright color={theme_black}> &copy; {currentYear} American Jewish Joint Distribution Committee, Inc</Copyright>
                    </Credits>
                </SiteFooterBottomInner>
            </SiteFooterBottom>
        </SiteFooter>
    );
};

export default connect(Footer);

const FooterTop = styled.div`
  display: flex;
  padding: 84px 0;

  h3 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 13px;
  }

  .footer-address {
    margin-top: 55px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 24px;

    span {
      font-weight: 800;
    }
  }
`;

const SkipLabel = styled(ScreenReaderText)``;

const FooterGetUpdates = styled.div`
  max-width: 800px;
  margin-bottom: 55px;

  form {
    display: flex;
    align-items: flex-end;
    position: relative;

    >div {
        position: relative;
        margin-right: 9px;

        &:not(.hs_error_rollup) .hs-error-msgs {
            display: none !important;
        }
    }
  }

  ul {
      list-style: none;
  }

  .hs_error_rollup {
    font-family: "Sailec";
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #FF5F79;
    font-size: 12px;
  }

  .hs-button {
    width: 267px;
    max-width: 100%;
    background-color: #00C1DE;
    border-color: #00C1DE;
    color: #FFFFFF;
    font-weight: 800;
    line-height: 19px;

    &:hover {
        background-color: #0090A6;
        border-color: #0090A6;
        color: #FFFFFF;
    }

    &:focus,
    &:active {
        background-color: #00606F;
        border-color: #00606F;
        color: #FFFFFF; 
    }
  }

  .hs_email {
    width: 195px;
  }

  .hs_firstname,
  .hs_lastname {
    width: 155px;
  }

  input {
    width: 100%;
  }

  .legal-consent-container {
    display: none;
  }

  .form-group {
    display: flex;

    input {
      width: 100%;
    }

    .btn {
      width: 267px;
      max-width: 100%;
    }
  }

  .first-name,
  .last-name {
    width: 155px;
  }

  .email-address {
    width: 195px;
  }

  .input-group {
    margin-right: 9px;
  }
`;

const FooterLeft = styled.div`
  width: calc(100% - 310px);
`;

const FooterRight = styled.div``;

const FooterMenus = styled.div`
  max-width: 690px;

  ul {
    list-style: none;
    margin: 0;

    li {
      position: relative;
      margin: 0 0 20px 0;
      font-size: 16px;
      line-height: 21px;
    }

    a {
      font-weight: normal;
    }
  }
`;

const SiteFooterInner = styled(SectionContainer)``;

const SiteFooter = styled.footer`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SiteFooterBottom = styled.div`
  background-color: ${(props) => props.bg};
`;

const SiteFooterBottomInner = styled(SectionContainer)``;

const Credits = styled.div``;

const Copyright = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  padding: 17px 0;
  color: ${(props) => props.color};
`;
