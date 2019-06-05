import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * TeamPageComponent
 */
class TeamPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.TeamPageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(TeamPageComponent);