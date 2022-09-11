import React, { ReactElement } from "react";
import styled from "styled-components";
import { DriverStanding } from "../../types/formulaTypes";
import { BiWorld } from "react-icons/bi";
import { VStack, HStack } from "../../MyStyledComponents/atoms";

const Container = styled.div`
	border-radius: 10px;
	padding: 5px;
	background-color: ${({ theme }) => theme.card.background};
	text-transform: uppercase;
	overflow: hidden;
	box-shadow: 1px 2px 4px 0px black;
	transition: transform linear 0.1s;

	&:hover {
		transform: scale(105%);
		cursor: pointer;
	}
`;

const DriverCode = styled.div`
	padding: 5px 10px;
	font-size: larger;
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.card.background};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const DriverGivenName = styled.p`
	font-size: 18px;
	margin: 5px 0;
`;

const DriverFamilyName = styled.p`
	font-size: 24px;
	font-weight: bold;
	margin: 5px 0;
`;

const Position = styled.div`
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.card.background};
	padding: 5px 10px;
	width: fit-content;
	border-top-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

interface DriverCardProps {
	driverStanding: DriverStanding;
}

const DriverCard = (props: DriverCardProps): ReactElement => {
	const driver = props.driverStanding.Driver;
	const position = props.driverStanding.position;
	const constructor = props.driverStanding.Constructors[0].name;
	const points = props.driverStanding.points;
	const nationality = props.driverStanding.Driver.nationality;

	const openWiki = (): void => {
		window.open(driver.url, "_blank");
	};

	return (
		<Container onClick={() => openWiki()}>
			<VStack>
				<HStack style={{ justifyContent: "space-between"}}>
					<Position>{position}</Position>
					{driver.code ? <DriverCode>{driver.code}</DriverCode> : ""}
				</HStack>
				<DriverGivenName>{driver.givenName}</DriverGivenName>
				<DriverFamilyName>{driver.familyName}</DriverFamilyName>
				<DriverGivenName>[{constructor}]</DriverGivenName>

				<HStack style={{ justifyContent: "space-between"}}>
					<p>Points: {points}</p>
					<HStack style={{gap: "3px"}}>
						<BiWorld />
						<p>{nationality}</p>
					</HStack>
				</HStack>
			</VStack>
		</Container>
	);
};

export default DriverCard;
