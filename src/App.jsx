import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/image/:id' element={<ImageDetails />} />
    </Routes>
  )
}

export default App
