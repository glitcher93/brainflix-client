import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" />
        <Route path="upload" />
        <Route path="videos/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
