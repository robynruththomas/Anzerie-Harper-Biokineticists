export default {
	HeaderComponent: {
		"& .header-wrapper": {
			background: "linear-gradient(-45deg, #5887F9, #60C3FF)",

			"@media screen and (min-width: 1366px)": {
				margin: "auto",
				width: "100%"
			},
			"& .menu": {
				background: "none",
				border: "none",
				boxShadow: "none",
				"& .item": {
					color: "#FFF"
				},
				margin: "auto",
				width: 1366,
				"& .right": {
					justifyContent: "flex-end"
				}
			}
		},
		"& .toggle": {
			cursor: "pointer",
			textAlign: "center !important",
			"& i": {
				float: "unset !important"
			}
		}
	}
};
