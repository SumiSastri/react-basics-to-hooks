const CalculateTax = ({ baseAmount, taxPercentCharged }) => {
  return (
    <div>
      <h2>Functional Component (Calculate Tax)</h2>
      <h3>Multiply the amount by the tax and get the total with tax</h3>

      <p>Amount: {baseAmount}</p>
      <p>Tax Percent: {taxPercentCharged}</p>
      <p>Tax Charged: {baseAmount * taxPercentCharged}</p>
      <p>
        Total including Taxes: {baseAmount + baseAmount * taxPercentCharged}
      </p>
    </div>
  );
};

export default CalculateTax;
