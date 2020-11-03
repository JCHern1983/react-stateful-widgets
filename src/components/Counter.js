import React, {useState} from 'react'; /* STEP 0 */

export default function Counter() {
  /* STEP 1 */
  const [counter ,setCounter] = useState(0)
  const [isEven, setEven] = useState('even')

  const increment = () => {
    setCounter(counter + 1)
    /* STEP 4 */
  };
  const decrement = () => {
    setCounter(counter - 1)
    /* STEP 5 */
  };
  const reset = () => {
    setCounter(counter == '0')
    /* STEP 6 */
  };
  const oddEven = () => {
    (counter % 2 == 1) ? setEven('Even') : setEven('Odd');
  }





  const styleBlue = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color:(counter%2 == 1) ? 'royalblue' : 'crimson',
     /* STEP 2 */
  };


  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='countEven' style={styleBlue}>
        Number {counter} is {isEven} {/* STEP 3 */}
      </div>
      {/* <div id='countOdd' style={styleRed}>
        Number {counter} is Odd {/* STEP 3 */}

      <div>

        <button id='increment' onClick={() => { increment(); oddEven();}}>Increment</button>
        <button id='decrement' onClick={() => { decrement(); oddEven();}}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
} 