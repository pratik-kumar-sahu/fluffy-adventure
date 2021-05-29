import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
