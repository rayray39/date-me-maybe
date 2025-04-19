import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function MyShowLove() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        navigate('/meaningful-rs');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>My meaningful relationship</h1>

        <h3 style={{fontWeight:'normal'}}>
            To be honest, all the options seem like what a meaningful relationship should be, but I think the ones that 
            stood out were Partnership🥰 and Shared Growth🤭.<br/>
            A relationship where we cheer on each other and grow together. When challenges arise,
            we don't hide but work together to face it🦸🦸‍♂️.
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
            }} src="/dancing.jpg" alt="virtual-hugs" />
        </Box>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyShowLove
