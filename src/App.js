import React, { memo, useCallback, useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [dir, setDir] = useState([
    { name: 'Lily', details: '1 huba  dew' },
    { name: 'Ben', details: 'Be yi ou' },
    { name: 'Vic', details: 'poll the qa' },
    { name: 'Chuck', details: 'Feel tier' },
    { name: 'Will', details: '5 Hi de Ne' },
  ]);
  const [activeIdx, setActiveIdx] = useState(-1);

  const delHandeler = useCallback(
    (idx) => {
      dir.splice(idx, 1);
      setDir([...dir]);
      setActiveIdx(-1);
    },
    [setDir]
  );

  return (
    <div>
      <ul>
        {dir.map((elem, i) => {
          return (
            <li key={elem.name}>
              <span
                onClick={() => {
                  setActiveIdx(i);
                }}
                style={
                  !(i === activeIdx) ? { color: `black` } : { color: `red` }
                }
              >
                {elem.name}
              </span>{' '}
              <button onClick={() => delHandeler(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div>
        {dir.length
          ? `details: ${activeIdx === -1 ? -1 : dir[activeIdx].details}`
          : ``}
      </div>
    </div>
  );
}
