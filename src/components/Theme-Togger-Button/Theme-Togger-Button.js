import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../Button/Button"

export const ThemeToggerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
 
    return (
            <Button theme={theme} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Change theme</Button>
       
    )
}