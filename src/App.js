import './App.css';
import LAside from './components/LAside';
import RAside from './components/RAside';

import Configuration from './components/sub-components/Configuration';
import MyProfile from './components/sub-components/MyProfile';
import Host from './components/sub-components/Host';
import Inbox from './components/sub-components/Inbox';
import Tracks from './components/sub-components/Tracks';
import Docs from './components/sub-components/Docs';
import Dashboard from './components/sub-components/Dashboard';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DebugStress from './components/sub-components/dashboard-components/DebugStress';
import InspectWorld from './components/sub-components/dashboard-components/InspectWorld';

import Trackers from './components/sub-components/track-components/Trackers';
import Trackings from './components/sub-components/track-components/Trackings';

import Snippets from './components/sub-components/my-profile/Snippets';
import JoySources from './components/sub-components/my-profile/JoySources';
import Mentions from './components/sub-components/my-profile/Mentions';

function App() {
  return (
    <>
      <Router>
        <div className="screen d-flex"> 
          {/* <Navbar/> */}
          <LAside />
          <div className="main col-md-6 p-0" style={{height:'100vh',overflowY:'scroll',overflowX:'hidden'}}>
            <Routes>
              <Route path="/" element={<Dashboard/>}>
                <Route index element={<DebugStress/>}/>
              </Route>
              <Route path="/dashboard" element={<Dashboard/>}>
                <Route index element={<DebugStress/>}/>
                <Route path="debug-stress" element={<DebugStress/>}/>
                <Route path="inspect-world" element={<InspectWorld/>}/>
              </Route>
              <Route path="/configuration" element={<Configuration/>}/>
              <Route path="/my-profile" element={<MyProfile/>}>
                <Route index element={<Snippets/>}/>
                <Route path="snippets" element={<Snippets/>}/>
                <Route path="joy-source" element={<JoySources/>}/>
                <Route path="mentions" element={<Mentions/>}/>
              </Route>
              <Route path="/host" element={<Host/>}/>
              <Route path="/inbox" element={<Inbox/>}/>
              <Route path="/tracks" element={<Tracks/>}>
                <Route index element={<Trackers/>}/>
                <Route path="trackers" element={<Trackers/>}/>
                <Route path="trackings" element={<Trackings/>}/>
              </Route>
              <Route path="/docs" element={<Docs/>}/>
              <Route path="*" element={<Dashboard/>}/>
            </Routes>
          </div>
          <RAside/>
        </div>
        <a href="/" className="support-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(117, 79, 229)" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
        </a>
      </Router>
    </>
  );
}

export default App;
