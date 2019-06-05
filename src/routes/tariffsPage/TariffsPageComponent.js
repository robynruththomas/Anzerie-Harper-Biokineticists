import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * TariffsPageComponent
 */
class TariffsPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.TariffsPageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(TariffsPageComponent);