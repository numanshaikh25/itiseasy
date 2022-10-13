import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import { isAuthenticated } from "../utils/auth";

const Auth = () => {
  console.log(isAuthenticated());
  if (isAuthenticated()) {
    console.log("Reached here");
    return <Redirect to="/main" />;
  } else {
    return (
      <Route
        //Check here if authenticated, if redirect him to the dashboard
        path="/auth"
        render={({ match: { url } }) => (
          <Switch>
            <Route path={`${url}/`} component={Login} exact />
            <Route path={`${url}/login`} component={Login} />
            <Route path={`${url}/register`} component={Register} />
            <Route path={`${url}/forgot-password`} component={Forgot} />
          </Switch>
        )}
      />
    );
  }
};

export default Auth;
