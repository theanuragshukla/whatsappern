import {NavMain ,DpDiv,Brand , Icons, Icon} from './navComponents'
import { Link} from 'react-router-dom'
import {VoiceCall,VideoCall,OptionsIcon,BackIcon,SendIcon,EmojiIcon} from './icons/AllIcons'
import {ChatMain,Chats,InputMain,InputDiv,Send,Input, MsgDiv,Msg,ChatBody} from './ChatComponents'
const Chat = () => { 
	return (
		<ChatMain>
		<NavMain>
		<Brand>
		<Link to='/'>
<Icons className="backIcon">
		<Icon className="backIcon">
		<BackIcon className="backIcon"></BackIcon>
		</Icon>
		</Icons></Link>
		<DpDiv>
		<div></div>
		</DpDiv>
		<span>Anurag Shukla</span>
		</Brand>
		<Icons>
		<Icon><VoiceCall/></Icon>
		<Icon><VideoCall/></Icon>
		<Icon><OptionsIcon/></Icon>
		</Icons>
		</NavMain>
		<ChatBody>
<Chats>

		<MsgDiv>
		<Msg>
Elit voluptatum ex fuga autem distinctio blanditiis totam. Harum delectus excepturi maiores itaque error Reprehenderit illum debitis ducimus fuga iure Minus quo pariatur elit rem labore Magni vero error repellendus
		</Msg>
		<div className="time">05:09pm</div>
		</MsgDiv>

		<MsgDiv right>
		<Msg>
Elit voluptatum ex fuga autem distinctio blanditiis totam. Harum delectus excepturi maiores itaque error Reprehenderit illum debitis ducimus fuga iure Minus quo pariatur elit rem labore Magni vero error repellendus
		</Msg>
		<div className="time">05:09pm</div>
		</MsgDiv>
		</Chats></ChatBody>
		<InputMain>
		<InputDiv>
		<Icons>
		<Icon>
		<EmojiIcon />
		</Icon>
		</Icons>
		<input type='text' placeholder='Message'/>
		</InputDiv>
		<Send>
		<Icons><Icon>
		<SendIcon/>
		</Icon>
		</Icons>
		</Send>
		</InputMain>
		</ChatMain>
	)
}
export default Chat
