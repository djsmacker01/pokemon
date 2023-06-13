import { useState, useEffect } from "react";
// import pokemon from "./pokemon.json";
// import PropTypes from "prop-types";

import "./App.css";
import PokemonRow from "./Components/PokemonRow";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonType from "./PokemonType";
import styled from "@emotion/styled";
// import Button from "@mui/material/Button";

const Titled = styled.h1`
  text-align: center;
`;

const ColumnsLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: "1rem";
  // border: 1px solid blue;
`;

const Container = styled.div`
    margin: auto;
    width: 800px;
    padding-top: 1rem;

`;

const Input = styled.input`
  font-size: large;
  width: 130%;
  padding: 0.2rem;
  border-radius: 0.5;
`;

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
      <Container>
        <Titled>Pokemon Search</Titled>

        <ColumnsLayout>
          <div>
            <Input
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
                      onSelect={(pokemon) => setSelectedItem(pokemon)}
                    />
                    // <tr key={pokemon.id}>
                    //   <td>{pokemon.name.english} </td>
                    //   <td>{pokemon.type.join(",")}</td>
                    // </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {selectedItem && <PokemonInfo {...selectedItem} />}
        </ColumnsLayout>
      </Container>
    </>
  );
}

export default App;
