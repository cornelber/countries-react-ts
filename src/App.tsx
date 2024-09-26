import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import Home from "./pages/Home"
import Countries from "./pages/Countries"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  )
}

export default App
