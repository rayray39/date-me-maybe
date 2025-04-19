import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Snackbar from "@mui/material/Snackbar"
import Stack from "@mui/material/Stack"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import CustomButton from "../CustomButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function BadDay({ onAnswer }:{ onAnswer:(answer:string) => void }) {
    const navigate = useNavigate();

    const [alignment, setAlignment] =  useState<string | null>('left');

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
        if (alignment === 'left' || alignment == null) {
            // default toggle button group value
            // if an option is not selected
            handleShowAlert();
            return;
        }
        console.log('completed Meaningful... proceeding on');
        onAnswer(alignment);
        navigate(`/my-meaningful-rs`);
    }

    const handleAlignment = (
        // handles the ToggleButtonGroup
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <Box>
            <h1>🦉</h1>
            <h1>What does a meaningful relationship look like to you?</h1>
        </Box>

        <ToggleButtonGroup
            value={alignment}
            color="primary"
            orientation="vertical"
            exclusive
            onChange={handleAlignment}
            aria-label="meaningful"
            sx={{
                marginTop:"20px",
                px: { xs: 2, sm: 10, md: 40 },
            }}
            >
            <ToggleButton value="partnership" aria-label="partnership">
                {'Partnership🐹 - face challenges together, not as opponents'}
            </ToggleButton>
            <ToggleButton value="best-friends" aria-label="best-friends">
                {'A best friend type of relationship🐥'}
            </ToggleButton>
            <ToggleButton value="safe-space" aria-label="safe-space">
                {"Safe space🐵 - we're supportive, emotionally mature and honest"}
            </ToggleButton>
            <ToggleButton value="shared-growth" aria-label="shared-growth">
                {"Shared growth🐶 - we grow together and cheer each other on"}
            </ToggleButton>
        </ToggleButtonGroup>

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

export default BadDay