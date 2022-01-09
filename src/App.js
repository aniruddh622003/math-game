import { Alert } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import QuestionProvider from "./contextProviders/QuestionContext.js";

function App() {
  return (
    <div className="App">
      <QuestionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </div>
  );
}

export default App;
