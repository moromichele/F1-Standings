import { ReactElement } from "react";
import { Wrapper, InputLabel } from "../MyStyledComponents/atoms";
import { YearFilter } from "../features/yearFilter/YearFilter";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

const SearchBar = (props: { title: string }): ReactElement => {
	const year = useSelector((state: RootState) => state.yearFilter.value);

	return (
		<Wrapper col>
			<InputLabel>
				{props.title.charAt(0).toUpperCase() + props.title.slice(1)} standings
				in {year}
			</InputLabel>
			<YearFilter />
		</Wrapper>
	);
};

export default SearchBar;
