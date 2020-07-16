import React from "react";

class Currency extends React.Component {
    render() {
        const codes = ["INR", "USD", "GBP", "EUR"];
        return (
            <select onChange={(event) => console.log("changed", event.currentTarget.value)}>
                {codes.map(c => <option key={c}>{c}</option>)}
            </select>
        );
    }
}

export default Currency;
