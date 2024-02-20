import Home from "./pages/Home"
import "./App.css"
import Terms from './sections/home-ke-sections/terms/terms'
import Privacy from './sections/home-ke-sections/terms/pp'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
function App() {
  

  return (
    <>
     <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/terms-and-conditon" element={ <Terms/> } />
    <Route path="/privacy" element={ <Privacy/> } />
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
