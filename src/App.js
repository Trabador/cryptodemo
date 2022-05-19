import "./App.css";
import CurrencyProvider from "./context/CurrencyProvider";
import MainNavigator from "./Navigators/MainNavigator/MainNavigator";

function App() {
  return (
    <div className="App">
      <CurrencyProvider>
        <MainNavigator />
      </CurrencyProvider>
    </div>
  );
}

export default App;
