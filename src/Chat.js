import {NavMain ,DpDiv,Brand , Icons, Icon} from './navComponents'
import {VoiceCall,VideoCall,OptionsIcon,BackIcon,SendIcon} from './icons/AllIcons'
import {ChatMain,Chats,InputMain,InputDiv,Send} from './ChatComponents'
const Chat = () => {
	return (
		<ChatMain>
		<NavMain>
		<Brand>
		<Icons className="backIcon">
		<Icon className="backIcon">
		<BackIcon className="backIcon"></BackIcon>
		</Icon>
		</Icons>
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
		<Chats></Chats>
		<InputMain>
		<InputDiv>
		<Icons>
		<Icon>
		<OptionsIcon/>
		</Icon>
		</Icons>
		</InputDiv>
		<Send>

		<Icons><Icon>
		<SendIcon></SendIcon>
		</Icon>
		</Icons>
		</Send>
		</InputMain>
		</ChatMain>
	)
}
export default Chat
