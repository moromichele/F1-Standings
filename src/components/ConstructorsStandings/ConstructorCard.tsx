import React, { ReactElement } from "react";
import styled from "styled-components";
import { HStack } from "../../MyStyledComponents/atoms";
import { ConstructorStanding } from "../../types/formulaTypes";
import { BiWorld } from "react-icons/bi";

const Container = styled.div`
	border-radius: 10px;
	background-color: ${({ theme }) => theme.card.background};
	display: flex;
	justify-content: space-between;
	padding: 5px;
	overflow: hidden;
	box-shadow: 1px 2px 4px 0px black;
	cursor: pointer;
	transition: transform linear 0.1s;
	text-transform: uppercase;
	@media (hover: hover) and (pointer: fine) {
		&:hover {
		transform: scale(105%);
	}	
`;

const TeamNationality = styled.p`
	font-size: 18px;
	line-height: 1rem;
`;

const TeamName = styled.p`
	font-size: 28px;
	font-weight: bold;
`;

const Position = styled.div`
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.card.background};

	padding: 5px 10px;
	width: fit-content;
	border-bottom-right-radius: 10px;
	border-top-left-radius: 10px;
`;

interface ConstructorCardProps {
	driverStanding: ConstructorStanding;
}

const ConstructorCard = (props: ConstructorCardProps): ReactElement => {
	const openWiki = (): void => {
		window.open(props.driverStanding.Constructor.url, "_blank");
	};

	return (
		<Container onClick={() => openWiki()}>
			<div>
				<Position>{props.driverStanding.position}</Position>
				<TeamName>{props.driverStanding.Constructor.name}</TeamName>
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<HStack style={{ gap: "3px" }}>
					<BiWorld />
					<TeamNationality>
						{props.driverStanding.Constructor.nationality}
					</TeamNationality>
				</HStack>

				<p>{" points: " + props.driverStanding.points}</p>
			</div>
		</Container>
	);
};

export default ConstructorCard;
