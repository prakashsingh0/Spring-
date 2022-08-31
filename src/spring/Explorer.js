import React from 'react'
import Explorers from './Explorers';
import './epr.css'

const Explorer = (props) => {
  return (
    <div>
      Explorer
      <div className='containerflex d-flex ' id='exp'>
        {props.explorer.map((explorer) => {
          return (
            <Explorers user={explorer}  />
          );
        })}
      </div>
    </div>
  );
}

export default Explorer
