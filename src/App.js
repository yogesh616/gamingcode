import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import GamesBar from "./Components/GamesBar/GamesBar";
import MainContent from "./Components/MainContent/MainContent";
import TermsAndConditions from "./Components/Conditions/TermsAndConditions";
import ResponsibleGaming from "./Components/Conditions/ResponsibleGaming";
import Footer from "./Components/Footer/Footer";
import LoginContainer from "./Components/LoginContainer"; // Import the login component
import ContextDemo from "./ContextDemo/ContextDemo";

// game 


import TeenPattiC from './Routes/TeenPattiC.jsx'
import BollywoodCasino2 from './Routes/BollywoodCasino2.jsx'

//error
import UniqueRoullete from './Routes/UniqueRoullete.jsx'
import MiniSuperOver from './Routes/MiniSuperOver.jsx'
import Goal from './Routes/Goal.jsx'
//error
import AndarBahar150Cards from './Routes/AndarBahar150Cards.jsx'
import Lucky15 from './Routes/Lucky15.jsx'
import SuperOver2 from './Routes/SuperOver2.jsx'
import QueenTopOpenTeenPatti from './Routes/QueenTopOpenTeenPatti.jsx'
import JackTopOpenTeenPatti from './Routes/JackTopOpenTeenPatti.jsx'
import SicBo2 from './Routes/SicBo2.jsx'
import InstantTeenPatti3_0 from './Routes/InstantTeenPatti3_0.jsx'
import SicBo from './Routes/SicBo.jsx'
import BallByBall from './Routes/BallByBall.jsx'
import InstantTeenPatti2_0 from './Routes/InstantTeenPatti2_0.jsx'
import TeenPatti1Day from './Routes/TeenPatti1Day.jsx'
import TeenPatti20_20 from './Routes/TeenPatti20_20.jsx'

import TeenPattiTest from './Routes/TeenPattiTest.jsx'
import TeenPattiOpen from './Routes/TeenPattiOpen.jsx'
import Poker1Day from './Routes/Poker1Day.jsx'
import Poker20_20 from './Routes/Poker20_20.jsx'

import Poker6Players from './Routes/Poker6Players.jsx'
import Baccarat from './Routes/Baccarat.jsx'
import Baccarat2 from './Routes/Baccarat2.jsx'
import DragonTiger20_20 from './Routes/DragonTiger20_20.jsx'
import DragonTiger1day from './Routes/DragonTiger1day.jsx'
import DTL20_20 from './Routes/DTL20_20.jsx'
import DragonTiger2_20_20 from './Routes/DragonTiger2_20_20.jsx'
import Cards32_A from './Routes/Cards32_A.jsx'
import Cards32_B from './Routes/Cards32_B.jsx'
//  error
import AndarBahar from './Routes/AndarBahar.jsx'
import AndarBahar2 from './Routes/AndarBahar2.jsx'
import Lucky7_A from './Routes/Lucky7_A.jsx'
import Lucky7_B from './Routes/Lucky7_B.jsx'
import Cards3_judgement from './Routes/Cards3_judgement.jsx'
import CasinoWar from './Routes/CasinoWar.jsx'
import WorliMatka from './Routes/WorliMatka.jsx'
import InstantWorli from './Routes/InstantWorli.jsx'
import AmarAkbarAnthony from './Routes/AmarAkbarAnthony.jsx'
import BollywoodCasino from './Routes/BollywoodCasino.jsx'
import Lottery from './Routes/Lottery.jsx'
import FiveFiveCricket from './Routes/FiveFiveCricket.jsx'
import CricketMatch20_20 from './Routes/CricketMatch20_20.jsx'
import CasinoMeter from './Routes/CasinoMeter.jsx'
import Teenpatti2_0 from './Routes/Teenpatti2_0.jsx'
import Queen from './Routes/Queen.jsx'
import Race_20 from './Routes/Race_20.jsx'
import Lucky7C from './Routes/Lucky7C.jsx'
import SuperOver from './Routes/SuperOver.jsx'
import TheTrap from './Routes/TheTrap.jsx'
import CardsTeenpatti2 from './Routes/CardsTeenpatti2.jsx'
import CardTeenpatti29 from './Routes/CardTeenpatti29.jsx'
import MuflisTeenpatti from './Routes/MuflisTeenpatti.jsx'
import RaceTo17 from './Routes/RaceTo17.jsx'
import Teenpatti20_20B from './Routes/Teenpatti20_20B.jsx'
import Trio from './Routes/Trio.jsx'
import NoteNumber from './Routes/NoteNumber.jsx'
import KBC from './Routes/KBC.jsx'
import Card20_20_1 from './Routes/Card20_20_1.jsx'
import CardOneDay_1 from './Routes/CardOneDay_1.jsx'

