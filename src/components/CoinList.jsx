import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../Slice/CoinSlice";
import { handleModal } from "../Slice/modalSlice";
import { setCurrentCompetitor } from "../Slice/competitorSlice";

const CoinList = () => {
  const dispatch = useDispatch();
  const { cons, status, error } = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (status === "loading") return <p className="center">Loading coins...</p>;
  if (status === "failed") return <p className="center">Error: {error}</p>;

  return (
    <div className="container">
      <div className="table-header">
        <span>#</span>
        <span>Coin</span>
        <span>Price</span>
        <span>Market Cap</span>
        <span>24h Volume</span>
        <span>24h %</span>
      </div>

      {cons.map((coin, i) => (
        <div
          key={coin.id}
          className="coin-row"
          onClick={() => {
            dispatch(setCurrentCompetitor(coin));
            dispatch(handleModal());
          }}
        >
          <span>{i + 1}</span>
          <div className="coin-info">
            <img src={coin.image} className="coin-img" alt={coin.name} />
            <div>
              <p className="coin-name">{coin.name}</p>
              <p className="coin-symbol">{coin.symbol}</p>
            </div>
          </div>
          <p>${coin.current_price.toLocaleString()}</p>
          <p>${coin.market_cap.toLocaleString()}</p>
          <p>${coin.total_volume.toLocaleString()}</p>
          <p className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
