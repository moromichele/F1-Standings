import { ReactElement } from "react";
import SearchBar from "../SearchBar";
import ConstructorGrid from "./ConstructorGrid";

const ConstructorSearch = (): ReactElement => {
	return (
		<div>
			<SearchBar title="constructors" />
			<ConstructorGrid />
		</div>
	);
};

export default ConstructorSearch;
