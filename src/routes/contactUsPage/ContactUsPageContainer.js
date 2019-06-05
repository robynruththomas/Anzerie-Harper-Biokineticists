import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactUsPageComponent from './ContactUsPageComponent';

/**
 * ContactUsPageContainer
 */
class ContactUsPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <ContactUsPageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsPageContainer);