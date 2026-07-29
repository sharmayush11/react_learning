import NavBar from "./auth-example/Navbar"
import { AuthProvider } from "./auth-example/AuthContext"

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar/>
      </AuthProvider>
    </>
  )
}

export default App