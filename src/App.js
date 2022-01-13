import React from "react";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import Screen from "./components/Screen/Screen";
import { store } from "./store";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div className="container">	
					<Sidebar />
					<Screen />
				</div>
			</div>
		</Provider>
	);
}

export default App;
