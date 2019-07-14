export default {
	LandingPageComponent: {
		fontSize: 16,
		position: "relative",		
		"& .home-body": {
			textAlign: "left"
		},
		// slider images
		"& .slider-image": {
			borderRadius: 3,
			margin: "auto",
			height: 200,
			maxHeight: 200,
			objectFit: "cover",
			width: "95%"
		},
		"& .welcome-section": {
			marginTop: 60,
			padding: 5,
			"& .welcome-header": {
				fontSize: 18,
				"& a": {
					color: "#000",
					fontWeight: "bold",
					textDecoration: "underline"
				}
			}
		},
		"& .when-section": {}
	}
};
