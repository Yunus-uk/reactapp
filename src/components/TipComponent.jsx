import React, { useState } from "react";

const TipComponent = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0); // Set default as number
  const [selectedTip, setSelectedTip] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bill = parseFloat(billAmount);
    if (isNaN(bill) || bill <= 0) {
      alert("Please enter a valid bill amount.");
      return;
    }

    const tipPercent = tipPercentage;
    if (isNaN(tipPercent) || tipPercent <= 0 || tipPercent > 100) {
      alert("Please select a valid tip percentage.");
      return;
    }

    // Calculate tip and total amounts
    const tipAmountCalculated = (bill * tipPercent) / 100;
    const totalAmountCalculated = bill + tipAmountCalculated;

    setTipAmount(tipAmountCalculated.toFixed(2)); // Round to 2 decimal places
    setTotalAmount(totalAmountCalculated.toFixed(2)); // Round to 2 decimal places
  };

  const getButtonClass = (value) => {
    return selectedTip === value
      ? "bg-emerald-700 text-white"
      : "bg-emerald-900 text-white";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Centered container for form + results */}
      <div className="flex w-120 h-100 gap-4 p-6 bg-gray-100 rounded-xl">
          {/* Left side: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-2/3">
          {/* Directly using an input for bill amount */}
          <div className="flex flex-col relative">
            <label htmlFor="amount" className="text-sm">Bill Amount</label>
            <span className="translate-y-[2px] top-1/2 leading-none absolute left-2 text-md">£</span>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder=""
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="border rounded-lg p-2 pl-5 text-md"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm mb-4">Select Tip %</h3>
            <div className="grid grid-cols-3 gap-4">
              {[5, 10, 15, 25, 50].map((percent) => (
                <button
                  key={percent}
                  type="button"
                  value={percent}
                  className={getButtonClass(percent.toString())}
                  onClick={() => {
                    setSelectedTip(percent.toString());
                    setTipPercentage(percent);
                  }}>
                  {percent}%
                </button>
              ))}
              <input
              type="text"
              placeholder="Custom%"
              value={tipPercentage || ""}
              onChange={(e) => {
                setSelectedTip(null); // Deselect preset buttons
                setTipPercentage(e.target.value);
              }}
              className="border rounded-2xl p-2 text-center w-19 h-6 appearance-none placeholder:text-sm"
            />
            </div>
            <div>
              <h3 className="text-sm mt-4">Split the bill ?</h3>
              <input
              className="w-full mt-4 p-2 rounded-lg"
              type="number"
              placeholder="Split by ?"
              min="0" 
              />
            </div>
              
            
          </div>

          <div className=" grid grid-cols-2 gap-4">
            <button className="bg-[#0f683a] text-white px-3 py-2 rounded-full font-semibold">
              Calculate
            </button>
            <button
            type="button"
            onClick={() => {
            setBillAmount("");
            setTipPercentage(0);
            setSelectedTip(null);
            setTipAmount(0);
            setTotalAmount(0);
            }}
            className="bg-[#0f683a] text-white px-3 py-2 rounded-full font-semibold">
            Clear
            </button>
          </div>
        </form>

        {/* Display result */}
        <div className="bg-[#4b8290] w-100 h-90 rounded-xl flex flex-col items-center justify-center text-2xl font-bold text-[#e287d3] ml-4">
          <h4 className="ml-4">Tip: £{parseFloat(tipAmount).toFixed(2)}</h4>
          <h4 className="ml-4">Total: £{parseFloat(totalAmount).toFixed(2)}</h4>
        </div>      
      </div>
    </div>  
  );
};

export default TipComponent;



