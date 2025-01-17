import React, { useRef, useState } from "react";
import { MdSportsCricket } from "react-icons/md";
import "./Home.css";
import {
  Politics,
  Cricket,
  Footballs,
  Tenniss,
  Kabaddis,
  Esoccers,
  HorseRacings,
  GreyHoundRacing,
  TableTenniss,
  Basketballs,
  Boxings,
  MixedMartialArts,
  AmericanFootball,
  Volleyballs,
  Badmintons,
  Snookers,
  IceHockeys,
  Egamess,
  Futsals,
  Handballs,
  MotorSportss,
} from "../DyanamicGamesInRightSection";
// import { GetCtx } from "../../ContextDemo/ContextDemo";
import Pages from "../Pages";

const Home = () => {
  const [selected, setSelected] = useState("Cricket");
  const listRef = useRef(null);

  const hightLightBoxes = [
    { id: 1, name: "New Zealand v England", icon: <MdSportsCricket />},
    { id: 2, name: "Australia v India", icon:<MdSportsCricket /> },
    { id: 3, name: "Brisbane Roar v Melbourne City", icon: <MdSportsCricket />},
    { id: 4, name: "South Africa v Sri Lanka", icon: <MdSportsCricket />},
    { id: 5, name: "Inter v Parma", icon: <MdSportsCricket />},
  ];
  

  const gameslistBar = [
    "Politics",
    "Cricket",
    "Football",
    "Tennis",
    "Kabaddi",
    "Esoccer",
    "Horse Racing",
    "Greyhound Racing",
    "Table Tennis",
    "Basketball",
    "Boxing",
    "Mixed Martial Arts",
    "American Football",
    "Volleyball",
    "Badminton",
    "Snooker",
    "Ice Hockey",
    "E Games",
    "Futsal",
    "Handball",
    "Motor Sports",
  ];

  // Map game names to their respective components
  const gameComponents = {
    Politics: <Politics />,
    Cricket: <Cricket />,
    Football: <Footballs />,
    Tennis: <Tenniss />,
    Kabaddi: <Kabaddis />,
    Esoccer: <Esoccers />,
    "Horse Racing": <HorseRacings />,
    "Greyhound Racing": <GreyHoundRacing />,
    "Table Tennis": <TableTenniss />,
    Basketball: <Basketballs />,
    Boxing: <Boxings />,
    "Mixed Martial Arts": <MixedMartialArts />,
    "American Football": <AmericanFootball />,
    Volleyball: <Volleyballs />,
    Badminton: <Badmintons />,
    Snooker: <Snookers />,
    "Ice Hockey": <IceHockeys />,
    "E Games": <Egamess />,
    Futsal: <Futsals />,
    Handball: <Handballs />,
    "Motor Sports": <MotorSportss />,
  };

  const handleItemClick = (item, index) => {
    setSelected(item); // Update the selected item

    // Scroll logic
    const listElement = listRef.current;
    const listItem = listElement.children[index];

    const itemLeft = listItem.offsetLeft;
    const itemWidth = listItem.offsetWidth;
    const containerWidth = listElement.offsetWidth;

    if (itemLeft + itemWidth > listElement.scrollLeft + containerWidth) {
      listElement.scrollLeft = itemLeft + itemWidth - containerWidth;
    } else if (itemLeft < listElement.scrollLeft) {
      listElement.scrollLeft = itemLeft;
    }
  };

  // const Ctx = GetCtx();
  // console.log(Ctx);
  

  return (
    <div className="home_container">
     <Pages />
    </div>
  );
};

export default Home;
