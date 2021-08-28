import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import Candidate from './pages/candidate';
import Managecontent from './pages/managecontent';
import Members from './pages/members';
import Newsurveys from './pages/newsurveys';
import Observer from './pages/observer';
import Observerrequest from './pages/observerrequest';
import Pages from './pages/pages';
import Totalsurveys from './pages/totalsurveys';
import Uploadbanner from './pages/uploadbanner';
import Uploadcontent from './pages/uploadcontent';
import Uploadimage from './pages/uploadimage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/candidate' component={Candidate} />
      <Route exact path='/managecontent' component={Managecontent} />
      <Route exact path='/members' component={Members} />
      <Route exact path='/newsurveys' component={Newsurveys} />
      <Route exact path='/observer' component={Observer} />
      <Route exact path='/observerrequest' component={Observerrequest} />
      <Route exact path='/pages' component={Pages} />
      <Route exact path='/totalsurveys' component={Totalsurveys} />
      <Route exact path='/uploadbanner' component={Uploadbanner} />
      <Route exact path='/uploadcontent' component={Uploadcontent} />
      <Route exact path='/uploadimage' component={Uploadimage} />
    </Switch>
  );
}

export default App;
