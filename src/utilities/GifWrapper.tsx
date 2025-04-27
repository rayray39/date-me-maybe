import Box from "@mui/material/Box"

function GifWrapper({ urlSource }:{ urlSource:string }) {
    return <Box sx={{
        width: {
            xs: '90%',    
            sm: '60%',    
            md: '50%',    
            lg: '30%',    
        },
        marginTop:'20px',
        mx: 'auto',
    }}>
        {/* <iframe src={urlSource} style={{
            border:0,
            aspectRatio: '16/9',
            display:'block',
            width:'100%',
            height:'auto',
        }} className="giphy-embed" allowFullScreen></iframe> */}

        <img className="animated-gif" style={{
            border:0,
            display:'block',
            width:'100%',
            height:'auto',
        }} src={urlSource} alt={urlSource} />
    </Box>
}

export default GifWrapper