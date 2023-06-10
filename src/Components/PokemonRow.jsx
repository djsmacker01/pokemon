import React from 'react'

export default function PokemonRow({pokemon}) {
  return (
    
      <tr>
        <td>{pokemon.name.english} </td>
        <td>{pokemon.type.join(",")}</td>
      </tr>
    
  );
}
