import MainPage from "./MainPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RsIntention from "./rs-intentions/RsIntention";
import RsIntentionsResult from "./rs-intentions/RsIntentionsResult";
import FreeTime from "./free-time/FreeTime";
import { useState } from "react";
import MyFreeTime from "./free-time/MyFreeTime";
import MvSong from "./mv-song/MvSong";
import MyMvSong from "./mv-song/MyMvSong";
import BadDay from "./bad-day/BadDay";
import MyBadDay from "./bad-day/MyBadDay";
import Qualities from "./qualities/Qualities";
import MyQualities from "./qualities/MyQualities";
import ShowLove from "./show-love/ShowLove";
import MyShowLove from "./show-love/MyShowLove";
import Meaningful from "./meaningful/Meaningful";
import MyMeaningful from "./meaningful/MyMeaningful";
import Halloween from "./halloween/Halloween";
import MyHalloween from "./halloween/MyHalloween";
import RsAdvice from "./rs-advice/RsAdvice";
import MyRsAdvice from "./rs-advice/MyRsAdvice";
import Contact from "./Contact";
import ThankYou from "./ThankYou";
import { Box } from "@mui/material";


function App() {
    // capture responses of user
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    const handleAnswer = (questionId: string, answer: string) => {
        setResponses(prev => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    // const showResponses = () => {
    //     console.log(responses);
    // }

    return (
        <Box className="page-container">
            <Box className="main-content">
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        {/* rs intentions MCQ */}
                        <Route path="/rs-intentions" element={<RsIntention onAnswer={(answer:string) => handleAnswer('rs-intention', answer)} />} />
                        <Route path='/rs-intentions/:type' element={<RsIntentionsResult />} />

                        {/* what do you do in your free time */}
                        <Route path="/free-time" element={<FreeTime onAnswer={(answer:string) => handleAnswer('free-time', answer)} />} />
                        <Route path="/my-free-time" element={<MyFreeTime />} />

                        {/* song that makes you feel like in a MV */}
                        <Route path="/mv-song" element={<MvSong onAnswer={(answer:string) => handleAnswer('mv-song', answer)} />} />
                        <Route path="/my-mv-song" element={<MyMvSong />} />

                        {/* what do you want from partner after a bad day MCQ */}
                        <Route path="/bad-day" element={<BadDay onAnswer={(answer:string) => handleAnswer('bad-day', answer)} />} />
                        <Route path="/my-bad-day" element={<MyBadDay />} />

                        {/* important qualities in a rs */}
                        <Route path="/impt-qualities" element={<Qualities onAnswer={(answer:string) => handleAnswer('impt-qualities', answer)} />} />
                        <Route path="/my-impt-qualities" element={<MyQualities />} />

                        {/* show love to someone you care */}
                        <Route path="/show-love" element={<ShowLove onAnswer={(answer:string) => handleAnswer('show-love', answer)} />} />
                        <Route path="/my-show-love" element={<MyShowLove />} />

                        {/* meaningful relationship mean to you MCQ */}
                        <Route path="/meaningful-rs" element={<Meaningful onAnswer={(answer:string) => handleAnswer('meaningful-rs', answer)} />} />
                        <Route path="/my-meaningful-rs" element={<MyMeaningful />} />

                        {/* halloween costume */}
                        <Route path="/halloween" element={<Halloween onAnswer={(answer:string) => handleAnswer('halloween', answer)} />} />
                        <Route path="/my-halloween" element={<MyHalloween />} />

                        {/* rs advice you would give younger self */}
                        <Route path="/rs-advice" element={<RsAdvice onAnswer={(answer:string) => handleAnswer('rs-advice', answer)} />} />
                        <Route path="/my-rs-advice" element={<MyRsAdvice />} />

                        {/* leave a contact */}
                        <Route path="/contact" element={<Contact allResponses={responses} />} />

                        {/* thank you */}
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>

                    {/* <button onClick={showResponses}>click me</button> */}
                </Router>
            </Box>

        <footer>
            &copy; rayray39, 2025
        </footer>
        </Box>
      );
}

export default App
