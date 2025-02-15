import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import {
  Routes,
  Route
} from "react-router-dom";

import ReviewAnswer from './pages/Review/ReviewAnswer';

function App() {

  return (
    <>
      <QuizState>
        <div className="App">
          <NavBar />
          <Routes>
          <Route path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/review" element={<ReviewAnswer />} />
          </Routes>
        </div>
      </QuizState>
    </>
  );
}

export default App;
