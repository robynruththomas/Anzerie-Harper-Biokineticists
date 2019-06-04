import image from "../../images/back.jpg";

export default {
	ComingSoonComponent: {
		backgroundImage: `url(${image})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
		zIndex: 1,
		"&:before": {
			content: '""',
			background: "linear-gradient(-45deg, #0facef, #6092b7, #5c7ea3)",
			height: "100%",
			position: 'absolute',
			opacity: '0.9',
			width: "100%",
			zIndex: -1
		},
		"& .details-container": {
			alignItems: "center",
			color: "#FFF",
			display: "flex",
			flexDirection: "column",
			height: "100%",
			justifyContent: "center",
			margin: "auto",
			textAlign: "center",
			width: "100%",
			"& .business-name": {
				fontWeight: 800,
				fontSize: 20,
				margin: 20,
				"@media only screen and (min-width: 1224px) and (min-height: 800px)": {
					fontSize: 60,
					margin: 30
				}
			},
			"& .title": {
				fontSize: 18,
				margin: 15,
				"@media only screen and (min-width: 1224px) and (min-height: 800px)": {
					fontSize: 50,
					margin: 30
				}
			},
			"& .sub-text": {
				fontSize: 16,
				margin: 10,
				"@media only screen and (min-width: 1224px) and (min-height: 800px)": {
					fontSize: 30
				}
			}
		}
	}
};
