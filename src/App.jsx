import "./App.css";
import { useState } from "react";

function App() {
  const [buyingPrice, setBuyingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [output, setOutput] = useState("");
  const [textColor, setTextColor] = useState("#17a2b8");

  function handleBuyingPriceInput(e) {
    setBuyingPrice(Number(e.target.value));
    setOutput("");
  }

  function handleQuantityInput(e) {
    setQuantity(Number(e.target.value));
    setOutput("");
  }

  function handleCurrentPriceInput(e) {
    setCurrentPrice(Number(e.target.value));
    setOutput("");
  }

  function submitForm() {
    setOutput("");
    setTextColor("#17a2b8");
    if (buyingPrice <= 0 || quantity <= 0 || currentPrice <= 0) {
      setTextColor("red");
      setOutput("Invalid Input");
    } else {

      //calculate Profit and loss
      // loss
      if (buyingPrice > currentPrice) {
        let loss = ((buyingPrice - currentPrice) * quantity).toFixed(2);
        let lossPercentage = ((loss / (buyingPrice * quantity)) * 100).toFixed(
          2
        );
        setTextColor("#dc3545");
        setOutput(
          `You have loss of ${loss} and loss Percentage is ${lossPercentage}%. 😢`
        );
      }
      // profit
      else if (buyingPrice < currentPrice) {
        let profit = ((currentPrice - buyingPrice) * quantity).toFixed(2);
        let profitPercentage = (
          (profit / (buyingPrice * quantity)) *
          100
        ).toFixed(2);
        setTextColor("#28a745");

        setOutput(
          `You gain a Profit of ${profit} and profit Percentage is ${profitPercentage}% 🤩`
        );
      }
      // No profit, No loss
      else {
        setTextColor("#17a2b8");
        setOutput(`No profit, No loss 😐`);
      }
    }
  }

  function resetForm() {
    setBuyingPrice("");
    setQuantity("");
    setCurrentPrice("");
    setOutput("");
  }

  return (
    <div className="App">
      <header>
        <h1>Stocks Profit or Loss Calculator</h1>
      </header>

      <main>
        <label>
          Buying Price:
          <input
            type="number"
            placeholder="Enter Cost Price"
            onChange={handleBuyingPriceInput}
            value={buyingPrice}
          />
        </label>
        <label>
          Stocks Quantity:
          <input
            type="number"
            placeholder="Enter Number of Stocks"
            onChange={handleQuantityInput}
            value={quantity}
          />
        </label>
        <label>
          Current Price:
          <input
            type="number"
            placeholder="Enter Current Price"
            onChange={handleCurrentPriceInput}
            value={currentPrice}
          />
        </label>
        <button onClick={submitForm}>Calculate</button>
        <button style={{backgroundColor: "#dc3545", color: "white", borderColor: "#dc3545"}} onClick={resetForm}>
          Reset
        </button>
        <div className="output" style={{ color: textColor }}>
          {output}
        </div>
      </main>
    </div>
  );
}

export default App;
