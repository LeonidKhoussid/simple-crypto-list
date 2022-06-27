import React from "react";
import { useVisibilityHook } from "react-observer-api";
import { useNavigate } from "react-router-dom";

function Coin({ name, icon, price, symbol }) {
  const navigate = useNavigate();
  const { setElement, isVisible } = useVisibilityHook({
    threshold: 0.5,
    rootMargin: "200px",
    always: false,
  });

  React.useEffect(() => {
    if (isVisible) {
      // ...Logics/API call can trigger by watching isVisible property
    }
  }, [isVisible]);

  const handleClick = React.useCallback(() => {
    navigate(`/coins/${name}`);
  }, [name]);

  return (
    <div className="coin" ref={setElement} onClick={handleClick}>
      {isVisible && (
        <>
          <h1> Name: {name}</h1>
          <img src={icon} />
          <h3> Price: {price}</h3>
          <h3> Symbol: {symbol}</h3>
        </>
      )}
    </div>
  );
}

export default Coin;
