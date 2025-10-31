import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { handleModal } from "../Slice/modalSlice";
import { resetState } from "../Slice/competitorSlice";

// Modal.setAppElement("#root");

const VoteModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { currentCompetitor } = useSelector((state) => state.competitor);

  const closeModal = () => {
    dispatch(handleModal());
    dispatch(resetState());
  };

  if (!currentCompetitor) return null;

  const coin = currentCompetitor;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal coin-modal"
      overlayClassName="overlay"
    >
      {/* Header */}
      <div className="coin-header">
        <div className="coin-name-section">
          <img src={coin.image} alt={coin.name} className="coin-logo" />
          <div>
            <h2>{coin.name} <span>{coin.symbol.toUpperCase()}</span></h2>
            <p>Rank #{coin.market_cap_rank}</p>
          </div>
        </div>
        <button className="close-btn" onClick={closeModal}>×</button>
      </div>

      {/* Price Info */}
      <div className="coin-price-section">
        <h1>${coin.current_price.toLocaleString()}</h1>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}% (24h)
        </p>
        <p className="btc-eth">
          {(coin.current_price / 68000).toFixed(8)} BTC •{" "}
          {(coin.current_price / 3500).toFixed(8)} ETH
        </p>
      </div>

      {/* 24h Range Bar */}
      <div className="range-section">
        <div className="range-bar">
          <div className="bar-fill" style={{ width: "50%" }}></div>
        </div>
        <div className="range-labels">
          <span>${(coin.current_price * 0.98).toFixed(2)}</span>
          <span>24h Range</span>
          <span>${(coin.current_price * 1.02).toFixed(2)}</span>
        </div>
      </div>

      {/* Market Data */}
      <div className="coin-stats">
        <div><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</div>
        <div><strong>Fully Diluted Valuation:</strong> ${coin.market_cap.toLocaleString()}</div>
        <div><strong>24h Trading Volume:</strong> ${coin.total_volume.toLocaleString()}</div>
        <div><strong>Circulating Supply:</strong> {coin.circulating_supply?.toLocaleString()}</div>
        <div><strong>Total Supply:</strong> {coin.total_supply?.toLocaleString()}</div>
        <div><strong>Max Supply:</strong> {coin.max_supply?.toLocaleString() || "∞"}</div>
      </div>

      {/* Action Buttons */}
      <div className="coin-actions">
        <button className="btn buy">Buy / Sell</button>
        <button className="btn wallet">Wallet</button>
        <button className="btn earn">Earn Crypto</button>
      </div>
    </Modal>
  );
};

export default VoteModal;
