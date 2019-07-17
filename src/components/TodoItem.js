import React, { useContext } from 'react'
import Context from './Context';

export default function TodoItem({ isCompleted, id, text }) {
    const dispatch = useContext(Context);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10, maxWidth: '300px' }}>
            <input type="checkbox" checked={isCompleted} onChange={() => dispatch({ type: "COMPLETED", payload: { id } })} />
            <input type="text" value={text} onChange={(e) => dispatch({ type: "TEXT_CHANGED", payload: { text: e.target.value, id } })} />
            <button onClick={() => dispatch({ type: "DELETE", payload: { id } })}>delete</button>
        </div>
    )
}
