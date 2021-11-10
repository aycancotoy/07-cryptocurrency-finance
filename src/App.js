import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
