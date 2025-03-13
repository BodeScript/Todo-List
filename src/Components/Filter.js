import React from "react";

const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>

    )
}


export default Filter;