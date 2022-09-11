import React, { ReactElement, useState, useRef } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./yearFilterSlice";
import { Button, Input, Wrapper } from "../../MyStyledComponents/atoms";

export const YearFilter = (): ReactElement => {
	const count = useSelector((state: RootState) => state.yearFilter.value);
	const [input, setInput] = useState(count);
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(input);
		const currYear = new Date().getFullYear();
		if (input > 1950 && input <= currYear) {
			dispatch(set(input));
		} else {
			if (inputRef.current != null) inputRef.current.value = "";
			alert(`Date between 1950 and ${currYear}`);
		}
	};

	return (
		<form>
			<Wrapper>
				<Input
					ref={inputRef}
					onChange={(e) => setInput(Number(e.target.value))}
					minLength={4}
					maxLength={4}
					inputMode="decimal"
				/>
				<Button aria-label="Set year" onClick={(e) => handleClick(e)}>
					SET YEAR
				</Button>
			</Wrapper>
		</form>
	);
};
