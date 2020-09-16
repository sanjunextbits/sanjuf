import { styled, css } from "frontity";

const LinkButtons = styled.a`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
	display: inline-block;
    font-family: "Larsseit";
    font-weight: 800;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.bg};
    font-size: 21px;
    padding: 9px 25px;
    line-height: 30px;
    letter-spacing: 0.13px;
	text-transform: ${props => (props.withtext ? "none" : "uppercase")};

	${props => props.outline && css`
		background: transparent;
        color: #00C1DE;

		&:hover,
		&:focus,
		&:active {
			color: #FFFFFF;
        }

        &:visited {
            color: #FFFFFF;
        }
	`}

	${(props) => props.arrow  && css`
		&::after {
			content: '>>';
			font-size: 28px;
			font-weight: normal;
			display: inline-block;
            padding-left: 5px;
            line-height: 0.8;
		}
	`}

	&:hover {
        background-color: ${(props) => props.bgHover};
        border-color: ${(props) => props.bgHover};
        color: ${(props) => props.colorHover};
    }

    &:visited {
        color: ${(props) => props.colorVisited};
    }

    &:focus,
    &:active {
        background-color: ${(props) => props.bgActive};
        border-color: ${(props) => props.bgActive};
        color: ${(props) => props.colorActive};
    }
`
export default LinkButtons;
