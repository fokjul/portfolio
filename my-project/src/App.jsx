import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Projects } from './pages';
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
        </Route>
      </Routes>
    </Router>
  )
}