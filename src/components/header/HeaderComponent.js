import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import styles from "./styles";
import { NavLink } from "react-router-dom";
//images
import logo from "../../images/logo.png";
/**
 * HeaderComponent
 */
class HeaderComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		let header = null;
		if (this.props.isMobile || this.props.windowWidth <= 830) {
			header = (
				<div className="mobile-header-wrap">
					<div class="ui fluid vertical menu">
						<div className="link item toggle" onClick={()=>this.props.onToggleClick()}>
							<i class="bars  icon" ></i>
						</div>
						<NavLink to={"/home"} className="item header-item">
							Home
						</NavLink>
						<NavLink to={"/services"} className="item header-item">
							Services
						</NavLink>
						<NavLink to={"/assessments"} className="item header-item">
							Assessments
						</NavLink>
						<NavLink to={"/tariffs"} className="item header-item">
							Tariffs
						</NavLink>
						<NavLink to={"/team"} className="item header-item">
							Team
						</NavLink>
						<NavLink to={"/contactus"} className="item header-item">
							Contact
						</NavLink>
					</div>
				</div>
			);
		} else {
			header = (
				<div className="ui borderless menu">
					<NavLink to={"/home"} className="item">
						<img src={logo} alt="ANZERIE HARPER BIOKINETICISTS" />
					</NavLink>
					<NavLink to={"/home"} className="item">
						ANZERIE HARPER BIOKINETICISTS
					</NavLink>
					<div className="right menu">
						<NavLink to={"/home"} className="item">
							Home
						</NavLink>
						<NavLink to={"/services"} className="item">
							Services
						</NavLink>
						<NavLink to={"/assessments"} className="item">
							Assessments
						</NavLink>
						<NavLink to={"/tariffs"} className="item">
							Tariffs
						</NavLink>
						<NavLink to={"/team"} className="item">
							Team
						</NavLink>
						<NavLink to={"/contactus"} className="item">
							Contact
						</NavLink>
					</div>
				</div>
			);
		}
		return <div className={this.props.classes.HeaderComponent}>{header}</div>;
	}
}

export default injectSheet(styles)(HeaderComponent);
