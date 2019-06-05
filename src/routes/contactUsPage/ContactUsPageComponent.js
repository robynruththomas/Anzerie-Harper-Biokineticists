import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * ContactUsPageComponent
 */
class ContactUsPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.ContactUsPageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(ContactUsPageComponent);