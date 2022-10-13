import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// Landing Related Pages
import About from './Landing/About';
import Contact from "./Landing/Contact";
import Career from "./Landing/Career";
import Faq from "./Landing/Faq";
import Security from "./Landing/Security";
import ForLawyer from "./Landing/ForLaywer";
import Term from "./Landing/Term";
import Blog from "./Landing/Blog";
import Main from "./Landing/Main"

// Auth Routing
import Auth from './Auth/Auth';

// Will Routing
import Will from './Will/Will';

function App() {
  return (
    <Router forceRefresh >
      <Header></Header>
      <Switch>
        <Route path='/' exact>
          <Main></Main>
        </Route>
        <Route path='/main' exact>
          <Main></Main>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/career'>
          <Career></Career>
        </Route>
        <Route path='/security' >
          <Security></Security>
        </Route>
        <Route path='/forlawyer'>
          <ForLawyer></ForLawyer>
        </Route>
        <Route path='/term'>
          <Term></Term>
        </Route>
        <Route path='/blogs'>
          <Blog></Blog>
        </Route>
        <Route path='/faq'>
          <Faq></Faq>
        </Route>
        <Route path='/auth' component={Auth}/>
        <Route path='/will' component={Will}/>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
export default App;
