// import Card from './components/Card'
// import axios from 'axios';
// const URL = "https://www.freetogame.com/api"

export interface Game {
  id : number ;
  title : string; 
  thumbnail : string; 
  short_description : string; 
  game_url : string; 
  genre : string; 
  release_date : Date; 

}

export const options = (query : string) => {
  return ({
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
    params: {tag: `${query ? query : "3d"}`},
    headers: {
      'x-rapidapi-key': '28466ec499msh54be0d349a93043p1b76eejsnba1a3ca8b9bc',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  });
};

