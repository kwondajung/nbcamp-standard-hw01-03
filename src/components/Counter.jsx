function Counter({ onClickFunc, btnName }) {
  return <button onClick={onClickFunc}>{btnName}</button>;
}

export default Counter;
