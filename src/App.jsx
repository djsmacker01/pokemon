import { useState } from "react";
import pokemon from "./pokemon.json";
// import propType from "prop-types";
import "./App.css";
import PokemonRow from "./Components/PokemonRow";

// const PokemonRow = ({ pokemon }) => {
//   <tr>
//     <td>{pokemon.name.english} </td>
//     <td>{pokemon.type.join(",")}</td>
//   </tr>
// };

// PokemonRow.propType = {
//   pokemon: propType.shape({
//     name:  propType.shape({
//       english: propType.string,
//     }),
//     type: propType.arrayOf(propType.string)
//   })
// }

function App() {
  const [filter, setFilter] = useState('');

  return (
    <>
      <div
        style={{
          margin: "auto",
          width: 800,
          paddingTop: "1rem",
          // border: '1px solid'
        }}>
        <h1 className="title">Pokemon Search</h1>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        />

        <table width="100%">
          <thead>
            <tr>
              <th>Name </th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.slice(0, 20).map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
                // <tr key={pokemon.id}>
                //   <td>{pokemon.name.english} </td>
                //   <td>{pokemon.type.join(",")}</td>
                // </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
