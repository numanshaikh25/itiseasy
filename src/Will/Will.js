import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Redirect,
} from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import MainContainer from "./MainContainer";
import PrintForSelf from "./print/PrintForSelf";
const Will = () => {
  {
    if (isAuthenticated()) {
      return (
        <Route
          //Check here if authenticated, if redirect him to the dashboard
          path="/will"
          render={({ match: { url } }) => (
            <Switch>
              <Route path={`${url}/`} component={MainContainer} exact />
              <Route path={`${url}/generate`} component={MainContainer} />
            </Switch>
          )}
        />
      );
    } else {
      return <Redirect to="/auth/login" />;
    }
  }
};

export default Will;
