import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from './components/Counter';
import Status from './components/Status';

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
      <Content />

      <Counter count={count} onClickFunc={increment} btnName="increment" />

      <Status count={count} />

      <Footer year={year} />
    </div>
  );
}

export default App;
