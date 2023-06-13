import React from "react";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";
import PropTypes from 'prop-types'
export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon.name.english} </td>
      <td>{pokemon.type.join(",")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>
          More Info!
        </Button>
      </td>
    </tr>
  );
}

PokemonRow.prototype = {
  pokemon: PropTypes.arrayOf(PokemonType),  
};


