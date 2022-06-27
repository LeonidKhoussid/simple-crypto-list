import "./App.css";
import * as React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Coins from "./Coins";
import CoinContent from "./CoinContent";

function App() {
  const [searchWord, setSearchWord] = React.useState("");
  const [listOfCoins, setListOfCoins] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        setListOfCoins(response.data.coins);
      });
  }, []);

  return (
    <>
      <Header setSearchWord={setSearchWord} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/coins/:coinName"
            element={<CoinContent listOfCoins={listOfCoins} />}
          />
          <Route
            path="/"
            element={
              <Coins searchWord={searchWord} listOfCoins={listOfCoins} />
            }
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
