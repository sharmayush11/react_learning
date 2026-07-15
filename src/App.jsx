import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import User from "./User";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Laptop from "./Laptop";
import Phone from "./Phone";

function App() {
  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User profile for ID : {id} </h2>;
  }
  function NotFound(){
    return <h2> 404 - Page Not Found </h2>
  }

  return (
    <BrowserRouter>
      <h1>React router example</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> | <Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/phone" element={<Phone />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

