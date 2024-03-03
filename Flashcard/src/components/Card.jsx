import { useState, useEffect } from 'react';

const Card = (props) => {
  let questions = {
    "Who Has Won the Most Ballon d'Ors in History?": 'Lionel Messi',
    "Which Club Has Won the Most Champions Leagues?": 'Real Madrid',
    "Who Is The Most Expensive Goalkeeper Of All-Time?": 'Kepa Arrizabalaga',
    "Which Two Clubs Have Won The Sextuple?": 'Bayern Munich and Barcelona',
    "Who Scored The Hand of God Goal?" : 'Diego Maradona',
    "Who Is The Youngest La Liga Goalscorer Currently?": 'Lamine Yamal',
    'Who is The All Time Top World Cup Scorer?': 'Miroslav Klose',
    "How many World Cups have there been in history?": '22',
    "Which Clubs Has Pep Guardiola Managed?": 'Manchester City, Barcelona, and Bayern Munich',
    "What Is The Record For Most Goals Scored In A Calendar Year": '91',
  };
  let randomIndex = Math.floor(Math.random() * Object.keys(questions).length);
  let randomWord = Object.keys(questions)[randomIndex];
  let translation = questions[randomWord];

  const [begun, begin] = useState(false);
  const [itDisplayed, changeWord] = useState(randomWord);
  const [engDisplayed, changeTranslation] = useState(translation);

  useEffect(() => {
    let newTranslation = questions[itDisplayed];
    changeTranslation(newTranslation);
  }, [itDisplayed]);

  const [display, changeDisplay] = useState(itDisplayed);

  const beginGame = () => {
    if (begun === false) {
      return (
        <div className='card'>
          <button
            className='begin-btn'
            onClick={() => begin(true)}>
            Begin
          </button>
        </div>
      );
    } else {
      return (
        <div className='game'>
          <div
            className='card'
            onClick={() =>
              changeDisplay(
                display === itDisplayed ? engDisplayed : itDisplayed
              )
            }>
            <p>{display}</p>
          </div>
          <button
            className='next-btn'
            onClick={() => {
              let newIndex = Math.floor(
                Math.random() * Object.keys(questions).length
              );
              let newWord = Object.keys(questions)[newIndex];
              let newTranslation = questions[newWord];
              changeWord(newWord);
              changeTranslation(newTranslation);
              changeDisplay(newWord);
            }}>
            Next
          </button>
        </div>
      );
    }
  };

  return beginGame();
};

export default Card;