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
				<div className="ui header header2">ANZERIE HARPER BIOKINETICISTS</div>
				<div className="ui header header3">COMING SOON</div>
				<div className='ui header header4'>Our website is under construction</div>
			</div>
		</div>;
	}
}

export default injectSheet(styles)(ComingSoonComponent);
