import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Chatroom from "./pages/Chatroom"
import {Routes, Route} from "react-router-dom"
import  {PrivateRoute} from "./routes/PrivateRoute"
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/chat" element={
          <PrivateRoute>
            <Chatroom />
          </PrivateRoute>
        }/>

      </Routes>
    </div>
  )
}