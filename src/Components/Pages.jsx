import React, { useState, useEffect } from "react";
import { MdSportsCricket } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './InsideGamesBarList/Home.css'
import {
  politics,
  cricket,
  football,
  tennis,
  kabaddi,
  esoccer,
  horseRacing,
  greyHound,
  tableTennis,
  basketBall,
  boxing,
  mixedMartialArt,
  americanFootball,
  volleyBall,
  badminton,
  snooker,
  iceHockey,
  eGames,
  futsal,
  handBall,
  motorSport,
} from "./DyanamicGamesInRightSection/SectionGames";
import showGames from "./DyanamicGamesInRightSection/showGames";

function Pages() {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Politics");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  // Icon indices
  const activeCircleIndices = [0, 1, 2, 3, 4, 5, 6, 7];
  const televisionIndices = [0, 1, 2, 3, 4, 5, 8, 11, 14, 15];
  const fIconIndices = [0, 1, 2, 3, 4, 5, 9, 11];

  const gamesData = {
    Politics: politics,
    Cricket: cricket,
    Football: football,
    Tennis: tennis,
    Kabaddi: kabaddi,
    Esoccer: esoccer,
    "HorseRacing": horseRacing,
    "Greyhound ": greyHound,
    "TableTennis": tableTennis,
    Basketball: basketBall,
    Boxing: boxing,
    "MixedMartialArts": mixedMartialArt,
    "AmericanFootball": americanFootball,
    Volleyball: volleyBall,
    Badminton: badminton,
    Snooker: snooker,
    "IceHockey": iceHockey,
    "EGames": eGames,
    Futsal: futsal,
    Handball: handBall,
    "MotorSports": motorSport,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = (id) => {
    const data = gamesData[selectedCategory]?.find((item) => item.id === id);
    setSelectedId(id);
    setSelectedData(data);
  };

  useEffect(() => {
    if (selectedCategory === "HorseRacing" || selectedCategory === "Greyhound") {
      const firstElement = gamesData[selectedCategory]?.[0];
      if (firstElement) {
        setSelectedId(firstElement.id);
        setSelectedData(firstElement);
      }
    } else {
      setSelectedId(null);
      setSelectedData(null);
    }
  }, [selectedCategory]);

    const hightLightBoxes = [
      { id: 1, name: "New Zealand v England", icon: <MdSportsCricket />},
      { id: 2, name: "Australia v India", icon:<MdSportsCricket /> },
      { id: 3, name: "Brisbane Roar v Melbourne City", icon: <MdSportsCricket />},
      { id: 4, name: "South Africa v Sri Lanka", icon: <MdSportsCricket />},
      { id: 5, name: "Inter v Parma", icon: <MdSportsCricket />},
    ];

  return (
    <div>
         <div className="highlights_box">
  {hightLightBoxes.map((boxes, idx) => (
    <div key={idx} className="highlight_box">
      <a className="blink_me" >
        <span style={{marginRight:'0.5rem'}}>{boxes.icon}</span> 
        <span>{boxes.name}</span> 
      </a>
    </div>
  ))}
</div>
      <div
        className="game_bar"
      
      >
        <ul className="boxes">
        
        {Object.keys(gamesData).map((game, index) => (
          <span
            key={index}
            className={` ${selectedCategory === game ? "selected" : ""}`}
            style={{
              display: "inline-block",
              margin: "0 10px",
              cursor: "pointer",
              padding: "5px 10px",
              backgroundColor: selectedCategory === game ? "#ccc" : "#f5f5f5",
              borderRadius: "5px",
            }}
            onClick={() => handleCategoryClick(game)}
          >
            {game}
          </span>
        ))}
         
       </ul>

      
      </div>

      {selectedCategory === "Horse Racing" || selectedCategory === "Greyhound " ? (
        <>
          <div className="short_name">
            {gamesData[selectedCategory]?.map((data) => (
              <li
                key={data.id}
                className={`short_data ${selectedId === data.id ? "selected" : ""}`}
                onClick={() => handleClick(data.id)}
              >
                {data.short}
              </li>
            ))}
          </div>

          {selectedData && (
            <div className="details">
              {Object.keys(selectedData)
                .filter((key) => key.startsWith("data"))
                .map((key, idx) => (
                  <div className="set_selectedData" key={key}
                 
                  >
                    <div className="set_names_icons">
                      <div className="data_names">
                        <span>{selectedData[key]}</span>
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
                  </div>
                ))}
            </div>
          )}
        </>
      ) : (
        <div className="selected_category_display">
          {selectedCategory && gamesData[selectedCategory]?.length > 0 ? (
            gamesData[selectedCategory].map((data, idx) => (
              <div className="set_data" key={idx}
              onClick={() => navigate(data.route)}
              >
                <div className="set_names_icons">
                  <div className="data_names">
                   {
                     <span style={{ cursor: "pointer" }}>
                      {data.match} / {data.date} / {data.time}
                    </span>
                   }
                  </div>
                  <div className="set_dataIcons">
                    <div className="active_nonActive_icons">
                      {activeCircleIndices.includes(idx) ? (
                        <span className="active_circle"></span>
                      ) : (
                        <span className="icon_placeholder"></span>
                      )}
                      {televisionIndices.includes(idx) ? (
                        <i className="ri-tv-fill"></i>
                      ) : (
                        <span className="icon_placeholder"></span>
                      )}
                      {fIconIndices.includes(idx) ? (
                        <span style={{ fontWeight: "bold" }}>f</span>
                      ) : (
                        <span className="icon_placeholder"></span>
                      )}
                      {fIconIndices.includes(idx) ? (
                        <span style={{ fontWeight: "bold" }}>BM</span>
                      ) : (
                        <span className="icon_placeholder"></span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="place_bet">
                  <div className="first_bet">
                    <div className="first_betBox">-</div>
                    <div className="second_betBox">-</div>
                  </div>
                  <div className="second_bet">
                    <div className="first_betBox">-</div>
                    <div className="second_betBox">-</div>
                  </div>
                  <div className="third_bet">
                    <div className="first_betBox">-</div>
                    <div className="second_betBox">-</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data available for the selected category.</p>
          )}
        </div>
      )}

      <div className="showAll_games">
        {showGames.map((games, idx) => (
          <div className="games_img" key={idx}
          style={{cursor: "pointer"}}
          onClick={() => navigate(games.route)}
          >
            <img src={games.image} alt="game_img" />
            <p>{games.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
