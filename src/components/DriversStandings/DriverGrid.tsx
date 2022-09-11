import { useGetDriverStandingsByYearQuery } from "../../services/formulaAPI";
import React, { ReactElement } from "react";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { DriverStanding } from "../../types/formulaTypes";
import { ResponsiveGrid3Cols } from "../../MyStyledComponents/atoms";
import DriverCard from "./DriverCard";

const DriverGrid = (): ReactElement => {
	const count = useSelector((state: RootState) => state.yearFilter.value);
	const { data, error, isLoading } = useGetDriverStandingsByYearQuery(
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
					{data.map((d: DriverStanding, i: number) => {
						return <DriverCard key={i} driverStanding={d} />;
					})}
				</ResponsiveGrid3Cols>
			) : null}
		</div>
	);
};

export default DriverGrid;
