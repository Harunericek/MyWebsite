import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useMediaQuery } from 'react-responsive';
import "./chat.styles.css"


const Chat = () => {
const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
    return (
    <div>      
{isDesktopOrLaptop && 
(<div className="chat-bubble-container-desktop">
                <ChatBubbleOutlineIcon className="chat-bubble" style={{ fontSize: "33px"}}/>
            </div>)}
            {isMobile && (<div className="chat-bubble-container-mobile">
                <ChatBubbleOutlineIcon className="chat-bubble" style={{ fontSize: "33px"}}/>
            </div>)}

    </div>
    )
   
}

export default Chat;