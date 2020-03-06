
import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">
            Time for a game of memory!  We'll show you cards and then turn them over. Click to tell us where the matches are!
            </p>
        </div>
    )
};

export default Jumbotron;