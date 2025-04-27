import Stack from "@mui/material/Stack"
import CustomButton from "../utilities/CustomButton"
import Box from "@mui/material/Box"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RsIntention({ onAnswer }:{ onAnswer: (answer:string) => void }) {
    const navigate = useNavigate();

    const [alignment, setAlignment] = useState<string | null>('left');

    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const handleAlignment = (
        // handles the ToggleButtonGroup
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    };

    const handleShowAlert = () => {
        // opens the snackbar with alert
        setOpenAlert(true);
    };

    const handleClose = () => {
        // closes the snackbar with alert
        setOpenAlert(false);
    };

    const nextHandler = () => {
        if (alignment === 'left' || alignment == null) {
            // default toggle button group value
            // if an option is not selected
            handleShowAlert();
            return;
        }
        console.log('completed RS Intentions... proceeding on');
        onAnswer(alignment);
        navigate(`/rs-intentions/${alignment}`);
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <Box>
            <h1>🧐</h1>
            <h1>What are you looking for?</h1>
            <h2 style={{fontWeight:'normal'}}>{'Be honest, I hate liars!!! (but sure you can lie about your weight hehe)'}</h2>
        </Box>

        <ToggleButtonGroup
            value={alignment}
            color="primary"
            orientation="vertical"
            exclusive
            onChange={handleAlignment}
            aria-label="rs-intentions"
            sx={{
                marginTop:"20px",
                px: { xs: 2, sm: 10, md: 40 },
            }}
            >
            <ToggleButton value="soulmate-marriage" aria-label="soulmate-marriage">
                {'soulmate/marriage 💍'}
            </ToggleButton>
            <ToggleButton value="longterm-rs" aria-label="longterm-rs">
                {'long term rs ❤️'}
            </ToggleButton>
            <ToggleButton value="hookups" aria-label="hookups">
                {'hookups 💦 / casual dating 👫'}
            </ToggleButton>
            <ToggleButton value="just-curious" aria-label="curious">
                {"i'm just curious what this is 😛"}
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

export default RsIntention