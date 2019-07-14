import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import comingSoon from "./components/comingSoon";
//routes
import landingPage from "./routes/landingPage";
import servicesPage from "./routes/servicesPage";
import assessmentsPage from "./routes/assessmentsPage";
import tariffsPage from "./routes/tariffsPage";
import teamPage from "./routes/teamPage";
import contactUsPage from "./routes/contactUsPage";
//header
import Header from "./components/header";
function App() {
	return (
		<BrowserRouter>
			<div className="application">
				<Header />
				<div className="page-content">
					<Switch>
						<Route exact path={"/"} component={comingSoon} />
						<Route path={"/home"} component={landingPage} />
						<Route path={"/services"} component={comingSoon} />
						<Route path={"/assessments"} component={comingSoon} />
						<Route path={"/tariffs"} component={comingSoon} />
						<Route path={"/team"} component={comingSoon} />
						<Route path={"/contactus"} component={comingSoon} />
						{/* <Route path={"/home"} component={landingPage} />
						<Route path={"/services"} component={servicesPage} />
						<Route path={"/assessments"} component={assessmentsPage} />
						<Route path={"/tariffs"} component={tariffsPage} />
						<Route path={"/team"} component={teamPage} />
						<Route path={"/contactus"} component={contactUsPage} /> */}
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
