import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";

function ShowLove({ onAnswer }:{ onAnswer:(answer:string) => void }) {
    const navigate = useNavigate();

    // user response from the text field
    const [response, setResponse] = useState<string>('');

    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const handleShowAlert = () => {
        // opens the snackbar with alert
        setOpenAlert(true);
    };

    const handleClose = () => {
        // closes the snackbar with alert
        setOpenAlert(false);
    };

    const nextHandler = () => {
        if (response === '') {
            // if nothing is typed into the text field
            handleShowAlert();
            console.log('response is empty!');
            return;
        }
        console.log(`${response}`);
        onAnswer(response);     // calls onAnswer from App.tsx to record down response
        console.log('completed Show Love... proceeding on');
        navigate('/my-show-love');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <Box>
            <h1>🥰</h1>
            <h1>How do you show love to someone you care about?</h1>
        </Box>

        <TextField value={response} onChange={(event) => setResponse(event.target.value)}
            sx={{
                marginTop:'20px',
                mx: { xs: 2, sm: 10, md: 40 }
            }}
            id="show-love-textfield" label="Your response" variant="outlined" multiline rows={4}/>

        <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity="error" variant="filled">
                Fill in something before proceeding!
            </Alert>
        </Snackbar>

        <CustomButton content="next" onClickHandler={nextHandler} />
    </Stack>
}

export default ShowLove