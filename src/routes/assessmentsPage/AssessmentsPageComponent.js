import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * AssessmentsPageComponent
 */
class AssessmentsPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return (
			<div className={this.props.classes.AssessmentsPageComponent}>

			</div>
		)
	}
}

export default injectSheet(styles)(AssessmentsPageComponent);