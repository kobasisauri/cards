import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [showCard, setShowCard] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCards([
      ...cards,
      { question: question, answer: answer, id: cards.length },
    ]);
    onClose();
  };

  const onClose = () => {
    setShowCard(false);
    setQuestion("");
    setAnswer("");
  };

  const onEdit = ({ question, answer, id }) => {
    setCards(cards.filter((i) => i.id !== id));

    setShowCard(true);
    setQuestion(question);
    setAnswer(answer);
  };

  return (
    <div className="wrapper">
      <h3>Flashcards</h3>
      <button onClick={() => setShowCard(true)}>Add Question</button>

      {showCard && (
        <div className="add-card">
          <div className="close">
            <button onClick={onClose}>&times;</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Question</label>
              <br />
              <textarea
                rows="4"
                cols="50"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div>
              <label>Answer</label>
              <br />
              <textarea
                rows="4"
                cols="50"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      )}

      {!!cards.length &&
        cards.map((item) => (
          <Card
            key={item.id}
            cardData={item}
            cards={cards}
            setCards={setCards}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
}

export default App;
