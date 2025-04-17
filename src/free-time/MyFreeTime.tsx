import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

function MyFreeTime() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        navigate('/mv-song');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>How I spend my free time</h1>

        <h3 style={{fontWeight:'normal'}}>
            I like to spend my free time gymming 🏋️‍♀️, I used to play quite abit of sports 🏅 so I'm quite an active person.<br/>
            I also like to watch movies/shows 🎥, some of my fav films inlclude Dead Poets Society, Resevoir Dogs, and Memento.<br/>
            Sometimes I also like to work on my hobbies and learn new things! 💻🥘🌆
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyFreeTime