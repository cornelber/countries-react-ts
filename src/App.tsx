import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import Home from "./pages/Home"
import CountriesPage from "./pages/CountriesPage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import { CountriesProvider } from "./context/CountriesContext"

function App() {
  return (
    <CountriesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:cca2" element={<CountryDetailsPage />} />
      </Routes>
    </CountriesProvider>
  )
}

export default App
