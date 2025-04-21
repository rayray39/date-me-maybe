import Stack from "@mui/material/Stack"
import CustomButton from "./CustomButton"
import { useNavigate } from "react-router-dom";

function ThankYou() {
    const navigate = useNavigate();

    const handleReturn = () => {
        console.log('returning to main page...');
        navigate('/');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>😇</h1>
        <h1>Thank you for completing this!</h1>
        <h2 style={{fontWeight:'normal'}}>Thank you for being genuine and taking the time to complete this HAHA, I will read through it
            and get back to you asap if I think we are a match 💪
        </h2>

        <CustomButton content="return to main page" onClickHandler={handleReturn} />
    </Stack>
}

export default ThankYou