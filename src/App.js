import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />

      {/* <Homepage /> */}
    </div>
  );
}

export default App;
