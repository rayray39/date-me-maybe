import Stack from "@mui/material/Stack"
import CustomButton from "./CustomButton"
import Box from "@mui/material/Box"

function RsIntention() {

    const nextHandler = () => {
        console.log('completed RS Intentions... proceeding on');
    }

    return <Stack sx={{
        padding:'20px'
    }}>
        <Box>
            <h1>What are you looking for?</h1>
            <h2 style={{fontWeight:'normal'}}>{'Be honest, I hate liars!!! (but sure you can lie about your weight hehe)'}</h2>
        </Box>

        <CustomButton content="next" onClickHandler={nextHandler} />
    </Stack>
}

export default RsIntention