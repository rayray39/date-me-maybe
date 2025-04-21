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
        <h1>Advice to myself🦍🦦</h1>

        <h3 style={{fontWeight:'normal'}}>
            "Just because all your friends are in rs, doesn't mean you have to rush it. Be kind to others but most
            importantly, be kind to yourself. You are so much more than the girls who ghosted you and rejected you. 
            Take it easy on yourself, don't beat yourself up if things don't end up the way you want them to be. Don't 
            do things that go against your values, be patient and know that the right one will show up one day!"
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyRsAdvice
