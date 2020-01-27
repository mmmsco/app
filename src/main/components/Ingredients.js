import React from "react";


export default class Ingredients extends React.Component {

    printline(param) {
        console.log(param);
        return param;
    }

    render() {
        return (
            <div>
                {this.printline(this.props.param1)}
            </div>
        );
    }
}