import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssessmentsPageComponent from './AssessmentsPageComponent';

/**
 * AssessmentsPageContainer
 */
class AssessmentsPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <AssessmentsPageComponent/>
        )
	}
}

/**
 * mapStateToProps
 */
const mapStateToProps = (state) => {
    return {}
}

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = (dispatch) => {
    return {}
}

// Export component and connect actions and state
export default connect(mapStateToProps, mapDispatchToProps)(AssessmentsPageContainer);