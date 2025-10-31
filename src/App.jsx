import React from "react";
import Header from "./components/Header";
import HeroBoxes from "./components/HeroBoxes";
import CoinList from "./components/CoinList";
import VoteModal from "./components/voteModal";


function App() {
  return (
    <div>
      <Header />
      <HeroBoxes />
      <CoinList />
      <VoteModal />
    </div>
  );
}

export default App;
