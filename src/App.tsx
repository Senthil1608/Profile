import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Contact from './routes/Contact'
import Experience from './routes/Experience'
import Skills from './routes/Skills'
import About from './routes/About'

function App() {

  return (
    <>
     <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    </>
  )
}

export default App
