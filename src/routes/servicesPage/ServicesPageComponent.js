import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * ServicesPageComponent
 */
class ServicesPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.ServicesPageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(ServicesPageComponent);