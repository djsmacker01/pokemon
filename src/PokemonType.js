import PropTypes from "prop-types";


PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func.isRequired,
};
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