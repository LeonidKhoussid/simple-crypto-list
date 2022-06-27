import * as React from "react";

const Header = React.memo(({ setSearchWord }) => {
  return (
    <div className="cryptoHeader">
      <input
        type="text"
        placeholder="Name of Crypto"
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />
    </div>
  );
});

export default Header;
