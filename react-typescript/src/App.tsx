import './App.css';

import Counter from "./components/class/Counter"
import CalculateTax from "./components/functional/CalculateTax"

function App() {
  return (
    <div>
      <h1>React, TypeScript & Testing </h1>
      <div>
        <CalculateTax
          baseAmount={2}
          taxPercentCharged={0.5}
        />
        <Counter />
      </div>
    </div>
  );
}

export default App;
