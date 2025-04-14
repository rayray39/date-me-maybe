import Stack from "@mui/material/Stack"
import CustomButton from "./CustomButton"
import Box from "@mui/material/Box"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

function RsIntention() {

    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (
        // handles the ToggleButtonGroup
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    };


    const nextHandler = () => {
        console.log('completed RS Intentions... proceeding on');
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
            <ToggleButton value="soulmate/marriage" aria-label="soulmate-marriage">
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

        <CustomButton content="next" onClickHandler={nextHandler} />
    </Stack>
}

export default RsIntention