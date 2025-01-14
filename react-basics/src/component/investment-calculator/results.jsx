import { calculateInvestmentResults, formatter } from "../../utils/investment";

const Results = ({ userInputValue }) => {
    const result = calculateInvestmentResults(userInputValue)
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital </th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((item, i) => {
                        const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest;
                        return (
                            <tr key={i}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Results;