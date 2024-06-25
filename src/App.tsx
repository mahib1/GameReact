import NavBar from "./components/NavBar";
import Card from "./components/Card";
import './NavBar.css'
import './Card.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Game, options } from './fetch.ts'

const App : React.FC = () => {
  const [sortQuery , setSortQuery] = useState("popularity"); 
  const [tagQuery, setTagQuery] = useState("3d");
  const [games, setGames] = useState<Game[]>([]); 
  const [drpMenuVis, setDrpMenuVis] = useState(0);

  const handleNavBarClick = () => {
    const navBtn = document.querySelectorAll('.navbar-item')!;
    const drpdwnBtn = document.querySelector(".navbar-dropdown .dropdown");
    console.log(drpdwnBtn);
    
    navBtn.forEach((Btn) => {
      Btn.addEventListener('click' , async () => {
        setTagQuery(Btn.id);
        await fetchGames(tagQuery, sortQuery);
        console.log(`tagQuery is ${tagQuery} and sortQuery is ${sortQuery}`);
      })
    })
  
  };

  const fetchGames = async (tag : string , sort : string) => {
    try {
      const response = await axios.request(options(sort, tag));
      setGames(response.data);
      console.log(response.data[0].title);
    } 
    catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  useEffect(() => {
    fetchGames(tagQuery, sortQuery);
  }, [tagQuery, sortQuery]);
  
  useEffect(() => {
    handleNavBarClick();
  }, []);


  return (
    <>
      <NavBar clickBtn={handleNavBarClick}/>
      <div className="card-container flex">
        {  
          games.map(game => (
            <Card key={game.id} cardImgSrc={game.thumbnail} cardTitle={game.title} cardText={game.short_description} cardClick={() => {
              window.open(game.game_url, "_blank");
            }} />
          ))
        }
      </div>
    </>
  );
};

export default App;
