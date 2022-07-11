import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count-1)}>DEC</button>
      <span>{count}</span>
      <button onClick={() => setCount(count+1)}>INC</button>
    </div>
  );
}

export default App;
