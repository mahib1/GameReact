import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import './NavBar.css';
import './Card.css';
import { Game, options } from './fetch';

const App: React.FC = () => {
  const [sortQuery, setSortQuery] = useState<string>("popularity");
  const [tagQuery, setTagQuery] = useState<string>("pc");
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async (tag?: string, sort?: string) => {
    try {
      const response = await axios.request(options(sort, tag));
      setGames(response.data);
      console.log(response.data[0].title);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  useEffect(() => {
    fetchGames(tagQuery,sortQuery);
  }, [tagQuery, sortQuery]);

  const handleSortClick = (sort: string) => {
    console.log(`sort Query is : ${sortQuery}\nand tagQuery is ${tagQuery}`);
    setSortQuery(sort);
  };

  const handleTagClick = (tag: string) => {
    console.log(`sort Query is : ${sortQuery}\nand tagQuery is ${tagQuery}`);
    setTagQuery(tag);
  };

  return (
    <>
      <NavBar onTagClick={handleTagClick} onSortClick={handleSortClick} />
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
