import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Chatroom from "./pages/Chatroom"
import {Routes, Route} from "react-router-dom"
import  {PrivateRoute} from "./routes/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"
export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/chat" element={
          <PrivateRoute>
            <Chatroom />
          </PrivateRoute>
        }/>

      </Routes>
    </AuthProvider>
  )
}