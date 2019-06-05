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
				<div className="ui huge grey inverted header">ANZERIE HARPER BIOKINETICISTS</div>
				<div className="ui large grey inverted header">COMING SOON</div>
				<div className='ui medium grey inverted header '>Our website is under construction</div>
			</div>
		</div>;
	}
}

export default injectSheet(styles)(ComingSoonComponent);
