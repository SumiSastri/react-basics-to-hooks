// Type declaration and annotation in the param of the functional component
//  not ideal but clear - explicity declare type then annotate it see other components for refactors
const CalculateTax = (props: {
    baseAmount: number;
    taxPercentCharged: number;
}) => {
    console.log(props);
    return (
        <div>
            <h2>Functional Component (Calculate Tax)</h2>
            <h3>Multiply the amount by the tax and get the total with tax</h3>

            <p>Amount: {props.baseAmount}</p>
            <p>Tax Percent: {props.taxPercentCharged}</p>
            <p>Tax Charged: {props.baseAmount * props.taxPercentCharged}</p>
            <p>
                Total including Taxes:{" "}
                {props.baseAmount + props.baseAmount * props.taxPercentCharged}
            </p>
        </div>
    );
};

export default CalculateTax;
