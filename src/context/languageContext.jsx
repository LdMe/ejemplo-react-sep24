import { createContext,useState } from "react";

const LanguageContext = createContext();

function LanguageContextProvider ({children}){
    const [language,setLanguage] = useState("Es");

    function toggleLanguage(){
        if(language === "Es"){
            setLanguage("Eu")
        }else{
            setLanguage("Es")
        }
    }
    return(
        <LanguageContext.Provider value={{language,toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext,LanguageContextProvider}