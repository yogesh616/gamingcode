import React, { useEffect } from "react";
import "./Crickets.css";

const AmericanFootball = () => {
  const names = [
    {
      "match": "Cincinnati Bengals @ Dallas Cowboys",
      "date": "10/12/2024",
      "time": "06:10:00 AM"
  },
    // { match: "Australia v India", date: "06/12/2024", time: "09:30:00 AM" },
    // { match: "Western Province v Knights", date: "06/12/2024", time: "01:30:00 PM" },
    // { match: "Karnali Yaks v Biratnagar Kings", date: "07/12/2024", time: "01:00:00 PM" },
    // { match: "Bangladesh Women v Ireland Women", date: "07/12/2024", time: "01:30:00 PM" },
    // { match: "TKR XI v JT XI", date: "07/12/2024", time: "02:35:00 PM" },
    // { match: "Chennai Super Kings T10 v Super Giants T10", date: "07/12/2024", time: "03:05:00 PM" },
    // { match: "India T10 v West Indies T10", date: "07/12/2024", time: "03:10:00 PM" },
    // { match: "Brisbane Heat T10 v Adelaide Strikers T10", date: "07/12/2024", time: "03:15:00 PM" },
    // { match: "Test A v Test B", date: "05/12/2024", time: "12:00:00 AM" },
    // { match: "New Zealand v England", date: "06/12/2024", time: "03:30:00 AM" },
    // { match: "Rajasthan Royals XI v Lucknow Super Giants XI", date: "07/12/2024", time: "03:30:00 PM" },
    // { match: "Stallions v Panthers", date: "07/12/2024", time: "04:00:00 PM" },
    // { match: "Australia Women v India Women", date: "08/12/2024", time: "05:15:00 AM" },
    // { match: "Bangladesh Under-19 v India Under-19", date: "08/12/2024", time: "10:30:00 AM" },
    // { match: "South Africa Women v England Women", date: "08/12/2024", time: "01:30:00 PM" },
    // { match: "West Indies v Bangladesh", date: "08/12/2024", time: "07:00:00 PM" },
  ];

  const showGames = [
    {
        "name": "MINI SUPER OVER",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "GOAL",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "ANDAR BAZAR",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "130 CARDS",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "LUCKY 15",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    },
    {
        "name": "SUPER OVER2",
        "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover2.jpg"
    },
    {
        "name": "TEENPATTI",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI TEST",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI OPEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "1-DAY TEENPATTI",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "SIC BO",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BALL BY BALL",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT 2.0",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ROULETTE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI TEST",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI OPEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "POKER 6 PLAYERS",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BACCARAT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ONLINE BACCARAT",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 DRAGON TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "1 DAY DRAGON TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 TIGER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "20-20 DRAGON",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "32 CARDS RUMMY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "22 CARDS RUMMY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "3 CARDS JOKIWILD",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CASINO WAR",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "WORLD MATKA",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "INSTANT WORLD",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "ANDAR BAZAR",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "BOLLYWOOD CASINO",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "LOTTERY",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CRICKET LIVE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CRICKET MATCH 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "CASINO METER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "TEENPATTI 20-20",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "QUEEN",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "RACE",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "LUCKY 7-C",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "SUPER OVER",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
        "name": "THE TRAP",
        "image": "https://i.imgur.com/c59439a.png"
    },
    {
      "name": "2 Cards Teenpatti",
      "image": "https://i.imgur.com/c59439a.png" 
  },
  {
      "name": "Muflis Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20-20 Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "2 Cards Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20Card Baccarat",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Muflis Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Race to 17",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "20-20 Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Trio",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Note Number",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Kaun Banega Crorepati",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card 20-20",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card One-Day",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Roulette",
      "image": "https://i.imgur.com/c59439a.png"
  },
 
  {
      "name": "Race to 2nd",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Instant Teenpatti",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "Dus Ka Dum",
      "image": "https://i.imgur.com/c59439a.png"
  },
  {
      "name": "1 Card Meter",
      "image": "https://i.imgur.com/c59439a.png"
  }
]
  
/*  original 70 games list with images
const showGames = [
    {
        name: "20-20 Teenpatti C",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20c.jpg"
    }, 
    {
        name: "Bollywood Casino 2",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/btable2.jpg"
    },
     {
        name: "Unique Roulette",
      
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/ourroullete.jpg"
    }, 
    {
        name: "Mini Superover",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover3.jpg"
    }, 
    {
        name: "Goal",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg"
    }, 
    {
        name: "ANDAR BAHAR 150 cards",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/ab4.jpg"
    },
    {
        name: "Lucky 15", 
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky15.jpg"
    },
    {
        name: "Super Over2", 
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover2.jpg"
    },
    {
        name: "Queen Top Open Teenpatti",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen41.jpg"
    },
    {
        name: "Jack Top Open Teenpatti",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen42.jpg"
    },
    {
        name: "Beach Roulette",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette3.jpg"
    },
    {
        name: "Sic Bo2", 
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/sicbo2.jpg"
    }, 
    {
        name: "Golden Roulette",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette2.jpg"
    },
     {
        name: "Instant Teenpatti 3.0", 
        image : "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen33.jpg"
    },
    {
        name: "Sic Bo",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/sicbo.jpg"
    },
    {
        name: "Ball by Ball",
        image : "https://dataobj.ecoassetsservice.com/casino-icons/lc/ballbyball.jpg"
    },
    {
        name: "Instant Teenpatti 2.0",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen32.jpg"
    },
    {
        name: "Roulette BL",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette1.jpg"
    },
    {
        name: "Teenpatti 1-day",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen.jpg"
    },
    {
        name: "20-20 Teenpatti",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20.jpg"
    },
    {
        name: "Teenpatti Test",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen9.jpg"
    },
    {
        name: "Teenpatti Open",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen8.jpg"
    },
    {
        name: "Poker 1-Day",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/poker.jpg"
    },
    {
        name: "20-20 Poker",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/poker20.jpg"
    },
    {
        name: "Poker 6 Players",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/poker6.jpg"
    },
    {
        name: "Baccarat",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/baccarat.jpg"
    },
    {
        name: "Baccarat 2",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/baccarat2.jpg"
    },
    {
        name: "20-20 Dragon Tiger",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/dt20.jpg"
    },
    {
        name: "1 Day Dragon Tiger",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/dt6.jpg"
    },
    {
        name: "20-20 D T L",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/dtl20.jpg"
    },
    {
        name: "20-20 Dragon Tiger 2",
        image: "https://dataobj.ecoassetsservice.com/casino-icons/lc/dt202.jpg"
    },
  { "name": "32 Cards A", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/card32.jpg" },
  { "name": "32 Cards B", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/card32eu.jpg" },
  { "name": "Andar Bahar", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/ab20.jpg" },
  { "name": "Andar Bahar 2", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/abj.jpg" },
  { "name": "Lucky 7 - A", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7.jpg" },
  { "name": "Lucky 7 - B", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7eu.jpg" },
  { "name": "3 Cards Judgement", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/3cardj.jpg" },
  { "name": "Casino War", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/war.jpg" },
  { "name": "Worli Matka", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/worli.jpg" },
  { "name": "Instant Worli", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/worli2.jpg" },
  { "name": "Amar Akbar Anthony", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/aaa.jpg" },
  { "name": "Bollywood Casino", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/btable.jpg" },
  { "name": "Lottery", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/lottcard.jpg" },
  { "name": "5Five Cricket", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/cricketv3.jpg" },
  { "name": "Cricket Match 20-20", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/cmatch20.jpg" },
  { "name": "Casino Meter", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/cmeter.jpg" },
  { "name": "Teenpatti - 2.0", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen6.jpg" },
  { "name": "Queen", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/queen.jpg" },
  { "name": "Race20", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/race20.jpg" },
  { "name": "Lucky 7 - C", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7eu2.jpg" },
  { "name": "Super Over", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/superover.jpg" },
  { "name": "The Trap", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/trap.jpg" },
  { "name": "2 Cards Teenpatti", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/patti2.jpg" },
  { "name": "29Card Baccarat", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teensin.jpg" },
  { "name": "Muflis Teenpatti", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teenmuf.jpg" },
  { "name": "Race To 17", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/race17.jpg" },
  { "name": "20-20 Teenpatti B", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20b.jpg" },
  { "name": "Trio", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/trio.jpg" },
  { "name": "Note Number", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/notenum.jpg" },
  { "name": "K.B.C", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/kbc.jpg" },
  { "name": "1 CARD 20-20", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen120.jpg" },
  { "name": "1 CARD ONE-DAY", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen1.jpg" },
  { "name": "Roulette", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette.jpg" },
  { "name": "ANDAR BAHAR 50 cards", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/ab3.jpg" },
  { "name": "Amar Akbar Anthony 2", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/aaa2.jpg" },
  { "name": "Race to 2nd", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/race2.jpg" },
  { "name": "Instant Teenpatti", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/teen3.jpg" },
  { "name": "Dus ka Dum", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/dum10.jpg" },
  { "name": "1 Card Meter", "image": "https://dataobj.ecoassetsservice.com/casino-icons/lc/cmeter1.jpg" }
]
*/

  // const activeCircleIndices = [0, 1, 2, 3, 4, 5,6,7];
  // const televisionIndices = [0, 1, 2, 3, 4, 5, 8, 11, 14, 15];
  const fIconIndices = [0, 1, 2, 3, 4, 5, 9,11];
  

  return (
    <div className="crickets_container">
      <div className="line"></div>
      <div className="top_names">
        <p>Game</p>
        <div className="bet">
          <p>1</p>
          <p>X</p>
          <p>2</p>
        </div>
      </div>
      
      <div style={{padding:'5px 0px'}} className="games_descriptions aaa">
        {names.map((data, idx) => (
          <div className="set_data" key={idx}>
            <div className="set_names_icons">
              <div className="data_names">
                <span style={{ cursor: "pointer",padding:'5px 5px' }}>
                  {data.match}</span>
              </div>
              <div className="set_dataIcons">
                <div className="active_nonActive_icons">
                  {/* Circle Icon */}
                  {/* {activeCircleIndices.includes(idx) ? (
                    <span className="active_circle"></span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )} */}

                  {/* Television Icon */}
                  {/* {televisionIndices.includes(idx) ? (
                    <i className="ri-tv-fill"></i>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )} */}

                  {/* F Icon */}
                  {/* {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>f</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )} */}

                  {/* BM Icon */}
                  {/* {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>BM</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )} */}
                </div>
              </div>
            </div>
            <div style={{display:'none'}} className="place_bet">
              {/* first bet box  */}
              <div className="first_bet">
                <div className="first_betBox">-</div>
                <div className="second_betBox">-</div>
              </div>
              {/* second bet box */}
              <div className="second_bet">
              <div className="first_betBox">-</div>
              <div className="second_betBox">-</div>
              </div>
              {/* third bet box */}
              <div className="third_bet">
              <div className="first_betBox">-</div>
              <div className="second_betBox">-</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* show all games */}
      <div className="showAll_games ttt">
        {
          showGames.map((games,idx)=>{
            return <div className="games_img" key={idx}>
              <img src={games.image} alt="game_img" />
              <p>{games.name}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default AmericanFootball;
