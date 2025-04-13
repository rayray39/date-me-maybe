import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function MainPage() {

    const handleStart = () => {
        console.log('starting test...');
    }

    return <Stack sx={{
            padding:'20px'
        }}>
            <Box>
                <h1>🤭</h1>
                <h1>Date Rayner, maybe</h1>
                <h2 style={{fontWeight:'normal'}}>find out if you're compatible with me or if you just wanna know more about me!</h2>
            </Box>

            <Box sx={{
                position:'absolute',
                bottom:90,
                left:0,
                right:0,
                px:10
            }}>
                <Button sx={{
                    height:"50px",
                    fontSize:'18px'
                }} variant="contained" disableElevation fullWidth onClick={handleStart}>{'start'}</Button>
            </Box>
        </Stack>
}

export default MainPage