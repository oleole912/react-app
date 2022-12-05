import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import List from './components/List/List';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
    </Container>
    </main>

  );
};

export default App;
