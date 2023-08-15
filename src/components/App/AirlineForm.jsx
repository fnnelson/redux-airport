import React from 'react';

export function AirlineForm({handleSubmit, setNewAirline, newAirline}) {
    return <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Airline Name'
            onChange={(event) => setNewAirline(event.target.value)}
            value={newAirline} />
        <button type='submit'>Add Airline</button>
    </form>;
}