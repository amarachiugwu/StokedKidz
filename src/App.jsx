import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import "./style.css";
import Home from "components/Frontend/Home";


const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home isServerInfo={isServerInfo} />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
