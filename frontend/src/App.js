import {
  BrowserRouter,
  Route,
  Routes
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
          path="/profile"
          component={Landing} />
          <Route
          exact
          path="/posts"
          component={Posts} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
