import RouteHeader from "./component/RouteHeader";
import RouteHomePage from "./component/RouteHomepage";
import RouteAboutPage from "./component/RouteAboutPage";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <RouteHeader />
      <Route path="/" component={RouteHomePage} />
      <Route path="/about" component={RouteAboutPage} />
    </div>
  );
}

export default App;
