import './App.css';

import Counter from "./components/class/Counter"
import CalculateTax from "./components/functional/CalculateTax"
import NavBar from "./components/class/NavBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <CalculateTax
        baseAmount={2}
        taxPercentCharged={0.5}
      />
      <Counter />
    </div>
  );
}

export default App;
