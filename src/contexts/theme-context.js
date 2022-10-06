import { createContext, useState } from "react";

export const themes = {
    light: {
        textColor: '#000',
        backgroundColor: '#82b1ff',
        
    },
    dark: {
        backgroundColor: '#0d47a1',
        textColor: '#fff',
        
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}