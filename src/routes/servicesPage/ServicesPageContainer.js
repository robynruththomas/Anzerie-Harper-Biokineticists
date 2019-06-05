import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServicesPageComponent from './ServicesPageComponent';

/**
 * ServicesPageContainer
 */
class ServicesPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <ServicesPageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ServicesPageContainer);