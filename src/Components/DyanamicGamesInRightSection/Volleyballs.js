import React from "react";
import "./Crickets.css";

const Volleyballs = () => {
  const names = [
    {
      "match": "turan turkestan W - Gracia-KZ W",
      "date": "09/12/2024",
      "time": "04:30:00 PM"
  },
  {
      "match": "Hacettepe University - Medipol Universitesi Istanbul",
      "date": "09/12/2024",
      "time": "04:30:00 PM"
  },
  {
      "match": "Oshmu Universitet - Budan U20",
      "date": "09/12/2024",
      "time": "05:25:00 PM"
  },
  {
      "match": "Kara Suu-Umar - Ala-Buka",
      "date": "09/12/2024",
      "time": "05:31:00 PM"
  },
  {
      "match": "Atilim Universitesi - Ankara University",
      "date": "09/12/2024",
      "time": "06:30:00 PM"
  },
  {
      "match": "Berel Bko W - Zhetysu W",
      "date": "09/12/2024",
      "time": "07:00:00 PM"
  },
  {
      "match": "Al Shamal - Al Gharafa",
      "date": "09/12/2024",
      "time": "09:30:00 PM"
  },
  {
      "match": "LP Kangasala W - Polkky Kuusamo W",
      "date": "09/12/2024",
      "time": "09:55:00 PM"
  },
  {
      "match": "Al-Nasr - Al-Shabbab",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Akaa - TuTo",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Legionowo W - Gedania Gdansk W",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "KS Palac Bydgoszcz W - MKS Sokol Mogilno W",
      "date": "09/12/2024",
      "time": "10:00:00 PM"
  },
  {
      "match": "Subotica - Karadjordje Topola",
      "date": "09/12/2024",
      "time": "11:25:00 PM"
  },
  {
      "match": "Anagennisi Rysiou W U20 - Akadimies Protathiton Pefkon W U20",
      "date": "10/12/2024",
      "time": "12:30:00 AM"
  },
  {
      "match": "Futura Giovani Busto Arsizio W - Cremona W",
      "date": "10/12/2024",
      "time": "12:30:00 AM"
  },
  {
      "match": "MEAFC Miskolc - MAFC",
      "date": "10/12/2024",
      "time": "12:30:00 AM"
  },
  {
      "match": "SIP Sempeter W - GEN-I Nova Gorica W",
      "date": "10/12/2024",
      "time": "01:00:00 AM"
  },
  {
      "match": "MKS Baniemex Bedzin - Asseco Resovia Rzeszow",
      "date": "10/12/2024",
      "time": "01:00:00 AM"
  },
  {
      "match": "Melissiakos AO W - Spata Gaia W",
      "date": "10/12/2024",
      "time": "01:10:00 AM"
  },
  {
      "match": "Fluminense W - Brasilia Volei W",
      "date": "10/12/2024",
      "time": "03:00:00 AM"
  },
  {
      "match": "Sesi Bauru W - Mackenzie W",
      "date": "10/12/2024",
      "time": "06:00:00 AM"
  },
  {
      "match": "Astana W - Karaganda W",
      "date": "10/12/2024",
      "time": "11:30:00 AM"
  },
  {
      "match": "Irtysh-Kazchrome W - VC Almaty W",
      "date": "10/12/2024",
      "time": "02:00:00 PM"
  },
  {
      "match": "Zhetysu W - turan turkestan W",
      "date": "10/12/2024",
      "time": "04:30:00 PM"
  },
  {
      "match": "Cizre Belediyesi - Akkus Belediyesi",
      "date": "10/12/2024",
      "time": "06:30:00 PM"
  }
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

  const activeCircleIndices = [0, 1, 2, 3, 4, 5,6,7];
  const televisionIndices = [0, 1, 2, 3, 4, 5, 8, 11, 14, 15];
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
      <div className="line2"></div>
      <div className="games_descriptions">
        {names.map((data, idx) => (
          <div className="set_data" key={idx}>
            <div className="set_names_icons">
              <div className="data_names">
                <span style={{ cursor: "pointer" }}>
                  {data.match} / {data.date} / {data.time}
                </span>
              </div>
              <div className="set_dataIcons">
                <div className="active_nonActive_icons">
                  {/* Circle Icon */}
                  {activeCircleIndices.includes(idx) ? (
                    <span className="active_circle"></span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* Television Icon */}
                  {televisionIndices.includes(idx) ? (
                    <i className="ri-tv-fill"></i>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* F Icon */}
                  {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>f</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}

                  {/* BM Icon */}
                  {fIconIndices.includes(idx) ? (
                    <span style={{ fontWeight: "bold" }}>BM</span>
                  ) : (
                    <span className="icon_placeholder"></span>
                  )}
                </div>
              </div>
            </div>
            <div className="place_bet">
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
      <div className="showAll_games">
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

export default Volleyballs;
