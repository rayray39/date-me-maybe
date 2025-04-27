import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import CustomButton from "../utilities/CustomButton";
import GifWrapper from "../utilities/GifWrapper";

function RsIntentionsResult() {
    // title on page
    const [title, setTitle] = useState<string>('');
    // content on page
    const [content, setContent] = useState<string>('');
    // true if [soulmate, longterm], false otherwise
    const [serious, setSerious] = useState<boolean>(false);

    // gif url from giphy
    const [gifUrl, setGifUrl] = useState<string>('');

    const navigate = useNavigate();

    // intention selected from RsIntention.tsx
    const { type } = useParams();

    // const fetchGif = async (url:string) => {
    //     try {
    //         setGifUrl(url);
    //     } catch (error) {
    //         console.error("Error fetching gif: ", error);
    //     }
    // }

    const displayGif = (path:string) => {
        setGifUrl(path);
    }

    const handleContinue = () => {
        console.log('continuing...');
        navigate('/free-time');
    }

    useEffect(() => {
        if (type === "soulmate-marriage") {
            setTitle('soulmate/marriage');
            setContent('Wow, you clearly know what you want! Although I would love to marry my soulmate too, I believe in taking things slowly and getting to know each other deeply first :))');
            // fetchGif("https://giphy.com/embed/xtDOwODhHW3Ty");      // forever along gif
            displayGif('/forever alone GIF.gif');    // forever alone gif
            setSerious(true);
        } else if (type === "longterm-rs") {
            setTitle('longterm rs');
            setContent("You're serious! I'm looking for something serious too, so at least we are aligned on that :))");
            // fetchGif("https://giphy.com/embed/zCTyAD1jFhWnu");      // justin beiber gif
            displayGif('/sexy justin bieber GIF.gif');   // justin bieber gif
            setSerious(true);
        } else if (type === "hookups") {
            setTitle('hookups/casual dating');
            setContent("Well that aint for me so bye bye, unless you wanna be my sugar mummy (jk, wink wink*)");
            // fetchGif("https://giphy.com/embed/Xw6yFn7frR3Y4");      // baby dancing gif
            displayGif('/dancing baby GIF.gif');    // baby dancing gif
        } else if (type === "just-curious") {
            setTitle('just curious');
            setContent("BOOOO!! GTFO!! Stop wasting my time you smelly ox (jk)");
            // fetchGif("https://giphy.com/embed/3cLYEjIaxidkQ");      // hair flip gif
            displayGif('/Dave Grohl Hair Flip GIF.gif');    // hair flip gif
        } else {
            setTitle('invalid');
            setContent('invalid');
        }
    }, [type]);

    return <Stack sx={{
        px:'20px'
    }}>
        <h1>{title}</h1>

        <h3 style={{fontWeight:'normal'}}>{content}</h3>

        {gifUrl && <GifWrapper urlSource={gifUrl}/>}

        {serious && <CustomButton content="continue" onClickHandler={handleContinue} />}
    </Stack>
}

export default RsIntentionsResult