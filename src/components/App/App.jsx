import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  //local state stuff
  const [newAirline, setNewAirline] = useState('');

  //redux reducer stuff
  const airlineList = useSelector(store => store.airlineList)

  // in order to use dispatch method.  use like a walkie talkie
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside handleSubmit()", newAirline)
    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline
    })
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Airline Name'
          onChange={(event) => setNewAirline(event.target.value)}
          value={newAirline} />
        <button type='submit'>Add Airline</button>
      </form>
      <table>
        {/* Airlines should be listed here */}
        <thead>
          <th>Airlines with available planes at airport</th>
        </thead>
        <tbody>
          {airlineList.map((airline, index) => {
            return <tr key={index}>
              {airline}
            </tr>
          })}
          <tr>
            Hello
          </tr>
          <tr>
            Hi
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
