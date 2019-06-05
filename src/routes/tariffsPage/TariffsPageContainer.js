import React, { Component } from 'react';
import { connect } from 'react-redux';
import TariffsPageComponent from './TariffsPageComponent';

/**
 * TariffsPageContainer
 */
class TariffsPageContainer extends Component {
	/**
	 * render
	 */
	render() {
		return (
            <TariffsPageComponent/>
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
export default connect(mapStateToProps, mapDispatchToProps)(TariffsPageContainer);