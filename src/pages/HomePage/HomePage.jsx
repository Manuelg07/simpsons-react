import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import Search from "../../components/Search/Search";
export default function HomePage() {
    const [characters, setCharacters] = useState([]);

    const getQuotes = (characterText) => {
        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=" + characterText).then(res => {
            setCharacters(res.data)
        })
    }

    useEffect(() => {
        getQuotes("")
    }, [])

    return <div>
        <Search onSearch={getQuotes}/>
        <Gallery list={characters}></Gallery>
    </div>
}

