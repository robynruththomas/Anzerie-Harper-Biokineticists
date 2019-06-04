import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import comingSoon from "./components/comingSoon";
function App() {
	return (
		<BrowserRouter>
			<div className="application">
				<Switch>
					<Route exact path={"/"} component={comingSoon} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
