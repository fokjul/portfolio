import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Projects, UxProject01, UxProject02, UxProject03 } from './pages';
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/uxproject01" element={<UxProject01 />}/>
          <Route path="/projects/uxproject02" element={<UxProject02 />}/>
          <Route path="/projects/uxproject03" element={<UxProject03 />}/>
        </Route>
      </Routes>
    </Router>
  )
}