import { ThemeToggle } from "./features/themeToggle/ThemeToggle";
import GlobalStyle from "./MyStyledComponents/globalStyles";
import React, { useState } from "react";
import type { RootState } from "./app/store";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./MyStyledComponents/themes";
import DriverSearch from "./components/DriversStandings/DriverSearch";
import { device } from "./MyStyledComponents/themes";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ConstructorSearch from "./components/ConstructorsStandings/ConstructorSearch";

const Main = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px 3rem 20px;

	@media ${device.sm} {
	}
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.red};
	position: sticky;
	top: 0px;
	justify-content: space-between;
	align-items: stretch;
	height: min-content;
	z-index: 10;

	@media ${device.lg} {
		font-size: medium;
		justify-content: space-around;
	}
`;

const Img = styled.img`
	height: 50px;
	padding: 5px;
`;

const TopNav = styled.nav`
	display: flex;
	align-items: center;
	margin: 0;
`;

interface NavLinkProps {
	selected: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
	color: white;
	font-size: large;
	font-family: inherit;
	text-decoration: none;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 10px 0 10px;
	transition: background-color linear 0.2s;
	font-size: 12px;

	background: ${(props) => (props.selected ? "rgba(0, 0, 0, 0.3)" : "")};

	&:hover {
		color: white;
		background-color: black;
	}

	@media ${device.sm} {
		font-size: medium;
	}
`;

function App() {
	const currentTheme = useSelector((state: RootState) => state.darkTheme.value);
	const [selNav, setSelNav] = useState(true);

	return (
		<ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Header>
				<Img
					src={process.env.PUBLIC_URL + "/f1Logo.png"}
					alt="f1 logo"
					style={{ margin: "auto 0" }}
				/>
				<TopNav>
					<NavLink
						to="constuctors-by-year"
						selected={selNav}
						onClick={() => setSelNav(true)}
					>
						Constructor standings
					</NavLink>
					<NavLink
						to="drivers-by-year"
						selected={!selNav}
						onClick={() => setSelNav(false)}
					>
						Drivers standings
					</NavLink>
				</TopNav>
				<ThemeToggle />
			</Header>
			<Main>
				<Routes>
					<Route path="/" element={<Navigate to="constuctors-by-year" />} />
					<Route path="constuctors-by-year" element={<ConstructorSearch />} />
					<Route path="drivers-by-year" element={<DriverSearch />} />
				</Routes>
			</Main>
		</ThemeProvider>
	);
}

export default App;
