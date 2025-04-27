import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField";
import { useState } from "react"
import CustomButton from "./utilities/CustomButton";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function Contact({ allResponses }:{ allResponses:{[key:string]: string} }) {
    const navigate = useNavigate();

    const [contactDetails, setContactDetails] = useState<string>('');

    const handleSubmit = () => {
        // records the final response, which is the contact details
        console.log('submitting responses...');

        const responses = {
            ...allResponses,
            contact: contactDetails
        };

        console.log(responses);
        sendEmail(responses);
        
        navigate('/thank-you');
    }

    const sendEmail = ( responses:{[key:string]: string} ) => {
        // sends the email via emailjs
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const message = JSON.stringify(responses, null, 2);

        const templateParams = {message};

        emailjs.send(serviceID, templateID, templateParams, publicKey).then((_response) => {
            console.log('Email successfully sent!', _response.status, _response.text)
        }).catch((error) => {
            console.error('Email error:', error);
        });
    }

    // sends the email via express server to emailjs
    // emailjs refuses access to their API through a backend server (express)
    // const sendEmail = async (responses:{[key:string]: string}) => {
    //     const apiResponse = await fetch('http://localhost:5000/send-email', {
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body: JSON.stringify({ responses }),
    //     })

    //     const data = await apiResponse.json();

    //     if (!apiResponse.ok) {
    //         console.log(data.error);
    //         return;
    //     }

    //     console.log(data.message);
    // }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>{"Leave your contact details, if you want (tele, email??) 💌📃📬📝"}</h1>

        <TextField value={contactDetails} onChange={(event) => setContactDetails(event.target.value)}
            sx={{
                marginTop:'20px',
                mx: { xs: 2, sm: 10, md: 40 }
            }}
            id="contact-textfield" label="Your contact" variant="outlined" multiline rows={4}/>

        <CustomButton content="submit" onClickHandler={handleSubmit} />
    </Stack>
}

export default Contact