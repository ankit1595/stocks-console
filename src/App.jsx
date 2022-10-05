import "./App.css";
import { useState } from "react";

function App() {
  const [buyingPrice, setBuyingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [output, setOutput] = useState("");
  const [textColor, setTextColor] = useState("black");

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
    if (buyingPrice <= 0 || quantity <= 0 || currentPrice <= 0) {
      setOutput("Invalid Input");
    } else {
      console.log(
        "buying price, current price: ",
        typeof buyingPrice,
        typeof currentPrice,
        buyingPrice > currentPrice
      );
      //calculate Profit and loss
      // loss
      if (buyingPrice > currentPrice) {
        console.log('loss')
        let loss = ((buyingPrice - currentPrice) * quantity).toFixed(2);
        let lossPercentage = ((loss / (buyingPrice * quantity)) * 100).toFixed(2);
        setTextColor("red")
        setOutput(
          `You have loss of ${loss} and loss Percentage is ${lossPercentage}% .`
        );
      }
      // profit
      else if (buyingPrice < currentPrice) {
        let profit = ((currentPrice - buyingPrice) * quantity).toFixed(2);
        let profitPercentage = ((profit / (buyingPrice * quantity)) * 100).toFixed(2);
        setTextColor("green");

        setOutput(
          `You gain a Profit of ${profit} and profit Percentage is ${profitPercentage}%`
        );
      }
      // No profit, No loss
      else {
        setTextColor("black");
        setOutput(`No profit, No loss`);
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
      <h1>Stocks Console</h1>
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
        Stocks Quantity
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
      <button onClick={resetForm}>Reset</button>
      <div style={{color: textColor}}>{output}</div>
    </div>
  );
}

export default App;
