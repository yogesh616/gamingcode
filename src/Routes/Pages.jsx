import React from 'react'
import { useNavigate } from 'react-router';

function Pages() {
    const navigate = useNavigate();
    const games = [
        { name: "TeenPattiC", route: "/TeenPattiC" },
        { name: "BollywoodCasino2", route: "/BollywoodCasino2" },
        { name: "UniqueRoullete", route: "/UniqueRoullete" },
        { name: "MiniSuperOver", route: "/MiniSuperOver" },
        { name: "Goal", route: "/Goal" },
        { name: "AndarBahar150Cards", route: "/AndarBahar150Cards" },
        { name: "Lucky15", route: "/Lucky15" },
        { name: "SuperOver2", route: "/SuperOver2" },
        { name: "QueenTopOpenTeenPatti", route: "/QueenTopOpenTeenPatti" },
        { name: "JackTopOpenTeenPatti", route: "/JackTopOpenTeenPatti" },
        { name: "SicBo2", route: "/SicBo2" },
        { name: "InstantTeenPatti3_0", route: "/InstantTeenPatti3_0" },
        { name: "SicBo", route: "/SicBo" },
        { name: "BallByBall", route: "/BallByBall" },
        { name: "InstantTeenPatti2_0", route: "/InstantTeenPatti2_0" },
        { name: "TeenPatti1Day", route: "/TeenPatti1Day" },
        { name: "TeenPatti20_20", route: "/TeenPatti20_20" },
        { name: "Poker6Players", route: "/Poker6Players" },
        { name: "Baccarat", route: "/Baccarat" },
        { name: "Baccarat2", route: "/Baccarat2" },
        { name: "DragonTiger20_20", route: "/DragonTiger20_20" },
        { name: "DragonTiger1day", route: "/DragonTiger1day" },
      
        { name: "DragonTiger2_20_20", route: "/DragonTiger2_20_20" },
        { name: "Cards32_A", route: "/Cards32_A" },
        { name: "Cards32_B", route: "/Cards32_B" },
        { name: "AndarBahar", route: "/AndarBahar" },
        { name: "AndarBahar2", route: "/AndarBahar2" },
        { name: "Lucky7_A", route: "/Lucky7_A" },
        { name: "Lucky7_B", route: "/Lucky7_B" },
      ];
      

      const casinoData = [
        {
          name: '20-20 Teenpatti C',
          route: '/TeenPattiC',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20c.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Bollywood Casino 2',
          route: '/BollywoodCasino2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/btable2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Unique Roulette',
          route: '/UniqueRoullete',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/ourroullete.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Mini Superover',
          route: '/MiniSuperOver',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/superover3.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Goal',
          route: '/Goal',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/goal.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'ANDAR BAHAR 150 cards',
          route: '/AndarBahar150Cards',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/ab4.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Lucky 15',
          route: '/Lucky15',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky15.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Super Over2',
          route: '/SuperOver2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/superover2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Queen Top Open Teenpatti',
          route: '/QueenTopOpenTeenPatti',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen41.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Jack Top Open Teenpatti',
          route: '/JackTopOpenTeenPatti',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen42.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Beach Roulette',
          route: '/UniqueRoullete',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette3.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Sic Bo2',
          route: '/SicBo2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/sicbo2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Golden Roulette',
          route: '/UniqueRoullete',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Instant Teenpatti 3.0',
          route: '/InstantTeenPatti3_0',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen33.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Sic Bo',
          route: '/SicBo',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/sicbo.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Ball by Ball',
          route: '/BallByBall',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/ballbyball.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Instant Teenpatti 2.0',
          route: '/InstantTeenPatti2_0',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen32.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Roulette BL',
          route: '/UniqueRoullete',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette1.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Teenpatti 1-day',
          route: '/TeenPatti1Day',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '20-20 Teenpatti',
          route: '/TeenPatti20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Teenpatti Test',
          route: '/TeenPattiTest',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen9.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Teenpatti Open',
          route: '/TeenPattiOpen',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen8.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Poker 1-Day',
          route: '/Poker1Day',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/poker.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '20-20 Poker',
          route: '/Poker20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/poker20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Poker 6 Players',
          route: '/Poker6Players',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/poker6.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Baccarat',
          route: '/Baccarat',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/baccarat.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Baccarat 2',
          route: '/Baccarat2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/baccarat2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '20-20 Dragon Tiger',
          route: '/DragonTiger20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/dt20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '1 Day Dragon Tiger',
          route: '/DragonTiger1day',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/dt6.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '20-20 D T L',
          route: '/DTL20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/dtl20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '20-20 Dragon Tiger 2',
          route: '/DragonTiger2_20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/dt202.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '32 Cards A',
          route: '/Cards32_A',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/card32.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '32 Cards B',
          route: '/Cards32_B',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/card32eu.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Andar Bahar',
          route: '/AndarBahar',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/ab20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Andar Bahar 2',
          route: '/AndarBahar2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/abj.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Lucky 7 - A',
          route: '/Lucky7_A',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Lucky 7 - B',
          route: '/Lucky7_B',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7eu.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '3 Cards Judgement',
          route: '/Cards3_judgement',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/3cardj.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Casino War',
          route: '/CasinoWar',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/war.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Worli Matka',
          route: '/WorliMatka',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/worli.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Instant Worli',
          route: '/InstantWorli',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/worli2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Amar Akbar Anthony',
          route: '/AmarAkbarAnthony',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/aaa.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Bollywood Casino',
          route: '/BollywoodCasino',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/btable.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Lottery',
          route: '/Lottery',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/lottcard.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '5Five Cricket',
          route: '/FiveFiveCricket',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/cricketv3.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Cricket Match 20-20',
          route: '/CricketMatch20_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/cmatch20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Casino Meter',
          route: '/CasinoMeter',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/cmeter.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Teenpatti - 2.0',
          route: '/TeenPatti2_0',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen6.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        }, 
        {
          name: 'Queen',
          route: '/Queen',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/queen.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Race20',
          route: '/Race_20',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/race20.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Lucky 7 - C',
          route: '/Lucky7C',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/lucky7eu2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Super Over',
          route: '/SuperOver',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/superover.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'The Trap',
          route: '/TheTrap',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/trap.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '2 Cards Teenpatti',
          route: '/CardsTeenpatti2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/patti2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        }, 
        {
          name: '29Card Baccarat',
          route: '/CardTeenpatti29',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teensin.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Muflis Teenpatti',
          route: '/MuflisTeenpatti',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teenmuf.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Race To 17',
          route: '/RaceTo17',
          primaryImage:
          'https://dataobj.ecoassetsservice.com/casino-icons/lc/race17.jpg',
        fallbackImage:
          'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        }, 
        {
          name: '20-20 Teenpatti B',
          route: '/Teenpatti20_20B',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen20b.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Trio',
          route: '/Trio',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/trio.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Note Number',
          route: '/NoteNumber',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/notenum.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'K.B.C',
          route: '/KBC',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/kbc.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '1 CARD 20-20',
          route: '/Card20_20_1',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen120.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '1 CARD ONE-DAY',
          route: '/CardOneDay_1',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen1.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Roulette',
          route: '/Roulette',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/roulette.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'ANDAR BAHAR 50 cards',
          route: '/AndarBahar50_Cards',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/ab3.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Amar Akbar Anthony 2',
          route: '/AmarAkbarAnthony2',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/aaa2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Race to 2nd',
          route: '/RaceTo2nd',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/race2.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Instant Teenpatti',
          route: '/InstantTeenpatti',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/teen3.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: 'Dus ka Dum',
          route: '/DusKaDum',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/dum10.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        },
        {
          name: '1 Card Meter',
          route: '/CardMeter1',
          primaryImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/lc/cmeter1.jpg',
          fallbackImage:
            'https://dataobj.ecoassetsservice.com/casino-icons/default.jpg',
        }
      ];
  return (
    <div className='w-full'>
      <div className="flex flex-col px-5 py-2 bg-slate-800 text-white gap-4">
      <h1 className='text-4xl'>Routes</h1>
      <div className='w-full h-[1px] bg-slate-500 shadow-md'></div>
      <ul className=' hidden items-center flex-wrap justify-center gap-4 '>
        {
            games.map((game, index) => (
                <li key={index} className='m-2 bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300' onClick={() => navigate(game.route)}>
                <button className='text-black hover:text-slate-300' to={game.route}>{game.name}</button>
                </li>
            ))
        }
      </ul>
      <div className='casino-list mt-2'>
        {
          casinoData.map((casinoData, index) => (
            
        <div className="casino-list-item" key={index}>
          <a onClick={() => navigate(casinoData.route)}>
          <div 
              className="casino-list-item-banner"
              style={{
                backgroundImage: `url(${casinoData.primaryImage}), url(${casinoData.fallbackImage})`
              }}
            />
           <div className="casino-list-name">{casinoData.name}</div></a></div>

          ))
        }
      </div>



      </div>
    </div>
  )
}

export default Pages
