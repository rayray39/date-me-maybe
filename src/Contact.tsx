import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react"
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function Contact({ allResponses }:{ allResponses:{[key:string]: string} }) {
    const navigate = useNavigate();
    const [responses, setResponses] = useState<{[key:string]: string}>(allResponses);

    const [contactDetails, setContactDetails] = useState<string>('');

    const handleSubmit = () => {
        // records the final response, which is the contact details
        console.log('submitting responses...');
        
        setResponses(prev => ({
            // record contact details into responses
            ...prev,
            ['contact']: contactDetails,
        }))
        
        // navigate('/thank-you');
    }

    const sendEmail = ( responses:{[key:string]: string} ) => {
        // sends the email via emailjs
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const message = JSON.stringify(responses, null, 2);

        emailjs.send(serviceID, templateID, {
            message: message,
        }).then((_response) => {
            console.log('Email successfully sent!', _response.status, _response.text)
        }).catch((error) => {
            console.error('Email error:', error);
        });
    }

    useEffect(() => {
        // this code will run if updates are made to responses
        console.log(responses);
        sendEmail(responses);
    }, [responses])

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