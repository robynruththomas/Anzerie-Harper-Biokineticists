import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingPageComponent from './LandingPageComponent';

/**
 * LandingPageContainer
 */
class LandingPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <LandingPageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);