// Roulette will be added
import Roulette from './Routes/Roulette.jsx'

import AndarBahar50_Cards from './Routes/AndarBahar50_Cards.jsx'
import AmarAkbarAnthony2 from './Routes/AmarAkbarAnthony2.jsx'
import RaceTo2nd from './Routes/RaceTo2nd.jsx'
import InstantTeenpatti from './Routes/InstantTeenpatti.jsx'
import DusKaDum from './Routes/DusKaDum.jsx'
import CardMeter1 from './Routes/CardMeter1.jsx'


//cricket inner games 
import Twenty20_Big_Bash from './CricketInnerGames/Twenty20_Big_bash.jsx'
import PunjabKingsXIvMumbaiIndiansXI from './CricketInnerGames/PunjabKingsXIvMumbaiIndiansXI.jsx'



const App = () => {
  const [selectedGame, setSelectedGame] = useState("HOME");
  const [selectedLeftItem, setSelectedLeftItem] = useState(null);

  const handleGameChange = (game) => {
    setSelectedGame(game);
    setSelectedLeftItem(null);
  };

  const handleLeftItemClick = (item) => {
    setSelectedLeftItem(item);
  };

  return (
    <ContextDemo >
      <>
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<LoginContainer />} />

        {/* Main layout */}
        <Route
          path="/home"
          element={
            <MainLayout
              onGameChange={handleGameChange}
              onLeftItemClick={handleLeftItemClick}
              selectedGame={selectedGame}
              selectedLeftItem={selectedLeftItem}
            />
          }
        />
      <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/responsible-gaming"
          element={<ResponsibleGaming />}
        />



 { /* Game Routes */}

 <Route path="/TeenPattiC" element={<TeenPattiC />} />
      <Route path="/BollywoodCasino2" element={<BollywoodCasino2 />} />
      <Route path="/UniqueRoullete" element={<UniqueRoullete />} />
      <Route path="/MiniSuperOver" element={<MiniSuperOver />} />
      <Route path="/Goal" element={<Goal />} />
      <Route path="/AndarBahar150Cards" element={<AndarBahar150Cards />} />
      <Route path="/Lucky15" element={<Lucky15 />} />
      <Route path="/SuperOver2" element={<SuperOver2 />} />
      <Route path="/QueenTopOpenTeenPatti" element={<QueenTopOpenTeenPatti />} />
      <Route path="/JackTopOpenTeenPatti" element={<JackTopOpenTeenPatti />} />
      {/* Bleach Roullete have same games like Unique Roullete */}
      <Route path="/SicBo2" element={<SicBo2 />} />
      {/* Golden Roullete have same games like Unique Roullete */}
      <Route path="/InstantTeenPatti3_0" element={<InstantTeenPatti3_0 />} />
      <Route path="/SicBo" element={<SicBo />} />
      <Route path="/BallByBall" element={<BallByBall />} />
      <Route path="/InstantTeenPatti2_0" element={<InstantTeenPatti2_0 />} />
      {/* Roullete BL have same games like Unique Roullete */}
      <Route path="/TeenPatti1Day" element={<TeenPatti1Day />} />
      <Route path="/TeenPatti20_20" element={<TeenPatti20_20 />} />


      <Route path="/TeenPattiTest" element={<TeenPattiTest />} />
      <Route path="/TeenPattiOpen" element={<TeenPattiOpen />} />
      <Route path="/Poker1Day" element={<Poker1Day />} />
      <Route path="/Poker20_20" element={<Poker20_20 />} />


      <Route path="/Poker6Players" element={<Poker6Players />} />
      <Route path="/Baccarat" element={<Baccarat />} />
      <Route path="/Baccarat2" element={<Baccarat2 />} />
      <Route path="/DragonTiger20_20" element={<DragonTiger20_20 />} />
      <Route path="/DragonTiger1day" element={<DragonTiger1day />} />
      <Route path="/DTL20_20" element={<DTL20_20 />} />  
      <Route path="/DragonTiger2_20_20" element={<DragonTiger2_20_20 />} />
      <Route path="/Cards32_A" element={<Cards32_A />} />
      <Route path="/Cards32_B" element={<Cards32_B />} />
      <Route path="/AndarBahar" element={<AndarBahar />} />
      <Route path="/AndarBahar2" element={<AndarBahar2 />} />
      <Route path="/Lucky7_A" element={<Lucky7_A />} />
      <Route path="/Lucky7_B" element={<Lucky7_B />} />
      <Route path="/Cards3_judgement" element={<Cards3_judgement />} />
      <Route path="/CasinoWar" element={<CasinoWar />} />
      <Route path="/WorliMatka" element={<WorliMatka />} />
      <Route path="/InstantWorli" element={<InstantWorli />} />
      <Route path="/AmarAkbarAnthony" element={<AmarAkbarAnthony />} />
      <Route path="/BollywoodCasino" element={<BollywoodCasino />} />
      <Route path="/Lottery" element={<Lottery />} />
      <Route path="/FiveFiveCricket" element={<FiveFiveCricket />} />
      <Route path="/CricketMatch20_20" element={<CricketMatch20_20 />} />
      <Route path="/CasinoMeter" element={<CasinoMeter />} />
      <Route path="/Teenpatti2_0" element={<Teenpatti2_0 />} />
      <Route path="/Queen" element={<Queen />} />
      <Route path="/Race_20" element={<Race_20 />} />
      <Route path="/Lucky7C" element={<Lucky7C />} />
      <Route path="/SuperOver" element={<SuperOver />} />
      <Route path="/TheTrap" element={<TheTrap />} />
      <Route path="/CardsTeenpatti2" element={<CardsTeenpatti2 />} />
      <Route path="/CardTeenpatti29" element={<CardTeenpatti29 />} />
      <Route path="/MuflisTeenpatti" element={<MuflisTeenpatti />} />
      <Route path="/RaceTo17" element={<RaceTo17 />} />
      <Route path="/Teenpatti20_20B" element={<Teenpatti20_20B />} />
      <Route path="/Trio" element={<Trio />} />
      <Route path="/NoteNumber" element={<NoteNumber />} />
      <Route path="/KBC" element={<KBC />} />
      <Route path="/Card20_20_1" element={<Card20_20_1 />} />
      <Route path="/CardOneDay_1" element={<CardOneDay_1 />} />
      <Route path="/Roulette" element={<Roulette />} />
      <Route path="/AndarBahar50_Cards" element={<AndarBahar50_Cards />} />
      <Route path="/AmarAkbarAnthony2" element={<AmarAkbarAnthony2 />} />
      <Route path="/RaceTo2nd" element={<RaceTo2nd />} />
      <Route path="/InstantTeenpatti" element={<InstantTeenpatti />} />
      <Route path="/DusKaDum" element={<DusKaDum />} />
      <Route path="/CardMeter1" element={<CardMeter1 />} />
     
    

    { /* cricket inner games routes */}

    <Route path="/Twenty20_Big_Bash" element={<Twenty20_Big_Bash />} />
    <Route path="/PunjabKingsXIvMumbaiIndiansXI" element={<PunjabKingsXIvMumbaiIndiansXI />} />
    
  


      </Routes>
      
    </Router>
    </>
    </ContextDemo>
  );
};

const MainLayout = ({ onGameChange, onLeftItemClick, selectedGame, selectedLeftItem }) => {
  return (
    <>
      <Navbar />
      <GamesBar onGameChange={onGameChange} />
      <MainContent
        selectedGame={selectedGame}
        selectedLeftItem={selectedLeftItem}
        onLeftItemClick={onLeftItemClick}
      />
      
      <Footer />
    </>
  );
};

export default App;
