import { createContext } from "react";
import InputGroup from "./inputGroup";
import { useContext, useState } from "react";

const MortgageContext = createContext({
  monthlyPayment: 0,
  setMonthlyPayment: (monthlyPayment) => {},
});

export function MortgageForm() {
  const {setMonthlyPayment} = useContext(MortgageContext)
  function handleSubmit(e) {
    e.preventDefault(e);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const { amount, term, interest } = data;

    const monthlyInterest = interest / 100 / 12;

    const months = term * 12;

    setMonthlyPayment(
      (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months))
    );

    //const totalPayment = monthlyPayment * months;

    //const totalInterest = totalPayment - amount;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-l-xl">
      <InputGroup
        type="text"
        label="Mortgage Amount"
        placeholder="Amoount in GBP"
        name="amount"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputGroup
          type="text"
          label="Mortgage Term"
          placeholder="1 year"
          name="term"
        />
        <InputGroup
          type="text"
          label="Interest Rate"
          placeholder="5%"
          name="interest"
        />
      </div>

      <button className="bg-[#DADA33] px-3 py-2 rounded-full font-semibold">
        Calculate
      </button>
    </form>
  );
}

export function MortgageResult() {
  const { monthlyPayment } = useContext(MortgageContext);
  return (
    <div className="bg-[#4b8290] w-full h-full rounded-bl-4xl rounded-r-xl flex items-center justify-center text-3xl font-bold text-[#e287d3]">
      {parseFloat(monthlyPayment).toFixed(2)}
    </div>
  );
}

export default function MortgageComponent() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  return (
    <MortgageContext.Provider value={{ monthlyPayment, setMonthlyPayment }}>
      <div className="grid grid-cols-2 items-center max-w-2xl mx-auto">
        <MortgageForm />
        <MortgageResult />
      </div>
    </MortgageContext.Provider>
  )
}

MortgageComponent.Form = MortgageForm;
MortgageComponent.Result = MortgageResult;
