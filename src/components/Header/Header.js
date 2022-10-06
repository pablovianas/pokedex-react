import { Header } from "./Header.styled"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"

export const Header = (props) =>{

    const { theme } = useContext(ThemeContext)

    return (
        <Header {...props} theme={theme}>{props.children}</Header>
    )
}