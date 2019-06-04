import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageComponent from './HomePageComponent';

/**
 * HomePageContainer
 */
class HomePageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <HomePageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);