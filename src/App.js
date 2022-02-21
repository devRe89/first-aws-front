import Header from './modules/shared/components/Header';
import List from './modules/products/components/List';
import Create from './modules/products/components/Create';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route exact path="/nuevo-producto" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
