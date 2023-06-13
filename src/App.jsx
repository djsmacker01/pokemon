import { useState, useEffect } from "react";
// import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
import "./App.css";
import PokemonRow from "./Components/PokemonRow";
import PokemonInfo from "./Components/PokemonInfo";
// import Button from "@mui/material/Button";

// const PokemonRow = ({ pokemon }) => {
//   <tr>
//     <td>{pokemon.name.english} </td>
//     <td>{pokemon.type.join(",")}</td>
//   </tr>
// };

PokemonRow.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func,
};


function App() {

  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5173/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70% 30%",
            gridColumngap: "1rem",
          }}>
          <div>
            <input
              type="text"
              placeholder="Search Pokemon"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <table width="100%">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {pokemon
                  .filter((pokemon) =>
                    pokemon.name.english
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow
                      pokemon={pokemon}
                      key={pokemon.id}
                      onSelect={(pokemon)=> setSelectedItem(pokemon)}
                    />
                    // <tr key={pokemon.id}>
                    //   <td>{pokemon.name.english} </td>
                    //   <td>{pokemon.type.join(",")}</td>
                    // </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {selectedItem && <PokemonInfo {...selectedItem} /> }
        </div>
      </div>
    </>
  );
}

export default App;
