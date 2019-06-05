import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamPageComponent from './TeamPageComponent';

/**
 * TeamPageContainer
 */
class TeamPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <TeamPageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(TeamPageContainer);