import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CustomButton from "../CustomButton";

function RsIntentionsResult() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [serious, setSerious] = useState<boolean>(false);

    const { type } = useParams();

    const handleContinue = () => {
        console.log('continuing...');
    }

    useEffect(() => {
        if (type === "soulmate-marriage") {
            setTitle('soulmate/marriage');
            setContent('Wow, you clearly know what you want! Although I would love to marry my soulmate too, I believe in taking things slowly and getting to know each other deeply first :))');
            setSerious(true);
        } else if (type === "longterm-rs") {
            setTitle('longterm rs');
            setContent("You're serious! I'm looking for something serious too, so at least we are aligned on that :))");
            setSerious(true);
        } else if (type === "hookups") {
            setTitle('hookups/casual dating');
            setContent("Well that aint for me so bye bye, unless you wanna be my sugar mummy (jk, wink wink*)");
        } else if (type === "just-curious") {
            setTitle('just curious');
            setContent("BOOOO!! GTFO!! Stop wasting my time you smelly ox (jk)");
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

        {serious && <CustomButton content="continue" onClickHandler={handleContinue} />}
    </Stack>
}

export default RsIntentionsResult