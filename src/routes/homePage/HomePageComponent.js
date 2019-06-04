import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * HomePageComponent
 */
class HomePageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.HomePageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(HomePageComponent);