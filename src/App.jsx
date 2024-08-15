import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Welcome to my website!</p>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>{count > 10 ? 'High count!' : 'Keep counting...'}</p>
      </div>

      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
