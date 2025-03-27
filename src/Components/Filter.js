import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";

const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>
                    <MdArrowUpward />
                </button>
                <button onClick={() => setSort("Desc")}>
                    <MdArrowDownward />
                </button>
            </div>
        </div>

    )
}

export default Filter;