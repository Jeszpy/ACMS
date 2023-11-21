import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [greet, setGreet] = useState<string>('')
    useEffect(() => {
        fetch('/api')
            .then((res) => res.text())
            .then(setGreet)
    }, []);
    return (
        <>
            data from back -{'>'} {greet}
        </>
    )
}

export default App
