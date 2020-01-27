import React from "react";
import Ingredients from "./Ingredients";


export default class ImportRecipe extends React.Component {
    render() {
        return (
            <div>
                <input placeholder="recipe url"></input>
                // form submit a url for cooking recipe
                // get ingredients from dom, past ingredients on this component dom

                <Ingredients param1={1234} />
            </div>
        )
    }
}