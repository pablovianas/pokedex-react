import { Pokemons } from './components/Pokemons/Pokemons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/theme-context';
import { Pokemon } from './pages/Pokemon';
import { useContext } from "react"
import { ThemeContext } from "./contexts/theme-context"

function App() {
  const { theme } = useContext(ThemeContext)

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pokemons />}/>
            <Route path="/pokemon/:id" element={<Pokemon />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;