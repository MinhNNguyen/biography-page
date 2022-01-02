import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Landing from './components/Landing'
import Posts from './components/Posts'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Landing />} />
          <Route
            exact
            path="/posts"
            element={<Posts />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
