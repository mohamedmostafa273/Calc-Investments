function UserInput({ inputs, onNumberChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investments</label>
          <input
            type="number"
            required
            value={inputs.initialInvestment}
            onChange={(e) =>
              onNumberChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Anuuel Investments</label>
          <input
            type="number"
            required
            value={inputs.annualInvestment}
            onChange={(e) => onNumberChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputs.expectedReturn}
            onChange={(e) => onNumberChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputs.duration}
            onChange={(e) => onNumberChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
