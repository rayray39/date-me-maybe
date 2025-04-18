import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

function MyQualities() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        // navigate('/bad-day');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>Qualities I value in a partner</h1>

        <h3 style={{fontWeight:'normal'}}>
            I love someone who takes care of her health 💪💁, be it the gym, pilates or sports etc.<br/>
            I also like it if she's independent, has dreams to pursue 👨‍🚀, and a desire to grow individually and 
            together 🦸‍♀️.<br/>
            I also love it if she's patient and not afraid to take the lead sometimes 🙋.
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyQualities