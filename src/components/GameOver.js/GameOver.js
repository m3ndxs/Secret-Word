import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className='end-game'>
        <h2>Fim de Jogo!</h2>
        <h3>A sua pontuação foi: <span>{score}!</span></h3>
        <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default GameOver