import * as React from "react";
import Coin from "./components/Coin";

const Coins = React.memo(({ searchWord, listOfCoins }) => {
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="cryptoDisplay">
      {filteredCoins.map(({ name, icon, price, symbol }) => {
        return (
          <Coin
            key={`coin-${name}`}
            name={name}
            icon={icon}
            price={price}
            symbol={symbol}
          />
        );
      })}
    </div>
  );
});

export default Coins;
