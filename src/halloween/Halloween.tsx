import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Snackbar from "@mui/material/Snackbar"
import Stack from "@mui/material/Stack"
import CustomButton from "../utilities/CustomButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"

function Halloween({ onAnswer }:{ onAnswer:(answer:string) => void }) {
    const navigate = useNavigate();

    const [response, setResponse] = useState<string>('');

    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const handleClose = () => {
        // closes the snackbar and alert
        setOpenAlert(false);
    }

    const handleShowAlert = () => {
        // opens the snackbar with alert
        setOpenAlert(true);
    };

    const nextHandler = () => {
        if (response === '') {
            // if text field is empty
            handleShowAlert();
            return;
        }
        console.log(response);
        console.log('completed Halloween... proceeding on');
        onAnswer(response);
        navigate(`/my-halloween`);
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <Box>
            <h1>🧜🧟</h1>
            <h1>What would be our couple halloween costume/fit idea?</h1>
        </Box>

        <TextField value={response} onChange={(event) => setResponse(event.target.value)}
                sx={{
                    marginTop:'20px',
                    mx: { xs: 2, sm: 10, md: 40 }
                }}
                id="halloween-textfield" label="Your response" variant="outlined" multiline rows={4}/>

        <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity="error" variant="filled">
                Select an option before proceeding!
            </Alert>
        </Snackbar>

        <CustomButton content="next" onClickHandler={nextHandler} />
    </Stack>
}

export default Halloween