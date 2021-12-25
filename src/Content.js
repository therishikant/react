const Content = () => {

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Rishi', 'Dave'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }

    const handleClick = () => {
        console.log("You Clicked it");
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    return (
        <main>
            <p> Hello {handleNameChange()}</p>
            <button onClick={handleClick}> Click It</button>
            <button onClick={() => handleClick2('Dave')}> Click It</button>
        </main>
    )
}

export default Content
