import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        console.log('starting test...');
        navigate('/rs-intentions');
    }

    return <Stack sx={{
            padding:'20px'
        }}>
            <Box>
                <h1>🤭</h1>
                <h1>Date Rayner, maybe</h1>
                <h2 style={{fontWeight:'normal'}}>find out if you're compatible with me or if you just wanna know more about me!</h2>
            </Box>

            <CustomButton content="start" onClickHandler={handleStart} />
        </Stack>
}

export default MainPage