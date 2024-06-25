import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import './NavBar.css';
import './Card.css';
import { Game, options } from './fetch';

const App: React.FC = () => {
  const [sortQuery, setSortQuery] = useState<string>("popularity");
  const [platQuery, setPlatQuery] = useState<string>("all");
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async (plat?: string, sort?: string) => {
    try {
      const response = await axios.request(options(plat, sort));
      setGames(response.data);
      console.log(response.data[0].title);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  useEffect(() => {
    fetchGames(platQuery, sortQuery);
  }, [platQuery, sortQuery]);

  const handleSortClick = async (sort: string) => {
    setSortQuery(sort);
    // Ensure fetchGames is called after state update
    await fetchGames(platQuery, sort);
  };

  const handlePlatClick = async (plat: string) => {
    setPlatQuery(plat);
    // Ensure fetchGames is called after state update
    await fetchGames(plat, sortQuery);
  };  


  return (
    <>
      <NavBar onPlatClick={handlePlatClick} onSortClick={handleSortClick} />
      <div className="card-container flex">
        {games.map(game => (
          <Card
            key={game.id}
            cardImgSrc={game.thumbnail}
            cardTitle={game.title}
            cardText={game.short_description}
            cardClick={() => {
              window.open(game.game_url, "_blank");
            }}
          />
        ))}
      </div>
    </>
  );
};

export default App;
