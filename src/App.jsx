
import AddTask from "./component/AddTask"
import Header from "./component/Header"
import MainComponent from "./component/MainComponent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import EditUpdate from "./component/EditUpdate"
const App = () => {
  return (
    <div className="App" >
      <Router>
        <Header />
        <div className="container-APP" >
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="" element={<EditUpdate/>} />
          </Routes>

        </div>
      </Router>
    </div>
  )
}

export default App
