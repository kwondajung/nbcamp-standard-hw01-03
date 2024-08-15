import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const title = 'Counter App';
  const year = '2024';

  return (
    <div>
      <Header title={title} />
      <p>Welcome to my website!</p>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>{count > 10 ? 'High count!' : 'Keep counting...'}</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
