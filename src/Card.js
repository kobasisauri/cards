import "./App.css";

const Card = ({ cardData, cards, setCards, onEdit }) => {
  return (
    <div className="card">
      <h3>{cardData.question}</h3>
      <p>{cardData.answer}</p>

      <div className="buttons">
        <button onClick={() => onEdit(cardData)}>Edit</button>
        <button
          onClick={() => {
            setCards(cards.filter((i) => i.id !== cardData.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
