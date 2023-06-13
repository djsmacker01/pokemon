import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({

    id: PropTypes.string.isRequired, 
    name:PropTypes.shape({
     english: PropTypes.string.isRequired,
     japanese: PropTypes.string.isRequired,
     chinese: PropTypes.string.isRequired,
     french: PropTypes.string.isRequired,
     
    }),
    type: PropTypes.arrayOf(PropTypes.string),
    base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp.Attack": PropTypes.number.isRequired,
    "Sp.Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
    
})

// PokemonRow.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.shape({
     
//   }),
//   onSelect: PropTypes.func.isRequired,
// };
// PokemonInfo.PropTypes = {
//   name: PropTypes.shape({
//     english: PropTypes.string.isRequired  ,
//   }),

// }

export default PokemonType;