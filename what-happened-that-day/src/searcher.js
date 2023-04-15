import React from "react";
import axios from "axios";

function Searcher() {
    state={};
    this.state = {
        search: "",
    }

    view() {
        anxios
        .get(
            "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2"
        )
        .then((response) => {
            this.setState({
                search: response.query.search.title,
            })
        })
        .then((response) => {
            this.setState({
                search: response.query.search.title,
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div></div>
    )
}

export default Searcher;

