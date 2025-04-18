import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import Box from "@mui/material/Box";

function MyBadDay() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        navigate('/impt-qualities');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>What I want from my partner after a bad day</h1>

        <h3 style={{fontWeight:'normal'}}>
            I'm quite emotional 🙇 so I need some alone time to process my feelings.<br/>
            Offering solutions/advice is nice, only if solicited HAHA, but I tend to be able to handle my own 
            issues pretty well 💪.<br/>
            If it was a really bad day, then comfort and cuddles are like mandatory aren't they HAHAHA 🙆‍♂️🤗  
        </h3>

        <Box sx={{
            width: {
                xs: '80%',    
                sm: '60%',    
                md: '50%',    
                lg: '30%',    
            },
            mx: 'auto',
        }}>
            <img style={{
                display:'block',
                width:'100%',
                height:'auto',
            }} src="/hugs.jpg" alt="virtual-hugs" />
        </Box>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyBadDay