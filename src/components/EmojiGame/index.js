import {Component} from 'react'
import Navbar from '../Navbar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component{
    state={list:[],topScore:0,isGameProgress:true}

    getUpdatedList=()=>{
        const {emojisList}=this.props
        const updatedList=(emojisList.sort(()=>Math.random()-0.5))
        return updatedList
    }

    getRenderScore=(score)=>{
        const {topScore}=this.state
        let newScore=topScore
        if(score>topScore){
            newScore=score
        }
        this.setState({topScore:newScore})
        this.setState({isGameProgress:false})
    }

    onClickEmoji=(id)=>{
        const {emojisList}=this.props
        const {list}=this.state
        const isEmojiPresent=list.includes(id)
        if(isEmojiPresent){
            this.getRenderScore(list.length)
        }
        else{
            if(list.length===emojisList.length-1){
                this.getRenderScore(emojisList.length)
            }
            this.setState(prevState=>({list:[...prevState.list,id]}))
        }
    }
    onPlay=()=>{
        this.setState({isGameProgress:true})
        this.setState({list:[]})
    }

    render(){
        const {emojisList}=this.props
        const {list,isGameProgress,topScore}=this.state
        return(
            <div className="MainContainer">
                <Navbar topScore={topScore} score={list.length} isGameProgress={isGameProgress} />
                <div className="Bottom">
                    {isGameProgress ? 
                    <ul className="Con">
                        {this.getUpdatedList().map(each=>(
                            <EmojiCard details={each} key={each.id} toChange={this.onClickEmoji}/>
                        ))}
                    </ul>:
                    <WinOrLossCard score={list.length} isWon={list.length===emojisList.length} onPlay={this.onPlay}/>
                    }
                </div>
            </div>
        )
    }
}
export default EmojiGame