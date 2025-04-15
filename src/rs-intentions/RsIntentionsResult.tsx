import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CustomButton from "../CustomButton";
import GifWrapper from "../GifWrapper";

function RsIntentionsResult() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [serious, setSerious] = useState<boolean>(false);

    const [gifUrl, setGifUrl] = useState<string>('');

    const { type } = useParams();

    const fetchGif = async (url:string) => {
        try {
            setGifUrl(url);
        } catch (error) {
            console.error("Error fetching gif: ", error);
        }
    }

    const handleContinue = () => {
        console.log('continuing...');
    }

    useEffect(() => {
        if (type === "soulmate-marriage") {
            setTitle('soulmate/marriage');
            setContent('Wow, you clearly know what you want! Although I would love to marry my soulmate too, I believe in taking things slowly and getting to know each other deeply first :))');
            fetchGif("https://giphy.com/embed/xtDOwODhHW3Ty");      // forever along gif
            setSerious(true);
        } else if (type === "longterm-rs") {
            setTitle('longterm rs');
            setContent("You're serious! I'm looking for something serious too, so at least we are aligned on that :))");
            fetchGif("https://giphy.com/embed/zCTyAD1jFhWnu");      // justin beiber gif
            setSerious(true);
        } else if (type === "hookups") {
            setTitle('hookups/casual dating');
            setContent("Well that aint for me so bye bye, unless you wanna be my sugar mummy (jk, wink wink*)");
            fetchGif("https://giphy.com/embed/Xw6yFn7frR3Y4");      // baby dancing gif
        } else if (type === "just-curious") {
            setTitle('just curious');
            setContent("BOOOO!! GTFO!! Stop wasting my time you smelly ox (jk)");
            fetchGif("https://giphy.com/embed/3cLYEjIaxidkQ");      // hair flip gif
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