import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import { ButtonStyled } from "./Button.styled"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <ButtonStyled {...props} theme={theme}/>
    )
}