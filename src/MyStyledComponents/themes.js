const size = {
	xsm: "320px",
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1440px",
};

export const device = {
	xsm: `(min-width: ${size.xsm})`,
	sm: `(min-width: ${size.sm})`,
	md: `(min-width: ${size.md})`,
	lg: `(min-width: ${size.lg})`,
	xl: `(min-width: ${size.xl})`,
	"2xl": `(min-width: ${size["2xl"]})`,
};

export const lightTheme = {
	body: "#FFF",
	text: "black",
	red: "#e10600",
	toggleBorder: "#FFF",
	background: "#e5e7eb",
	card: {
		background: "white",
	},
};

export const darkTheme = {
	body: "#363537",
	text: "#FAFAFA",
	red: "#e10600",
	toggleBorder: "#6B8096",
	background: "#1f2937",
	card: {
		background: "black",
	},
};
