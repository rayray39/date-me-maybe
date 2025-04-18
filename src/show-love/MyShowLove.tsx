import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

function MyShowLove() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        // navigate('/show-love');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>How I show love</h1>

        <h3 style={{fontWeight:'normal'}}>
            I show love by being grateful and appreciative of everything you (not you, but maybe the future you😏) 
            have done for me.<br/>
            I will take note of all the little things you like and make an effort to surprise you💐🍨.<br/>
            I also like physical touch, so I will probably hold your hand, play with your fingers and squeeze your tiny biceps💁‍♀️
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyShowLove
