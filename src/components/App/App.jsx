import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AirlineForm } from './AirlineForm';
import { AirlineDisplay } from './AirlineDisplay';

function App() {

  //local state stuff
  const [newAirline, setNewAirline] = useState('');

  //redux reducer stuff
  const airlineList = useSelector(store => store.airlineList)
  const count = useSelector(store => store.count)

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
      <AirlineForm handleSubmit={handleSubmit} setNewAirline={setNewAirline} newAirline={newAirline} />
      <AirlineDisplay airlineList={airlineList} dispatch={dispatch} count={count}/>
    </div>
  );
}

export default App;


