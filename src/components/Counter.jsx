function Counter({ count, btnName, onClickFunc }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClickFunc}>{btnName}</button>
    </div>
  );
}

export default Counter;
