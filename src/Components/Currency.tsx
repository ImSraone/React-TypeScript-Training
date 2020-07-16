import React from "react";
interface CurrencyProps {
    currencyChange: (code: string) => void;
}
class Currency extends React.Component<CurrencyProps> {
    render() {
        const codes = ["INR", "USD", "GBP", "EUR"];
        return (
            <select onChange={(event) => this.props.currencyChange(event.currentTarget.value)}>
                {codes.map(c => <option key={c}>{c}</option>)}
            </select>
        );
    }
}

export default Currency;
