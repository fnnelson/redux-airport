import React from 'react';

export function AirlineDisplay({ airlineList }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Airlines with available planes at airport</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {airlineList.map((airline, index) => {
                        return (
                            <td key={index}>
                                {airline}
                            </td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    )
}