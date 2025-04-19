import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function MyShowLove() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        navigate('/halloween');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>My halloween costume/couple fit idea</h1>

        <h3 style={{fontWeight:'normal'}}>
            I will dress up as Mo Salah🧔🏽 and you can dress up as Erling Haaland👱🏻‍♀️⚽️.<br/>
            I will dress as Lewis Hamilton👦🏾 and you can be Max Verstappen🧑🏻🏎.
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
            }} src="/it-costume.jpg" alt="virtual-hugs" />
        </Box>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyShowLove
