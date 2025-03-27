import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({search, setSearch}) => (
    <div className="search">
        <h2>
          <MdSearch />
          <span> Pesquisar:</span>
        </h2>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite qual tarefa deseja pesquisar..."
        />
    </div>
);


export default Search;