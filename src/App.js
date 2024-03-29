import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Content from "./components/Content";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import useOnlineStatus from './utils/useOnlineStatus';


function App() {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you're offline, please check your internet connection</h1>
  }
  return (
    <Router>
      <div className="App">
        <Link to='/' />
        <Route path='/' component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
