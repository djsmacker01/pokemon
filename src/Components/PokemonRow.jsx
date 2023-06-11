import React from 'react'

export default function PokemonRow({pokemon, onSelect}) {
  return (
    
      <tr>
        <td>{pokemon.name.english} </td>
        <td>{pokemon.type.join(",")}</td>
      </tr>
    
  );
}
