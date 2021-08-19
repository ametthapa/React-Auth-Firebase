import "./App.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      classNamr="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
}

export default App;
