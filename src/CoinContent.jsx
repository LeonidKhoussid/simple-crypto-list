import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import Coin from "./components/Coin";

const CoinContent = React.memo(({ listOfCoins }) => {
  const { search, pathname } = useLocation();

  React.useEffect(() => {
    console.log("search", search);
    console.log("pathname", pathname);
    console.log("listOfCoins", listOfCoins);
  }, []);

  // const coin = listOfCoins.find(({ Coin }) => {
  //   return {};
  // });
  // console.log(coin);
  const { coinName } = useParams();
  const coin = listOfCoins.find((coin) => coin.name === coinName);

  return <div></div>;
});

export default CoinContent;
