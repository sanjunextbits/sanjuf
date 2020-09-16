import React from "react";
import { connect, styled } from "frontity";
import StyleguideHead from "./styleguidehead";
import Buttons from "../styles/button";
import ColorHead from "./colorhead";
import ColorPalette from "./colorpalette";
import ButtonHead from "./buttonhead";
import SectionContainer from "../styles/section-container";
import { InlineButtonArrow } from "../icons";
import LinkButton from "../link-button";
import { Button } from "antd";
import { StepForwardOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const Styleguide = ({ state }) => {
    const { primary } = state.theme.colors;
    const { primaryHover } = state.theme.colors;
    const { primaryActive } = state.theme.colors;
    const { green } = state.theme.colors;
    const { greenHover } = state.theme.colors;
    const { greenActive } = state.theme.colors;
    const { lime } = state.theme.colors;
    const { limeHover } = state.theme.colors;
    const { limeActive } = state.theme.colors;
    const { blue } = state.theme.colors;
    const { blueHover } = state.theme.colors;
    const { blueActive } = state.theme.colors;
    const { purple } = state.theme.colors;
    const { purpleHover } = state.theme.colors;
    const { purpleActive } = state.theme.colors;
    const { red } = state.theme.colors;
    const { redHover } = state.theme.colors;
    const { redActive } = state.theme.colors;
    const { yellow } = state.theme.colors;
    const { yellowHover } = state.theme.colors;
    const { yellowActive } = state.theme.colors;
    const { donate } = state.theme.colors;
    const { donateHover } = state.theme.colors;
    const { donateActive } = state.theme.colors;
    const { textColor } = state.theme.colors;
    const { white } = state.theme.colors;
    const { black } = state.theme.colors;
    const { grey } = state.theme.colors;

    return (
        <SectionInnerContainer>
            <div className="styleguide-section breakpoints-section">
                <StyleguideHead name="Breakpoints" />

                <div className="styleguide-content">
                    <p>Small Mobile (min-width: 320px)</p>
                    <p>Tablet (min-width: 768px)</p>
                    <p>Desktop (min-width: 1024px)</p>
                    <p>Large Desktop (min-width: 1200px)</p>
                    <br /><br />
                    <p>Large Mobile (min-width: 480px) (When necessary)</p>
                </div>
            </div>

            <div className="styleguide-section color-section">
                <StyleguideHead name="Colors" />

                <div className="styleguide-content">
                    <div className="first-head">
                        <h3 className="blank"></h3>
                        <ColorHead name="Regular" statename="State"/>
                        <ColorHead name="Hover" statename="State"/>
                        <ColorHead name="Active & Visited" statename="State"/>
                    </div>

                    <div className="jdc-primary">
                        <ColorHead name="JDC" statename="Primary color"/>
                        <ColorPalette bg={primary} />
                        <ColorPalette bg={primaryHover} />
                        <ColorPalette bg={primaryActive} />
                    </div>

                    <div className="jdc-secondary">
                        <ColorHead name="JDC" statename="Secondary color"/>

                        <div className="green">
                            <ColorPalette bg={green} />
                            <ColorPalette bg={greenHover} />
                            <ColorPalette bg={greenActive} />
                        </div>

                        <div className="lime">
                            <ColorPalette bg={lime} />
                            <ColorPalette bg={limeHover} />
                            <ColorPalette bg={limeActive} />
                        </div>

                        <div className="blue">
                            <ColorPalette bg={blue} />
                            <ColorPalette bg={blueHover} />
                            <ColorPalette bg={blueActive} />
                        </div>

                        <div className="red">
                            <ColorPalette bg={red} />
                            <ColorPalette bg={redHover} />
                            <ColorPalette bg={redActive} />
                        </div>

                        <div className="purple">
                            <ColorPalette bg={purple} />
                            <ColorPalette bg={purpleHover} />
                            <ColorPalette bg={purpleActive} />
                        </div>

                        <div className="yellow">
                            <ColorPalette bg={yellow} />
                            <ColorPalette bg={yellowHover} />
                            <ColorPalette bg={yellowActive} />
                        </div>
                    </div>

                    <div className="donation-btn-color">
                        <ColorHead name="Donation" statename="Button color"/>

                        <div className="donation">
                            <ColorPalette bg={donate} />
                            <ColorPalette bg={donateHover} />
                            <ColorPalette bg={donateActive} />
                        </div>
                    </div>

                    <div className="other-colors-section">
                        <div className="body-color-main">
                            <div className="body-color-section">
                                <ColorHead name="JDC" statename="Body Color"/>
                                <ColorPalette bg={textColor} />
                            </div>

                            <div className="body-color-section">
                                <ColorHead name="Body" statename="Background Color"/>
                                <ColorPalette bg={white} />
                            </div>
                        </div>

                        <div className="other-color-main">
                            <div className="headers-color-section">
                                <ColorHead name="JDC" statename="Headers Color"/>
                                <ColorPalette bg={primary} />
                                <ColorPalette bg={black} />
                            </div>

                            <div className="footer-color-section">
                                <ColorHead name="Footer" statename="Background Color"/>
                                <ColorPalette bg={grey} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="styleguide-section buttons-section">
                <StyleguideHead name="Buttons" />

                <div className="styleguide-content">
                    <div className="primary-button">
                        <ButtonHead name="Primary Button" />
                        <Buttons arrow>Learn More</Buttons>
                        <Button type="primary">
                            Primary Button
                        </Button>
                        <Button type="default">
                            Primary Button
                        </Button>
                        <StepForwardOutlined />
                    </div>

                    <div className="outlined-button">
                        <ButtonHead name="Outlined Button" />
                        <Buttons outline arrow>Learn More</Buttons>
                    </div>

                    <div className="with-text-button">
                        <ButtonHead name="Button with text only" />
                        <Buttons withtext>Sign up for JDC Emails</Buttons>
                    </div>

                    <div className="wihout-box-button">
                        <ButtonHead name="Without Box" />
                        <Buttons arrow arrowlink>Learn More</Buttons>
                    </div>

                    <div className="inline-link-button">
                        <ButtonHead name="Inline link" />
                        <Buttons arrowlink inlinelink>
                            Learn More
                            <InlineButtonArrow />
                        </Buttons>
                    </div>
                </div>
            </div>

            <Row gutter={[0, 0]}>
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
            </Row>

            <Row gutter={[0, 0]}>
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
            </Row>
        </SectionInnerContainer>
    );
};

export default connect(Styleguide);

const SectionInnerContainer = styled(SectionContainer)`
    .styleguide-section {
        &:not(:last-child) {
            padding-bottom: 100px;
        }
    }

    .breakpoints-section {
        p {
            font-family: 'Larsseit';
            font-size: 36px;
            font-weight: normal;
            margin: 0;
            line-height: 1.3;
            letter-spacing: -0.5px;
        }
    }

    .color-section {
        .styleguide-content {
            display: flex;
            flex-wrap: wrap;
        }

        .first-head {
            max-width: 134px;

            .blank {
                min-height: 82px;
                margin: 0;
            }
        }

        .jdc-primary {
            min-width: 185px;
        }

        .jdc-secondary {
            display: flex;
            width: calc(100% - 450px);
            flex-wrap: wrap;

            h3 {
                width: 100%;
            }
        }
    }

    .other-colors-section {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;

        .body-color-section:not(:last-child),
        .headers-color-section {
            padding-bottom: 30px;
        }
    }

    .body-color-main {
        margin-right: 25px;
    }

    .headers-color-section {
        display: flex;
        flex-wrap: wrap;

        h3 {
            width: 100%;
        }
    }

    .buttons-section {
        margin-bottom: 30px;

        .styleguide-content {
            display: flex;
            flex-wrap: wrap;

            >div:not(:last-child) {
                margin-right: 45px;
            }
        }
    }
`;