import { ReactElement } from "react";
import SearchBar from "../SearchBar";
import DriverGrid from "./DriverGrid";

const DriverSearch = (): ReactElement => {
	return (
		<div>
			<SearchBar title="drivers" />
			<DriverGrid />
		</div>
	);
};

export default DriverSearch;
