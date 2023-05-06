import './index.css'

const EmojiCard=(props)=>{
    const {details,toChange}=props
    const {id,emojiName,emojiUrl}=details
    const getChanged=()=>{
        toChange(id)
    }

    return(
        <div className="CardCon">
            <button type="button" className="Button" onClick={getChanged}>
                <img className="CardImage" src={emojiUrl} alt={emojiName}/>
            </button>
        </div>
    )
}
export default EmojiCard