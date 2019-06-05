import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import styles from "./styles";
//components
import Slider from "react-slick";
/**
 * LandingPageComponent
 */
class LandingPageComponent extends PureComponent {
	/**
	 * render
	 */
	render() {
		var settings = {
			arrows: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div
				className={
					this.props.classes.LandingPageComponent +
					" ui  vertical masthead center aligned segment "
				}
			>
				<div className="ui text container">
					<br />
					<br />
					<h1 className="ui header">ANZERIE HARPER BIOKINETICISTS</h1>
					<br />
					<br />
				</div>
				<div className="ui container">
					<div className="ui big horizontal bulleted list">
						<div className="item">Jeffreys Bay</div>
						<div className="item">St Francis</div>
						<div className="item">Humansdorp</div>
						<div className="item">Patensie</div>
					</div>
					{/* slider */}
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(LandingPageComponent);
