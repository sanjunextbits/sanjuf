import { styled, css } from "frontity";

const Buttons = styled.button`
    ${props => (props.arrowlink ? "background: transparent;" : "background: #00C1DE;")}
    ${props => (props.arrowlink ? "color: #00C1DE;" : "color: #FFFFFF;")}
	display: inline-block;
    font-family: "Larsseit";
    font-weight: 800;
    position: relative;
    ${props => (props.arrowlink ? "border: 0;" : "border: 2px solid #00C1DE;")}
    font-size: 21px;
    ${props => (props.arrowlink ? "padding: 0;" : "padding: 9px 25px;")}
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
	`}

	${props => props.arrow && css`
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
        background: #0090A6;
        border-color: #0090A6;
    }

    &:focus,
    &:active {
        background: #00606F;
        border-color: #00606F;
        outline: transparent;
    }

    ${props => props.arrowlink && css`
        &:before {
            content: '';
            position: absolute;
            left: 2px;
            right: 20px;
            bottom: 0;
            height: 2px;
            background: #00C1DE;
        }

        &:hover {
            background: transparent;
            border-color: transparent;
            color: #0090A6;

            &:before {
                background: transparent;
            }
        }

        &:focus,
        &:active {
            background: transparent;
            border-color: transparent;
            color: #00606F;

            &:before {
                background: transparent;
            }
        }
    `}

    ${props => props.inlinelink && css`
        &:before {
            right: 29px;
        }

		svg {
            margin-left: 10px;
        }
    `}
`
export default Buttons;
