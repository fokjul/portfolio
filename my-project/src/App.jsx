import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Projects } from './pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  )
}