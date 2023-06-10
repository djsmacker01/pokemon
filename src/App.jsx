import { useState } from 'react'
import pokemon from './pokemon.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

        <table width="100%">
          <thead>
            <tr>
              <th>Name </th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.slice(0, 20).map((pokemon) => (
              <tr key={pokemon.id}>
                <td>{pokemon.name.english} </td>
                <td>{pokemon.type.join(',') }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App
