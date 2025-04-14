import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function RsIntentionsResult() {
    const [title, setTitle] = useState<string>('');
    const { type } = useParams();

    const handleContinue = () => {
        console.log('continuing...');
    }

    useEffect(() => {
        if (type === "soulmate-marriage") {
            setTitle('soulmate/marriage');
        } else if (type === "longterm-rs") {
            setTitle('longterm rs');
        } else if (type === "hookups") {
            setTitle('hookups/casual dating');
        } else if (type === "just-curious") {
            setTitle('just curious');
        } else {
            setTitle('invalid');
        }
    }, [type]);

    return <>
        {title}

        <Button variant="contained" disableElevation onClick={handleContinue}>Continue</Button>
    </>
}

export default RsIntentionsResult