import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

function CustomButton({ content, onClickHandler }:{ content:string, onClickHandler: () => void; }) {

    return <Box sx={{
        display:'flex',
        justifyContent:'center',
        position:'absolute',
        bottom:90,
        left:0,
        right:0,
        px: { xs: 6, sm: 10, md: 40 },
    }}>
        <Button sx={{
            height:"50px",
            fontSize:'18px'
        }} variant="contained" disableElevation fullWidth onClick={onClickHandler}>{content}</Button>
    </Box>
}

export default CustomButton