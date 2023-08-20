import React, { useState } from "react";
import axios from "axios";

function Searcher() {
    const [search, setSearch] = useState("");

    function view() {
        axios
        .get(
            "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2"
        )
        .then((response) => {
            setSearch(response.data.query.search.title);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div></div>
    );
}

export default Searcher;
