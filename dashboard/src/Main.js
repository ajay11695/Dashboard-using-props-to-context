import { Route, Routes } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import People from "./People";


function Main() {

	return (
		<div className="page-content">

			<Routes>
				<Route path="/" exact element={ <Home />} />
				<Route path="/help" element={<Help/>} />
				<Route path="/articles" exact element={ <Articles />} />
				<Route path="/people" element={ <People />} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/articles/:slug" element={ <Article  />} />
				<Route path="*" element={<NotFound/>} />
			</Routes>

		</div>
	);
}

export default Main;
