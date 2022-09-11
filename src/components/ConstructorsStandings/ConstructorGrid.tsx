import { useGetConstructorStandingsByYearQuery } from "../../services/formulaAPI";
import React, { ReactElement } from "react";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ConstructorStanding } from "../../types/formulaTypes";
import { ResponsiveGrid3Cols } from "../../MyStyledComponents/atoms";
import ConstructorCard from "./ConstructorCard";

const ConstructorGrid = (): ReactElement => {
	const count = useSelector((state: RootState) => state.yearFilter.value);
	const { data, error, isLoading } = useGetConstructorStandingsByYearQuery(
		count.toString()
	);
	if (data) console.log(data);
	return (
		<div>
			{error ? (
				<>Error loading data</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<ResponsiveGrid3Cols>
					{data.map((d: ConstructorStanding, i: number) => {
						return <ConstructorCard key={i} driverStanding={d} />;
					})}
				</ResponsiveGrid3Cols>
			) : null}
		</div>
	);
};

export default ConstructorGrid;
