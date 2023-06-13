import React from 'react'
import PokemonType from '../PokemonType';


export default function PokemonInfo({ name, base }) {
    
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {
          Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{ base[key]}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

PokemonInfo.prototype = PokemonType

