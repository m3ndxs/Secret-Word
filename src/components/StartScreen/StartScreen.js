import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>SecretWord</h1>

        <button onClick={startGame} className="btn-start">Começar o jogo</button>
    </div>
  )
}

export default StartScreen