import MainPage from "./MainPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RsIntention from "./RsIntention";
import RsIntentionsResult from "./rs-intentions/RsIntentionsResult";
import FreeTime from "./free-time/FreeTime";


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rs-intentions" element={<RsIntention />} />
            <Route path='/rs-intentions/:type' element={<RsIntentionsResult />} />

            <Route path="/free-time" element={<FreeTime />} />
          </Routes>
        </Router>
      );
}

export default App
