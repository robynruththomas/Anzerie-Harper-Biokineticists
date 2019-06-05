import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import { checkMobile } from "../../helpers/appHelpers";

/**
 * HeaderContainer
 */
class HeaderContainer extends Component {
	state = {
		isMobile: false,
		hideMenuItems: false,
		windowWidth: null
	};
	/**
	 * render
	 */
	render() {
		return (
			<HeaderComponent
				isMobile={this.state.isMobile}
				onToggleClick={this.onToggleClick.bind(this)}
				windowWidth = {this.state.windowWidth}
			/>
		);
	}
	onToggleClick = () => {
		let menuState = this.state.hideMenuItems;
		this.setState({
			hideMenuItems: !menuState
		});
		this.toggleMenuItems(this.state.hideMenuItems);
	};
	toggleMenuItems = (hideMenuItems) => {
		//hide the menu items if menu item is not showing
		let display = hideMenuItems ? 'none' : 'block'
		let headerItems = document.getElementsByClassName("header-item");
		if (headerItems.length > 0) {
			for (let i = 0; i < headerItems.length; i++) {
				headerItems[i].style.display = display;
			}
		}
	};
	componentDidMount = () => {
		window.addEventListener("resize", this.resize);
		this.resize();
	};
	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}
	resize = () => {
		let isMobile = checkMobile();
		this.setState({
			isMobile,
			windowWidth: window.innerWidth
		});
		this.forceUpdate();
	};
}
/**
 * mapStateToProps
 */
const mapStateToProps = state => {
	return {};
};

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => {
	return {};
};

// Export component and connect actions and state
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);
