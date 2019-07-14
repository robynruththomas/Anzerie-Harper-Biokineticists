import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import styles from "./styles";
import { NavLink } from "react-router-dom";
//components
import Slider from "react-slick";
//images
import image1 from "../../images/bruce-mars-HHXdPG_eTIQ-unsplash.jpg";
import image2 from "../../images/bruce-mars-tj27cwu86Wk-unsplash.jpg";
import image3 from "../../images/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg";
import image4 from "../../images/clem-onojeghuo-n6gnCa77Urc-unsplash.jpg";
import image5 from "../../images/jennifer-burk-ECXB0YAZ_zU-unsplash.jpg";
import image6 from "../../images/jesper-aggergaard-CEM52sAHR80-unsplash.jpg";
import image7 from "../../images/luke-chesser-rCOWMC8qf8A-unsplash.jpg";
/**
 * LandingPageComponent
 */
class LandingPageComponent extends PureComponent {
	getIntroText() {
		return (
			<div className="ui text container">
				<br />
				<br />
				<h1 className="ui header">ANZERIE HARPER BIOKINETICISTS</h1>
				<br />
				<br />
			</div>
		);
	}
	getCities() {
		return (
			<div className="ui big horizontal bulleted list">
				<div className="item">Jeffreys Bay</div>
				<div className="item">St Francis</div>
				<div className="item">Humansdorp</div>
				<div className="item">Patensie</div>
			</div>
		);
	}
	getSlidder = () => {
		var settings = {
			arrows: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<div>
					<img src={image1} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image2} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image3} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image4} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image5} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image6} alt="" className="slider-image" />
				</div>
				<div>
					<img src={image7} alt="" className="slider-image" />
				</div>
			</Slider>
		);
	};
	getAboutText = () => {
		return (
			<div className="welcome-section">
				<section className="welcome-header">
					Welcome to{" "}
					<NavLink to={"/home"}>Anzerie Harper Biokineticists</NavLink>
				</section>
				<br />
				<section>
					<p>
						We are dedicated to improve your physical and mental well-being with
						our variety of services. Exercise is a lifestyle, therefore we try
						to infuse our patients with enthusiasm to keep them focused on their
						fitness or rehabilitation goals. We service Jeffreys Bay, St Francis
						Bay, Humansdorp and Patensie.
					</p>
				</section>
				<br />
			</div>
		);
	};
	getWhatIsABio = () => {
		return (
			<div className="bio-section">
				<section className="bio-header">
					<h3>WHAT IS A BIOKINETICIST?</h3>
				</section>
				<br />
				<section>
					<p>
						A Biokineticist is a medically recognised exercise specialist that
						improves a person’s quality of life through individualised
						assessment and scientifically based exercise prescription. A
						Biokineticist is concerned with health promotion, the maintenance of
						physical abilities and the final phase rehabilitation of a variety
						of orthopaedic and sport injuries as well as chronic and lifestyle
						diseases.
					</p>
				</section>
				<br />
				<section>
					<p>
						Biokinetics training consist of a four year degree as well as two
						years of professional exposure (internship). Five years of training
						is thus required prior to registration as a Biokineticist with the
						Health Professions Council of South Africa. We are recognised by
						most medical aids and thus clients can claim back their expenses for
						rehabilitation.
					</p>
				</section>
				<br />
			</div>
		);
	};
	getWhenText = () => {
		return (
			<div className="when-section">
				<section className="when-header">
					<h3>WHEN SHOULD YOU SEE/REFER YOUR PATIENTS TO A BIOKINETICIST?</h3>
				</section>
				<br />
				<section className="when-body">
					<p>If you/your patient:</p>
					<ul>
						<li>
							Suffers from a chronic disease (diabetes, hypertension, arthritis)
						</li>
						<li>
							Suffers from an orthopaedic condition that is decreasing their
							quality of life
						</li>
						<li>
							Had a surgery and hasn’t fully recovered (knee replacement/lumbar
							fusion)
						</li>
						<li>
							as an injury that prevents them from performing their day-to-day
							activities
						</li>
						<li>Has sport injuries</li>
						<li>
							Requires a weight-loss/weight-management program using exercise
						</li>
						<li>
							Leads a sedentary lifestyle and thus needs to increase physical
							activity levels
						</li>
						<li>
							Needs help to improve their physical ability through exercise to
							improve their quality of life
						</li>
						<li>Needs postural correction</li>
						<li>Wants to improve their sporting performances</li>
					</ul>
				</section>
			</div>
		);
	};
	/**
	 * render
	 */
	render() {
		return (
			<div
				className={
					this.props.classes.LandingPageComponent +
					" ui  vertical masthead center aligned segment "
				}
			>
				{this.getIntroText()}
				<div className="ui container home-body">
					{this.getCities()}
					{this.getSlidder()}
					{this.getAboutText()}
					{this.getWhatIsABio()}
					{this.getWhenText()}
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(LandingPageComponent);
