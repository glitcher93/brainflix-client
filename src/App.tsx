import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import NotFoundMain from './components/NotFoundMain'
import PageHeader from './components/PageHeader'
import UploadPage from './pages/UploadPage'
import VideoPage from './pages/VideoPage'

function App() {
  
  return (
    <BrowserRouter>
    <PageHeader />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="videos/:id" element={<VideoPage />} />
        <Route path='*' element={<NotFoundMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
