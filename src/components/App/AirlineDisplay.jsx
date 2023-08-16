import React from 'react';

export function AirlineDisplay({ airlineList, dispatch, count }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Airlines with available planes at airport</td>
                </tr>
            </thead>
            <tbody>
                {airlineList.map((airline, index) => {
                    return (
                        <tr key={index}>
                            <td>{airline}</td>
                            <td>{count}</td>
                            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}