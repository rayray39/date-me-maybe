
function MainPage() {

    const handleStart = () => {
        console.log('starting test...');
    }

    return <>
        <h1>Date Rayner, maybe</h1>

        <div>find out if you're compatible with me or if you just wanna know more about me!</div>

        <button onClick={handleStart}>start</button>
    </>
}

export default MainPage