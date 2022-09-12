import styled from "styled-components";
import { device } from "../MyStyledComponents/themes";

export const Button = styled.button`
	background: white;
	padding: 3px;
	font-size: 12px;
	border-radius: 0.5rem;
	border: 2px solid black;
	color: black;
	font: inherit;
	transition: transform linear 0.1s;
	margin: 5px;

	@media (hover: hover) and (pointer: fine) {
		&:hover {
		transform: scale(105%);
	}	

	@media ${device.sm} {
		padding: 6px;
		font-size: medium;
	}

	@media ${device.lg} {
		padding: 9px;
	}

	&:focus-visible{
		outline: 2px solid yellow;
	}
`;

export const Input = styled.input`
	font: inherit;
	padding: 10px;
	border-radius: 10px;
	border: 2px solid black;

	&:invalid {
		border: 2px solid red;
	}
`;

export const InputLabel = styled.label`
	font-size: larger;
	font-weight: 800;
`;

export interface WrapperProps {
	col?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: ${(props) => (props.col ? "column" : "row")};
	justify-content: center;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
`;

export const ResponsiveGrid3Cols = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1rem;

	@media ${device.sm} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${device.lg} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const VStack = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HStack = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
