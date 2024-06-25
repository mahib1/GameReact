interface CardProps {
  cardImgSrc? : string; 
  cardTitle? : string; 
  cardText? : string;
  cardUrl? : string;
  cardClick?: () => void;
}

const Card = ({cardImgSrc, cardTitle, cardText, cardClick} : CardProps) => {
  return (
    <div className="card" id="card" onClick={cardClick}>
      <img className="card-img-top" src={cardImgSrc ? `${cardImgSrc}` : ".../100px180"} alt={cardTitle ? `${cardTitle}` : "Image"} />
      <div className="card-body">
        <h5 className="card-title"><strong>{cardTitle ? cardTitle : "No Title"}</strong></h5>
        <p className="card-text">{cardText ? cardText : "No information available"}</p>
      </div>
    </div>
  );
}

export default Card;
