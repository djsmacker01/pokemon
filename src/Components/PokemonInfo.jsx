import React from 'react'
import PropTypes from 'prop-types'


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


PokemonInfo.PropTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired  ,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp.Attack": PropTypes.number.isRequired,
    "Sp.Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}