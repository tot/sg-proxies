import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Home from "./components/home/Home/Home"
import Dashboard from "./components/dashboard/Dashboard/Dashboard"
import Privacy from "./components/legal/Privacy/Privacy"
import Terms from "./components/legal/Terms/Terms"

function App() {
  return (
    <div className="bg-dark-background font-sans">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
