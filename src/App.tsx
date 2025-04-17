import MainPage from "./MainPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RsIntention from "./RsIntention";
import RsIntentionsResult from "./rs-intentions/RsIntentionsResult";
import FreeTime from "./free-time/FreeTime";
import { useState } from "react";
import MyFreeTime from "./free-time/MyFreeTime";


function App() {
    // capture responses of user
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    const handleAnswer = (questionId: string, answer: string) => {
        setResponses(prev => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rs-intentions" element={<RsIntention onAnswer={(answer:string) => handleAnswer('rs-intention', answer)} />} />
            <Route path='/rs-intentions/:type' element={<RsIntentionsResult />} />

            <Route path="/free-time" element={<FreeTime onAnswer={(answer:string) => handleAnswer('free-time', answer)} />} />
            <Route path="/my-free-time" element={<MyFreeTime />} />
          </Routes>

        </Router>
      );
}

export default App
