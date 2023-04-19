import { useContext } from "react"
import { LanguageContext } from "../../App";

export default function ChangeLanguage() {
    const { language, setLanguage } = useContext(LanguageContext);

    const onChangeLanguage = () =>{
        if(language === "Español"){
            setLanguage("Inglés")
        } else{
            setLanguage("Español")
        }
    }
    return <div>
        El lenguaje actual es {language}
        <button onClick={onChangeLanguage}>Cambiar lenguaje</button>
    </div>
}