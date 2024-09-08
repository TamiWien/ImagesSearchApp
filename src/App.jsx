import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ImageDetails from "./pages/ImageDetails"

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/image/:id' element={<ImageDetails />} />
    </Routes>
  )
}

export default App
