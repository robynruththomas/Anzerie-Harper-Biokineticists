import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComingSoonComponent from './ComingSoonComponent';

/**
 * ComingSoonContainer
 */
class ComingSoonContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <ComingSoonComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ComingSoonContainer);