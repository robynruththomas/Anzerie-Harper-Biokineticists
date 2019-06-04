export const appReducer = (
	state = {
		applicationData: []
	},
	action
) => {
	switch (action.type) {
		case "START_FIELD_FETCH":
			return {
				...state,
				applicationData: []
			};
		default:
			return state;
	}
};
