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
    // const navigate = useNavigate();

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
        console.log('completed Bad Day... proceeding on');
        onAnswer(alignment);
        // navigate(`/bad-day/${alignment}`);
    }

    const handleAlignment = (
        // handles the ToggleButtonGroup
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <Box>
            <h1>😩</h1>
            <h1>You're having a bad day. What do you want from your partner?</h1>
        </Box>

        <ToggleButtonGroup
            value={alignment}
            color="primary"
            orientation="vertical"
            exclusive
            onChange={handleAlignment}
            aria-label="bad-day"
            sx={{
                marginTop:"20px",
                px: { xs: 2, sm: 10, md: 40 },
            }}
            >
            <ToggleButton value="space-alone" aria-label="space-alone">
                {'space and alone time 🌌 😌'}
            </ToggleButton>
            <ToggleButton value="distraction" aria-label="distraction">
                {'distraction, memes, jokes 🤡'}
            </ToggleButton>
            <ToggleButton value="solutions-advice" aria-label="solutions-advice">
                {'solutions and advice 🛠️'}
            </ToggleButton>
            <ToggleButton value="comfort-cuddles" aria-label="comfort-cuddles">
                {"comfort and cuddles 🤗 🙆‍♀️"}
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