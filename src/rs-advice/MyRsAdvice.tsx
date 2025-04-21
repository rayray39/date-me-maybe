import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

function MyRsAdvice() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        // navigate('/meaningful-rs');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>My RS advice to ah boy Rayner</h1>

        <h3 style={{fontWeight:'normal'}}>
            
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyRsAdvice
