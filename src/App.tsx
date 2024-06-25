import NavBar from "./components/NavBar";
import Card from "./components/Card";
import './NavBar.css'
import './Card.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Game, options } from './fetch.ts'

const App : React.FC = () => {
  const [sortQuery , setSortQuery] = useState<string>("popularity"); 
  const [tagQuery, setTagQuery] = useState<string>("3d");
  const [games, setGames] = useState<Game[]>([]); 

  const handleNavBarClick =  () => {
    const navBtn = document.querySelectorAll('.navbar-item')!; 
    const drpdwnBtn = document.querySelectorAll(".nav-dropdown-item");
    
    navBtn.forEach((Btn) => {
      Btn.addEventListener('click' ,  () => {
        setTagQuery(Btn.id);
        console.log(Btn.id);
      })
    })

    if(drpdwnBtn){
      drpdwnBtn.forEach((drpBtn) => {
        drpBtn.addEventListener('click' ,  () => {
          setSortQuery(drpBtn.id);
          console.log(drpBtn.id);
        })
      })
    }
  };

  const fetchGames = async (tag : string , sort : string) => {
    try {
      const response = await axios.request(options(tag, sort));
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
