import NavBar from "./components/NavBar";
import Card from "./components/Card";
import './NavBar.css'
import './Card.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Game, options } from './fetch.ts'

const App : React.FC = () => {
  const query = "3d";
  const [games, setGames] = useState<Game[]>([]); 
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.request(options(query));
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <NavBar />
      <div className="card-container flex">
        {games.map(game => (
          <Card key={game.id} cardImgSrc={game.thumbnail} cardTitle={game.title} cardText={game.short_description} cardClick={() => {
            window.open(game.game_url, "_blank");
          }} />
        ))}
      </div>
    </>
  );
};

export default App;
