import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound, Layout } from './pages'
import { GlobalStyles } from './GlobalStyles/GlobalStyles'
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

