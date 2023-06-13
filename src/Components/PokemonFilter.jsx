import React from 'react'

export default function PokemonFilter({filter, setFilter}) {

    return (
      <div>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    );
}
