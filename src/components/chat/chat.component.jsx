import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import "./chat.styles.css"


const Chat = () => {
const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

const [state, setState] = useState(false)

const handleClick = () => {
    setState(!state)
}

const handleSend = () => {
    alert("clicked")
}

    return (
    <div>
        {isDesktopOrLaptop && 
            (<div onClick={handleClick} className="chat-bubble-container-desktop">
                <ChatBubbleOutlineIcon className="chat-bubble" style={{ fontSize: "33px"}}/>
            </div>)}
        {isMobile && 
            (<div onClick={handleClick} className="chat-bubble-container-mobile">
                <ChatBubbleOutlineIcon className="chat-bubble" style={{ fontSize: "33px"}}/>
            </div>)}
        {state && (
            <div className="chat-container">
                <div className="chat-header">
                    <div onClick={handleClick} className="closeItem-container">
                        <CloseIcon style={{color: "white", fontSize: "30px"}} />
                    </div>
                </div>
                <div className="chat-body"></div>
                <div className="chat-input">
                <div onClick={handleSend} className='send-icon-container'>
                    <SendIcon style={{fontSize: "30px", color: "white", margin: "auto" }} />
                </div>
                    <textarea className='input-field' />
                </div>
        </div>)}
    </div>
    )
   
}

export default Chat;