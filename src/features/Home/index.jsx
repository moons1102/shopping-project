import Footer from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import Banner from "./Banner";
import GameList from "./GameList";
import Guide from "./Guide";

export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <GameList />
      <Guide />
      <Footer />
    </div>
  );
};

export default Home;
