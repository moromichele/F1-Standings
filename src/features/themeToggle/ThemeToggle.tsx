import React, { ReactElement } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./themeToggleSlice";
import { Button } from "../../MyStyledComponents/atoms";

export const ThemeToggle = (): ReactElement => {
	const currentTheme = useSelector((state: RootState) => state.darkTheme.value);
	const dispatch = useDispatch();

	return (
		<Button aria-label="Toggle night mode" onClick={() => dispatch(toggle())}>
			{currentTheme ? "Light" : "Dark"} mode
		</Button>
	);
};
