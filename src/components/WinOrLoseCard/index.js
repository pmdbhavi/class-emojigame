import './index.css' 

const WinOrLossCard=(props)=>{
    const {score,onPlay,isWon}=props
    const onPlayButton=()=>{
        onPlay()
    }
    return(
        <div className="WinCard">
            <div className="ScoreContainer">
                <h1 className="Header">{isWon?"You Won":"You Lose"}</h1>
                <p className="Scoring">{isWon && "Best"} Score</p>
                <p className="Number">{score}/12</p>
                <button className="PlayButton" onClick={onPlayButton} type="button">PlayButton</button>
            </div>
            <img className="ImageCon" src={isWon ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"} alt="winorloss"/>
        </div>
    )
}

export default WinOrLossCard