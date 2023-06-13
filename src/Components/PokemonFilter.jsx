import React from 'react'
import styled from "@emotion/styled";


const Input = styled.input`
  font-size: large;
  width: 130%;
  padding: 0.2rem;
  border-radius: 0.5;
`;

export default function PokemonFilter({filter, setFilter}) {

    return (
      <div>
        <Input
          type="text"
          placeholder="Search Pokemon"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    );
}
