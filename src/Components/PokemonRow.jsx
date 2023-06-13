import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon.name.english} </td>
      <td>{pokemon.type.join(",")}</td>
      <td>
        <Button onClick={() => onSelect(pokemon)}>Select!</Button>
      </td>
    </tr>
  );
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func.isRequired,
};
