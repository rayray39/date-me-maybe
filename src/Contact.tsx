import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField";
import { useState } from "react"
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

function Contact({ onAnswer }:{ onAnswer:(answer:string) => void }) {
    const navigate = useNavigate();
    const [response, setResponse] = useState<string>('');

    const handleSubmit = () => {
        console.log('submitting responses...');
        onAnswer(response);
        navigate('/thank-you');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>{"Leave your contact details, if you want (tele, email??) 💌📃📬📝"}</h1>

        <TextField value={response} onChange={(event) => setResponse(event.target.value)}
            sx={{
                marginTop:'20px',
                mx: { xs: 2, sm: 10, md: 40 }
            }}
            id="contact-textfield" label="Your contact" variant="outlined" multiline rows={4}/>

        <CustomButton content="submit" onClickHandler={handleSubmit} />
    </Stack>
}

export default Contact