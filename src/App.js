import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Content from "./components/Content";


function App() {
  return (
    <div className="App">
        <Header />
        <Introduction />
        <Content />
    </div>
  );
}

export default App;
