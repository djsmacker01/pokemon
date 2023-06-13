import React from "react";
import PropTypes from "prop-types";

export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon.name.english} </td>
      <td>{pokemon.type.join(",")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select!</button>
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
