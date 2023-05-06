import './index.css'

const Navbar=(props)=>{
    const {score,topScore,isGameProgress}=props
    return(
        <div className="NavbarCon">
            <div className="EmojiCon">
                <img className="EmojiImage" src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emojigame" />
                <h1 className="Heading">Emoji Game</h1>
            </div>
            <div className="ScoreCon">
            {isGameProgress && 
                <>
                <p className="Score">Score: {score}</p>
                <p className="TopScore">Top Score: {topScore}</p></>}
            </div>
        </div>
    )
}

export default Navbar