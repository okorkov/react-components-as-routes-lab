import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(director => <div className="director"><h3>{director.name}</h3><p>{director.movies.join(', ') + '.'}</p></div>)}
    </div>
  );
}

export default Directors
