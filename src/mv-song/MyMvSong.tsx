import Stack from "@mui/material/Stack"
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

function MyMvSong() {
    const navigate = useNavigate();

    const handleContinue = () => {
        console.log("continuing...");
        // navigate('/mv-song');
    }

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>My fav songs</h1>

        <h3 style={{fontWeight:'normal'}}>
            I'm a big One Direction fan ❤️, so any songs by them are pretty much my fav.<br/>
            I also like Lauv 🤩, some of my fav songs include Bracelet, Invisible Things, For Now, Lonely Eyes, Love Somebody etc.<br/>
            I'm quite big on Post Malone too 😎, some of his songs that I love include Candy Paint (best song ever...), A Thousand Bad 
            Times, Chemical etc.<br/>
            Other artists that I listen too include Miley Cyrus 🌻, Machine Gun Kelly 🔫 and LANY 🎈.
        </h3>

        <CustomButton content="continue" onClickHandler={handleContinue} />
    </Stack>
}

export default MyMvSong