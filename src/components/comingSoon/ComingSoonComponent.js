import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

/**
 * ComingSoonComponent
 */
class ComingSoonComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		return <div className={this.props.classes.ComingSoonComponent}>
			<div className='details-container'>
				<div className='business-name'>ANZERIE HARPER BIOKINETICISTS</div>
				<div className='title'>COMING SOON</div>
				<div className='sub-text'>Our website is under construction</div>
			</div>
		</div>;
	}
}

export default injectSheet(styles)(ComingSoonComponent);
