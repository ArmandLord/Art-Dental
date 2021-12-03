import { Navbar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { GlobalStyles } from './GlobalStyles/GlobalStyles'
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

