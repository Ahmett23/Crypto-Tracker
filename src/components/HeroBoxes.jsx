
import React, { useEffect, useState } from "react";

export default function HeroBoxes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/global");
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="center">Loading global data...</div>;

  const boxes = [
    { title: "Total Market Cap", value: `$${data.total_market_cap.usd.toLocaleString()}` },
    { title: "24h Volume", value: `$${data.total_volume.usd.toLocaleString()}` },
    { title: "BTC Dominance", value: `${data.market_cap_percentage.btc.toFixed(2)}%` },
    { title: "ETH Dominance", value: `${data.market_cap_percentage.eth.toFixed(2)}%` },
    { title: "Active Cryptos", value: data.active_cryptocurrencies },
  ];

  return (
    <section className="hero-boxes">
      <div className="container">
        <div className="grid">
          {boxes.map((box, idx) => (
            <div key={idx} className="box">
              <h3>{box.title}</h3>
              <p>{box.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
