import React from 'react';

export default function House(props) {
    return (
        <div>
            <div>
                <div>
                    Property Name: {props.name}
                </div>
                <div>
                    Address: {props.address}
                </div>
                <div>
                    City: {props.city}
                </div>
                <div>
                    State: {props.state}
                </div>
                <div>
                    ZIP: {props.zip}
                </div>
                <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
            </div>
        </div>
    )
}
