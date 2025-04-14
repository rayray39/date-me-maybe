import MainPage from "./MainPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RsIntention from "./RsIntention";


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rs-intentions" element={<RsIntention />} />
          </Routes>
        </Router>
      );
}

export default App
