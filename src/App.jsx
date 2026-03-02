import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Contact } from "./pages/contact/contact"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App