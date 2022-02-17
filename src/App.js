import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Components/App-Router/AppRouter";
import { Provider } from "react-redux";
import GlobalStore from "./REDUX/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <Provider store={GlobalStore}>
        <AppRouter />
      </Provider>
    </div>
    
  );
}

export default App;
