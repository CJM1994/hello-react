import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  const { reset } = props;

  return (
    <button onClick={reset}>{props.text}</button>
  );

};

const Application = () => {

  const [value, setValue] = useState('');

  const reset = () => {
    setValue('');
  };

  return (
    <main>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Type your name...'
      />
      <Button text={'Reset'} reset={reset} />
      <h1>Hello {value}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
